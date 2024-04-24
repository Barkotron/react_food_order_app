import Header from "./components/Header";
import MealItem from "./components/mealItem";
import logo from "./assets/logo.jpg";

function App() {

  const price = 8.99
  return (
    <>
      <Header></Header>
      <div id="meals">
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
          price={price*2}
        ></MealItem>
        <MealItem
          name="Test Item 3"
          description="A delicious testy kind of item"
          image={logo}
          price={price*3}
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
          price={price*2}
        ></MealItem>
        <MealItem
          name="Test Item 3"
          description="A delicious testy kind of item"
          image={logo}
          price={price*3}
        ></MealItem>
      </div>
    </>
  );
}

export default App;
