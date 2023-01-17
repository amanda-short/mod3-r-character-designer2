import React from 'react';
import './Select.css';

export default function Select({ head, setHead, middle, setMiddle }) {
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

      <h1>Pick a middle</h1>
      <select
        value={middle}
        onChange={(e) => {
          setMiddle(e.target.value);
        }}
      >
        <option value="blue">Blue Shirt</option>
        <option value="dress">Dress</option>
        <option value="pink">Pink Shirt</option>
        <option value="red">Red Shirt</option>
      </select>
    </div>
  );
}
