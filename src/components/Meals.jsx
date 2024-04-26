import logo from "../assets/logo.jpg";
import MealItem from "./MealItem";
import { useEffect, useState } from "react";
export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        //
      }

      const meals = await response.json();
      setLoadedMeals(meals);
    }
    fetchMeals();
  }, []);

  const price = 8.99;

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
