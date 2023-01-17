import React from 'react';
import './Select.css';

export default function Select({ head, setHead, middle, setMiddle, bottom, setBottom }) {
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

      <h1>Pick a bottom</h1>
      <select
        value={bottom}
        onChange={(e) => {
          setBottom(e.target.value);
        }}
      >
        <option value="blue">Jeans</option>
        <option value="dog">Fancy</option>
        <option value="leg">Giant Leg</option>
        <option value="white">White</option>
      </select>
    </div>
  );
}
