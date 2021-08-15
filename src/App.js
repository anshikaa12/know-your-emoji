import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var emojiList = {
    "😂": "laughter",
    "😴": "sleepy",
    "😒": "annoyed",
    "🙄": "eyeroll",
    "😏": "smirk",
    "🥰": "loved",
    "🥵": "hot",
    "😛": "tongue out",
    "🥱": "yawning",
    "😭": "crying",
    "😈": "evil"
  };
  var emojiWeKnow = Object.keys(emojiList);
  var [inputEvent, setEvent] = useState("");

  function changeF(event) {
    inputEvent = event.target.value;
    if (inputEvent in emojiList) {
      inputEvent = emojiList[event.target.value];
    } else if (inputEvent === "") {
      inputEvent = "Translation will appeare here...";
    } else {
      inputEvent = "Sorry we don't know about this 😥";
    }
    return setEvent(inputEvent);
  }
  function emojiF(emoji) {
    setEvent(emojiList[emoji]);
  }
  if (inputEvent === "") {
    inputEvent = "Translation will appear here...";
    setEvent(inputEvent);
  }
  return (
    <div className="App">
      <h1>😎 KNOW YOUR EMOJI 😎</h1>
      <input onChange={changeF} placeholder="type your emoji here"></input>

      <h3>{inputEvent}</h3>
      <div>
        {emojiWeKnow.map((emojis) => {
          return (
            <span
              style={{ fontSize: "2rem", padding: " 0.5rem" }}
              onClick={() => emojiF(emojis)}
            >
              {emojis}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
