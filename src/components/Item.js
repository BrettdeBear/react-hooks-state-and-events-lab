import React, { useState } from "react";

function Item({ name, category }) {

    const [inCart, setInCart] = useState(false)
    const textInCart = inCart ? "Remove From Cart" : "Add to Cart"

    function handleClick(event) {
      setInCart(!inCart)
    }


  return (
    <li className= {inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{textInCart}</button>
    </li>
  );
}

export default Item;
