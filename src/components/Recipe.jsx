// src/components/Recipe.jsx
import React from 'react';
import IngredientList from './IngredientList';
import Instructions from './Instructions';

export default function Recipe({ title, ingredients, steps }) {
  return (
    <section className="recipe">
      <h2>{title}</h2>
      <IngredientList list={ingredients} />
      <Instructions title="Cooking Instructions" steps={steps} />
    </section>
  );
}
