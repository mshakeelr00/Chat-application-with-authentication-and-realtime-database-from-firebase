import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../assets/css/login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
      console.log("User logged in:", data.user);
    } catch (e) {
      console.error("Login error:", e.message);
      alert(`Login failed: ${e.message}`);
    }

    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-box">
        <h2>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        <p>
          Don&apos;t have an account?{" "}
          <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}
