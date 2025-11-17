import React, { useState } from "react";
import { ref, push, serverTimestamp } from "firebase/database";
import { auth, db } from "../Firebase";

const MessageInput = () => {
  const [chatMessage, setChatMessage] = useState("");

  const sendMessage = async () => {
    if (!chatMessage.trim()) return;

    const user = auth.currentUser;
    if (!user) {
      alert("Please log in first.");
      return;
    }

    const node = ref(db, "Message");
    await push(node, {
      id: user.uid,
      email: user.email,
      message: chatMessage,
      timeStamp: Date.now(), // simpler than serverTimestamp() for rendering
    });

    setChatMessage("");
  };

  return (
    <div className="border-top p-3 d-flex align-items-center bg-white">
      {/* Plus Button */}
      <button className="btn btn-light rounded-circle me-2 shadow-sm">
        <i className="bi bi-plus-lg"></i>
      </button>

      {/* Input */}
      <div className="flex-grow-1 position-relative me-2">
        <input
          type="text"
          className="form-control rounded-pill pe-5"
          placeholder="Type your message"
          value={chatMessage}
          onChange={(e) => setChatMessage(e.target.value)}
          style={{ paddingRight: "2.5rem" }}
        />
        <i
          className="bi bi-emoji-smile fs-5 text-secondary position-absolute"
          style={{
            right: "15px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
        ></i>
      </div>

      {/* Send Button */}
      <button
        className="btn btn-primary rounded-circle"
        onClick={sendMessage}
        disabled={!chatMessage.trim()}
      >
        <i className="bi bi-send"></i>
      </button>
    </div>
  );
};

export default MessageInput;
