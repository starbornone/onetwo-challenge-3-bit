import "./styles.css";

import React, { useState } from "react";

function oneTwo(input) {
  for (
    var nFlag = 0, nShifted = input, sMask = "";
    nFlag < 3;
    nFlag++, sMask += nShifted >>> 2, nShifted <<= 1
  );
  console.log(sMask);
  var array = Array.from(sMask);
  var response = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === "0") {
      response++;
    } else {
      break;
    }
  }
  return response;
}

export default function App() {
  const [input, setInput] = useState("");
  const [value, setValue] = useState("");

  function handleInput(input) {
    setInput(input);
    setValue(oneTwo(input));
  }

  return (
    <div className="App">
      <h1>OneTwo: 3-bit</h1>
      <p>
        A challenge where an input of 1 must return 2 and an input of 2 must
        return 1, solved by converting the number to a 3-bit string, turning
        that into an array, then iterating over it and counting how many 0s come
        before the first 1. Therefore 1 (001) and 2 (010) are 2 and 1
        respectively.
      </p>
      <p style={{ color: "#999", fontSize: "12px" }}>
        1 and 2 buttons are for convenience. Feel free to use the input to test.
      </p>
      <button onClick={() => handleInput(1)} type="button">
        1
      </button>
      <button onClick={() => handleInput(2)} type="button">
        2
      </button>
      <input
        onChange={(e) => handleInput(e.target.value)}
        type="number"
        value={input}
      />
      <p>Result:</p>
      <h2>{value}</h2>
    </div>
  );
}
