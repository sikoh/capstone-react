import { useState } from "react";

export default function LowerCasedInput() {
  const [input_str, setInputStr] = useState("");
  const [somebtn, setSomebtn] = useState(" Your lowercase name prints here");

  const stringToLowerCase = (e) => {
    e.preventDefault();
    setSomebtn(input_str);
  };

  return (
    <div className="App">
      <p>{somebtn}</p>
      <form>
        <input
          type="text"
          placeholder="name-upper case"
          onChange={(e) => setInputStr(e.target.value.toLowerCase())}
        />
        <button onClick={stringToLowerCase}>Print in lower case</button>
      </form>
    </div>
  );
}