import { useEffect, useState } from "react";

export default function FetchData() {
  const [inputId, setInputId] = useState("");
  const [id, setId] = useState("");
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/posts";
    if (id) {
      url += `/${id}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setPlanets(Array.isArray(res) ? res : [res]);
      });
  }, [id]);

  // handle click evnet of the button
  const handleButtonClick = () => {
    setId(inputId);
  };

  return (
    <div className="App">
      <div className="form">
        <input
          type="text"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
          style={{ marginRight: 10 }}
        />
        <input
          type="button"
          value={inputId ? "Fetch" : "Fetch All"}
          onClick={handleButtonClick}
        />
      </div>
      <ul>
        {planets.map((x) => (
          <li>{`Id: ${x.id} | Title: ${x.title}`}</li>
        ))}
      </ul>
    </div>
  );
}