import React from "react";
import { useEffect, useState } from "react";
import Item from "./Item";

export default function Main() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);
  const prodList = product.map((item) => <Item key={item.id} data={item} />);
  return (
      <div className="container">{prodList}</div>
  );
}
