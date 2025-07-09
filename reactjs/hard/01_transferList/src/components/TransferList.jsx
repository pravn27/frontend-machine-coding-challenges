import { useState } from "react";
import Section from "./Section";

const TransferList = () => {
  const [leftItems, setLeftItems] = useState(["Item 1", "Item 2"]);
  const [rightItems, setRightItems] = useState(["Item A", "Item B"]);
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Section
        title="Left List"
        items={leftItems}
        setItems={setLeftItems}
        onDropItem={(item) => setLeftItems((prev) => [...prev, item])}
        onRemoveItem={(item) =>
          setRightItems((prev) => prev.filter((i) => i !== item))
        }
      />
      <Section
        title="Right List"
        items={rightItems}
        setItems={setRightItems}
        onDropItem={(item) => setRightItems((prev) => [...prev, item])}
        onRemoveItem={(item) =>
          setLeftItems((prev) => prev.filter((i) => i !== item))
        }
      />
    </div>
  );
};

export default TransferList;
