import React from "react";
import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";

const ChatApp = () => {
  return (
    <div className="container-fluid vh-100 bg-light">
      <div className="row h-100">
        {/* Sidebar */}
        <div className="col-md-4 col-lg-3 border-end bg-white p-0">
          <Sidebar />
        </div>

        {/* Chat Window */}
        <div className="col-md-8 col-lg-9 p-0">
          <ChatWindow />
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
