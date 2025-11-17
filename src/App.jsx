import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from "./pages/Dashboard";
import SaveData from "./pages/SaveData";
import ChatBox from "./pages/chatbox";
import ChatBoxNew from "./pages/ChatBoxNew";
import ChatApp from './pages/ChatApp'


function App() {
  const [count, setCount] = useState(0)

  return (

     <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/savedata" element={<SaveData />} />
        <Route path="/chatbox" element={<ChatBox />} />
        <Route path="/chatboxnew" element={<ChatBoxNew />} />
        <Route path='/chat' element={<ChatApp />} />
      </Routes>
    </Router>
    
  )
}

export default App
