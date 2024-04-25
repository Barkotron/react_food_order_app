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

  //console.log(loadedMeals);
  const price = 8.99;

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
      {/*<MealItem
        name="Test Item"
        description="A delicious testy kind of item"
        image={logo}
        price={price}
      ></MealItem>
      <MealItem
        name="Test Item 2"
        description="A delicious testy kind of item with all kinds of extra shit to say on top of what was already said to make this much longer than the others"
        image={logo}
        price={price * 2}
      ></MealItem>
      <MealItem
        name="Test Item 3"
        description="A delicious testy kind of item"
        image={logo}
        price={price * 3}
      ></MealItem>

      <MealItem
        name="Test Item"
        description="A delicious testy kind of item"
        image={logo}
        price={price}
      ></MealItem>
      <MealItem
        name="Test Item 2"
        description="A delicious testy kind of item with all kinds of extra shit to say on top of what was already said to make this much longer than the others"
        image={logo}
        price={price * 2}
      ></MealItem>
      <MealItem
        name="Test Item 3"
        description="A delicious testy kind of item"
        image={logo}
        price={price * 3}
  ></MealItem>*/}
    </ul>
  );
}
