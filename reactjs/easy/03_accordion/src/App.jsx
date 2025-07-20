import "./App.css";

import Accordion from "./components/Accordion";

function App() {
  return (
    <div className="app-container">
      <h1>Accordion component</h1>
      <Accordion
        title="Accordion 1"
        content="This is the content of Accordion 1."
      />
      <Accordion
        title="Accordion 2"
        content="This is the content of Accordion 2."
      />
      <Accordion
        title="Accordion 3"
        content="This is the content of Accordion 3."
      />
    </div>
  );
}

export default App;
