import { Link } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "../assets/css/login.css";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const data = await createUserWithEmailAndPassword(auth, form.email, form.password);
    alert(`Registered user: ${form.name}`);
    console.log("User data:", data);
  } catch (e) {
    console.error("Error:", e.message);
    alert(`Error: ${e.message}`);
  }
};

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-box">
        <h2>Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>

        <p>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
