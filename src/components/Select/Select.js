import React from 'react';
import './Select.css';

export default function Select({ head, setHead }) {
  return (
    <div className="select">
      <h1>Pick a head</h1>
      <select
        value={head}
        onChange={(e) => {
          setHead(e.target.value);
        }}
      >
        <option value="dog">Dog</option>
        <option value="duck">Duck</option>
        <option value="horse">Horse</option>
        <option value="bird">Bird</option>
      </select>
    </div>
  );
}
