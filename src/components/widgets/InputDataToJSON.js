import React, { useState } from "react";

export default function FormObject() {
  const [user, setUser] = useState({ name: "", email: "", age: "" });

  // handle change event of the input
  const handleChange = (e) => {
    e.persist();
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <br />
      <label>Email:</label>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      <br />
      <label>Age:</label>
      <input type="text" name="age" value={user.age} onChange={handleChange} />
      <br />
      <label>Output:</label>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}