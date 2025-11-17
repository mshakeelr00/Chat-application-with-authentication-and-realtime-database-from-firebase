import React, { useEffect, useRef, useState } from "react";   //import hook function useeffect, useref for db 
import { onValue, ref } from "firebase/database";             //import firebase database functions
import { auth, db } from "../Firebase";                       //import authentication and databzse from friebase
import MessageInput from "./MessageInput";                    

//main chat function
const ChatWindow = () => {
  const [messages, setMessages] = useState([]);          //message usestate
  const messageEndRef = useRef(null);                    

  // 🔹 Load messages from Firebase
  useEffect(() => {
    const node = ref(db, "Message");
    onValue(node, (snapshot) => {
      const data = snapshot.val();
      if (!data) return;
      const allMessages = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      // Sort messages by time
      const sorted = allMessages.sort(
        (a, b) => (a.timeStamp || 0) - (b.timeStamp || 0)
      );
      setMessages(sorted);
    });
  }, []);

  // 🔹 Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollTop = messageEndRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="d-flex flex-column h-100 bg-white">
      {/* 🔹 Chat Header */}
      <div className="border-bottom p-3 d-flex align-items-center">
        <img
          src="https://i.pravatar.cc/40?img=8"
          className="rounded-circle me-3"
          alt="avatar"
        />
        <div>
          <h6 className="mb-0 fw-bold">Bill Kuphal</h6>
          <small className="text-success">Online for 10 mins</small>
        </div>
      </div>

      {/* 🔹 Messages List */}
      <div
        ref={messageEndRef}
        className="flex-grow-1 overflow-auto p-3"
        style={{ background: "#f8f9fa" }}
      >
        {messages.length > 0 ? (
          messages.map((chat) => {
            const isSent = chat.id === auth.currentUser?.uid;
            return (
              <div
                key={chat.id + chat.timeStamp}
                className={`message mb-3 ${
                  isSent ? "text-end" : "text-start"
                }`}
              >
                <div
                  className={`d-inline-block p-2 rounded-3 shadow-sm ${
                    isSent ? "bg-primary text-white" : "bg-white text-dark"
                  }`}
                  style={{ maxWidth: "70%" }}
                >
                  <p className="mb-1">{chat.message}</p>
                  <span
                    className={`time small ${
                      isSent ? "text-white-50" : "text-muted"
                    }`}
                    style={{ fontSize: "0.75rem" }}
                  >
                    {chat.timeStamp
                      ? new Date(chat.timeStamp).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : ""}
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-muted mt-3">No messages yet</p>
        )}
      </div>

      {/* 🔹 Input Field */}
      <MessageInput />
    </div>
  );
};

export default ChatWindow;
