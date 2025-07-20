import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordion-container">
      <button onClick={() => setIsOpen(!isOpen)}>
        {title}
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && <p>{content}</p>}
    </div>
  );
};

export default Accordion;
