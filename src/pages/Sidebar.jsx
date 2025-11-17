import React from "react";
import { signOut } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase";

const Sidebar = () => {
  const navigate = useNavigate();

  const chats = [
    { name: "Bill Kuphal", msg: "The weather will be perfect...", time: "9:41 AM" },
    { name: "Photographers", msg: "Here’s my latest drone shots", time: "9:16 AM", badge: 6 },
    { name: "SpaceX Crew-16 Launch", msg: "I've been there!", time: "Yesterday" },
    { name: "Helen Flatley", msg: "You: Ok", time: "12/13/21" },
  ];

  // ✅ Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login"); // redirect to login page
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  return (
    <div className="h-100 d-flex flex-column">
      {/* Sidebar Header */}
      <div className="p-3 border-bottom d-flex align-items-center justify-content-between">
        <h5 className="mb-0 fw-bold">Chats</h5>

        {/* Dropdown Menu for Logout */}
        <div className="dropdown">
          <i
            className="bi bi-three-dots fs-5"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ cursor: "pointer" }}
          ></i>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
            <li>
              <button className="dropdown-item text-danger" onClick={handleLogout}>
                <i className="bi bi-box-arrow-right me-2"></i> Logout
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Search Bar with icon on left */}
      <div className="p-2 border-bottom position-relative">
        <i className="bi bi-search position-absolute ms-3 mt-2 text-muted"></i>
        <input
          type="text"
          className="form-control rounded-pill ps-5"
          placeholder="Search or start new chat"
        />
      </div>

      {/* Chat List */}
      <div className="flex-grow-1 overflow-auto">
        {chats.map((chat, index) => (
          <div
            key={index}
            className="d-flex align-items-center p-3 border-bottom chat-item hover-effect"
            style={{ cursor: "pointer" }}
          >
            <img
              src={`https://i.pravatar.cc/40?img=${index + 1}`}
              className="rounded-circle me-3"
              alt="avatar"
            />
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between">
                <strong>{chat.name}</strong>
                <small className="text-muted">{chat.time}</small>
              </div>
              <p className="mb-0 text-muted small">{chat.msg}</p>
            </div>
            {chat.badge && (
              <span className="badge bg-danger rounded-pill ms-2">{chat.badge}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
