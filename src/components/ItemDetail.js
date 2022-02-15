import { React, useState, useEffect } from "react";
import "../App.css";
import { useParams } from "react-router-dom";

function ItemDetail() {

  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState([]);

  const params = useParams()
  console.log(params)

  const { id } = useParams()
  console.log(id)

  const fetchItem = async () => {
    const fetItem = await fetch(
      `https://api.sampleapis.com/coffee/hot/${id}`
    );
    const item = await fetItem.json();
    setItem(item)
  };
  return (
    <div>
        <h1>{item.title}</h1>
        <p><b>Description:</b> &nbsp; {item.description}</p>
        <p><b>Ingredients:</b> &nbsp; {item.ingredients}</p>
    </div>
  );
}

export default ItemDetail;
