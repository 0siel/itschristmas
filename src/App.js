import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

function App() {
  const [letters, setLetters] = useState([]);
  const [name, setName] = useState("");
  const [wish, setWish] = useState("");

  // Fetch letters in real-time
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "letters"), (snapshot) => {
      const lettersData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLetters(lettersData);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add new letter to Firestore
      await addDoc(collection(db, "letters"), { name, wish });

      // Clear the form
      setName("");
      setWish("");
    } catch (error) {
      console.error("Error adding letter: ", error);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🎅 Welcome to ItsChristmas 🎄</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Your Christmas Wish"
          value={wish}
          onChange={(e) => setWish(e.target.value)}
          required
          style={{ marginRight: "10px" }}
        />
        <button type="submit">Send Letter</button>
      </form>

      <h2>🎁 Santa's Inbox</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {letters.map((letter) => (
          <li key={letter.id} style={{ marginBottom: "10px" }}>
            <strong>{letter.name}:</strong> {letter.wish}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
