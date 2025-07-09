import { useState } from "react";

const Section = ({ title, items, setItems, onDropItem, onRemoveItem }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems((prev) => [...prev, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData("text/plain", item);
  };

  const handleDrop = (e) => {
    const item = e.dataTransfer.getData("text/plain");
    if (!items.includes(item)) {
      onDropItem(item);
      onRemoveItem(item);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{
        border: "1px solid black",
        padding: "10px",
        width: "200px",
        minHeight: "300px",
      }}
    >
      <h3>{title}</h3>
      {items.map((item, idx) => (
        <div
          key={idx}
          draggable
          onDragStart={(e) => handleDragStart(e, item)}
          style={{
            margin: "4px 0",
            padding: "5px",
            backgroundColor: "#f0f0f0",
            cursor: "grab",
          }}
        >
          {item}
        </div>
      ))}
      <input
        type="text"
        value={inputValue}
        placeholder="Add item..."
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddItem()}
        style={{ width: "100%", marginTop: "10px" }}
      />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
};

export default Section;
