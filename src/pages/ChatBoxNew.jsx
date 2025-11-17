import React, { useState, useEffect, useRef } from "react";
import { auth, db } from "../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

function ChatBoxNew() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const messagesEndRef = useRef(null);

  // 🔹 Users in system
  const allUsers = ["shakeel12@gmail.com", "usman@gmail.com"];

  // 🔹 Listen for Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsubscribe();
  }, []);

  // 🔹 Create consistent room ID for both users
  const getRoomId = (user1, user2) => {
    return [user1, user2].sort().join("_");
  };

  // 🔹 Listen for real-time messages
  useEffect(() => {
    if (!user || !recipientEmail) return;

    const roomId = getRoomId(user.email, recipientEmail);
    const messagesRef = collection(db, "chats", roomId, "messages");
    const q = query(messagesRef, orderBy("timestamp"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, [user, recipientEmail]);

  // 🔹 Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 🔹 Send message
  const sendMessage = async () => {
    if (!input.trim() || !user || !recipientEmail) return;

    const roomId = getRoomId(user.email, recipientEmail);
    const messagesRef = collection(db, "chats", roomId, "messages");

    await addDoc(messagesRef, {
      text: input,
      senderEmail: user.email,
      timestamp: serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-md-8">

          {/* 🔹 Chat header */}
          <div className="card shadow-sm mb-3">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <div className="fw-bold">
                  {user ? user.email : "Guest"}
                </div>
                <div className="text-muted small">
                  {user ? "Online" : "Please sign in"}
                </div>
              </div>

              {/* 🔹 Select recipient */}
              <div>
                <select
                  className="form-select"
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                >
                  <option value="">Select recipient...</option>
                  {allUsers
                    .filter((u) => u !== user?.email)
                    .map((u) => (
                      <option key={u} value={u}>
                        {u}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>

          {/* 🔹 Messages */}
          <div
            className="card shadow-sm mb-3"
            style={{ height: "60vh", overflowY: "auto" }}
          >
            <div className="card-body">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`d-flex mb-2 ${
                    msg.senderEmail === user?.email
                      ? "justify-content-end"
                      : "justify-content-start"
                  }`}
                >
                  <div
                    className={`p-2 rounded-3 ${
                      msg.senderEmail === user?.email
                        ? "bg-primary text-white"
                        : "bg-light"
                    }`}
                    style={{ maxWidth: "70%" }}
                  >
                    <div className="small text-muted">
                      {msg.senderEmail === user?.email ? "You" : msg.senderEmail}
                    </div>
                    <div>{msg.text}</div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* 🔹 Input box */}
          <div className="d-flex gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="form-control rounded-3"
              placeholder="Type your message..."
              rows="1"
            />
            <button
              onClick={sendMessage}
              className="btn btn-primary"
              disabled={!user || !input.trim() || !recipientEmail}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBoxNew;
