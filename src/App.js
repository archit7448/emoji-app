import React, { useState } from "react";

import "./styles.css";

var emojidictionary = {
  "😍": "loving",
  "😴": "sleepy",
  "🙄": "Disblief",
  "🤐": "secret",
  "🤗": "hug",
  "😮": "wow",
  "🤨": "Concern",
  "🤑": "Money",
  "😜": "Crazy",
  "😑": "Expressionless",
  "🤩": "Impressive"
};

var emojiswehave = Object.keys(emojidictionary);

export default function App() {
  var [emojiMeaning, setemojiMeaning] = useState(" ");

  function inputChangeHandler(event) {
    var Input = event.target.value;
    var emojiMeaning = emojidictionary[Input];
    if (emojiMeaning === undefined) {
      emojiMeaning = "we don't have this emoji";
    }
    setemojiMeaning(emojiMeaning);
  }

  function emojiHandler(emoji) {
    var emojiMeaning = emojidictionary[emoji];
    setemojiMeaning(emojiMeaning);
  }
  return (
    <div className="App">
      <h1>Emoji Dictionary </h1>
      <input onChange={inputChangeHandler}></input>
      <h2>{emojiMeaning} </h2>
      <h3>Emoji we have</h3>
      {emojiswehave.map(function (emoji) {
        return <span onClick={() => emojiHandler(emoji)}>{emoji}</span>;
      })}
    </div>
  );
}
