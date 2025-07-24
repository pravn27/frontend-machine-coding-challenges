import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const onClickHandler = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="accordion-container">
      {items.map((item, index) => {
        return (
          <div key={index} className="accordion-item">
            <button
              className="accordion-title"
              onClick={() => onClickHandler(index)}
            >
              {item.title}
              <span className="accordion-icon">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="accordion-content">{item.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
