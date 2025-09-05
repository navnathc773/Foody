import { useState } from "react";
import accord from "./Accordian.json";
import "../style/accordian.css";
import { FaPlus, FaMinus } from "react-icons/fa";

export const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <ul className="faq-list">
        {accord.map((item, idx) => (
          <li
            key={idx}
            className={`faq-item ${openIndex === idx ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggle(idx)}>
              <span>{item.question}</span>
              <span className="faq-icon">
                {openIndex === idx ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
            <div
              className="faq-answer"
              style={{
                maxHeight: openIndex === idx ? "300px" : "0",
              }}
            >
              <p>{item.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
