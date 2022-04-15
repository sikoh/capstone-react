import { useState } from "react";

export default function CapitalizeInput() {
  const [input_str, setInputStr] = useState("");
  const [somebtn, setSomebtn] = useState(" Your  UPPRECASE name prints here");

  const stringToUpperCase = (e) => {
    e.preventDefault();
    setSomebtn(input_str);
  };

  return (
    <div className="App">
      <p>{somebtn}</p>
      <form>
        <input
          type="text"
          placeholder="name-lowercase letters"
          onChange={(e) => setInputStr(e.target.value.toUpperCase())}
        />
        <button onClick={stringToUpperCase}>Capitalize me</button>
      </form>
    </div>
  );
}