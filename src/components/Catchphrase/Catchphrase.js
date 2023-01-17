import React from 'react';
import './Catchphrase.css';

export default function Catchphrase({
  catchphrase,
  setCatchphrase,
  catchphrases,
  setCatchphrases,
}) {
  const saveCatchphrase = () => {
    setCatchphrases((prevState) => [...prevState, catchphrase]);
  };
  return (
    <div>
      <label>
        Do you have a catchphrase?
        <input
          id="catchphrase"
          value={catchphrase}
          type="text"
          onChange={(e) => setCatchphrase(e.target.value)}
        />
        <button id="catchphrase-button" onClick={saveCatchphrase}>
          Add
        </button>
      </label>
      <ul>
        {catchphrases.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
