// src/components/Ingredient.jsx
import React from 'react';
export default function Ingredient({ name, amount, measurement }) {
  return (
    <li>
      <span>{amount} </span>
      <span>{measurement}</span>
      <span>{name}</span>
    </li>
  );
}
