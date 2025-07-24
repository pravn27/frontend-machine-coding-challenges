import "./App.css";

import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      title: "JavaScript Basics",
      content:
        "Learn variables, functions, and loops in JavaScript. JS functions are first-class objects and can be assigned to variables, passed as arguments, and returned from other functions.",
    },
    {
      title: "React.js Overview",
      content:
        "Understand components, state, and props in React. React is a JavaScript library for building user interfaces.",
    },
    {
      title: "Node.js",
      content:
        "Basics of server-side development with Node.js. Node.js is a JavaScript runtime built on Chrome's V8 engine.",
    },
    {
      title: "Full-Stack Development",
      content:
        "Build full-stack apps with React and Node.js. Full-stack development involves working on both the front-end and back-end of applications.",
    },
  ];
  return (
    <div className="app-container">
      <h1>Accordion component</h1>
      <Accordion items={items} />
    </div>
  );
}

export default App;
