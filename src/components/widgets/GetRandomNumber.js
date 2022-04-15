import React, { useState } from "react";

export default function RandomNumbers() {
  const [items, setItems] = useState([]);

  // handle click event of the button to add item
  const addMoreItems = () => {
    setItems((prevItems) => [
      ...prevItems,
      {
        id: prevItems.length,
        value: getRandomNumber()
      }
    ]);
  };

  // generate 6 digit random number
  const getRandomNumber = () => {
    return Math.random().toString().substring(2, 8);
  };

  return (
    <div>
      <button onClick={addMoreItems}>Add Ramdom Number</button>
      <br />
      <label>Your list:</label>
      <pre>{JSON.stringify(items, null, 2)}</pre>
    </div>
  );
}
