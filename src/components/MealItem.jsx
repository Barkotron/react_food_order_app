export default function MealItem({ name, description, image, price }) {
  return (
    <li className="meal-item">
      <article>
        <img src={image} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{price}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-item-actions button">
          <button>Add to Cart</button>
        </p>
      </article>
    </li>
  );
}
