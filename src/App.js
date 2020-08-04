import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [r, setR] = useState(Math.random());
  const [FirstName, setFName] = useState("saurav" + r);
  const [LastName, setLName] = useState("sharma" + r);
  const [email, setEmail] = useState(`saurav.sh315@gmail.com`);
  const [phone, setPhone] = useState("1234567890");

  return (
    <div>
      <form
        action="http://localhost:5000"
        method="POST"
        enctype="multipart/form-data"
      >
        <label>First Name</label>
        <input
          type="text"
          name="FirstName"
          value={FirstName}
          onChange={(e) => setFName(e.target.value)}
        />
        <br></br>
        <label>Last Name</label>
        <input
          type="text"
          name="LastName"
          value={LastName}
          onChange={(e) => setLName(e.target.value)}
        ></input>
        <br></br>
        <label>email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br></br>
        <label>phone</label>
        <input
          type="number"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></input>
        <br></br>
        <label>image</label>
        <input type="file" name="img" accept="image/*"></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
