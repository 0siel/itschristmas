import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import "./App.css"; // Import the CSS file

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
    <div className="app-container">
      <h1 className="title">🎅 Welcome to ItsChristmas! 🎄</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="input"
        />
        <input
          type="text"
          placeholder="Your Christmas Wish"
          value={wish}
          onChange={(e) => setWish(e.target.value)}
          required
          className="input"
        />
        <button type="submit" className="button">
          Send Letter
        </button>
      </form>

      <h2 className="subtitle">🎁 Santa's Inbox</h2>
      <ul className="letters-list">
        {letters.map((letter) => (
          <li key={letter.id} className="letter-item">
            <strong>{letter.name}:</strong> {letter.wish}
          </li>
        ))}
      </ul>
      {/* Link to Watch AR experience https://adobeaero.app.link/BJ2QnS1nQOb*/}
      <a
        href="https://adobeaero.app.link/BJ2QnS1nQOb"
        target="_blank"
        rel="noreferrer"
        className="ar-link"
      >
        {" "}
        Watch AR Experience
      </a>
    </div>
  );
}

export default App;
