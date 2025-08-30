import { useState } from "react";
import accord from "./Accordian.json";
import "../style/accordian.css";

export const Accordian = () => {
  const [index, setIndex] = useState(null);

  const toggle = (id) => {
    setIndex(index === id ? null : id);
  };

  return (
    <div className="accordian-container">
      <h1>Frequently Asked Questions</h1>
      <ul className="accordian-list">
        {accord.map((curelem) => (
          <li
            key={curelem.id}
            className="accordian-item"
            onClick={() => toggle(curelem.id)}
          >
            <div className="accordian-question">{curelem.question}</div>
            {index === curelem.id && (
              <div className="accordian-answer">{curelem.answer}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
