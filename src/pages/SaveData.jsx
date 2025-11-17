import { useState } from "react";
import { ref, set } from "firebase/database"; // import package
import { db } from "../firebase"; // import db

function SaveData() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  const handleData = async () => {

    try {
      // Create a reference for this user (you can also use push() for auto IDs)
      const node = ref(db, `Users/${name}`);

      await set(node, {
        name,
        email,
        age,
        gender,
        address,
      });

      alert("Data saved successfully!");
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save data. Check console for details.");
    }
  };

  return (
    <div className="container">
      <h2>Save User Data</h2>
      <div className="formgrid" > 
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="text"
        name="gender"
        placeholder="Gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        required
      />

      <input
        type="text"
        name="address"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />

      <input
        type="text"
        name="age"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />

      <button className="btn btn-danger" onClick={handleData}>
        Save Data
      </button>
      </div>
    </div>
  );
}

export default SaveData;
