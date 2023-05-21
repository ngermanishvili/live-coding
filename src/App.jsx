import { useState } from "react";

function App() {
  const [circles, setCircles] = useState([]);
  const [history, setHistory] = useState([]);
  const colors = ["green", "blue", "orange", "blue", "black", "orange"];

  const addCircle = () => {
    const id = Math.floor(Math.random() * colors.length);
    const color = colors[id];
    const posX = Math.floor(Math.random() * 1024);
    const posY = Math.floor(Math.random() * 766);

    const newCircle = { id, posX, posY, color };
    setCircles((prev) => [...prev, newCircle]);
    setHistory((prev) => [...prev, newCircle]);
    console.log(posX, posY);
  };

  const undo = () => {
    if (history.length > 0) {
      const updatedHistory = [...history];
      updatedHistory.pop();
      setHistory(updatedHistory);
      const circlesToDisplay = updatedHistory.map((circle) => circle.id);
      setCircles((prev) => prev.filter((circle) => circlesToDisplay.includes(circle.id)));
    }
  };

  return (
    <div>
      <button onClick={() => addCircle()}>REDO</button>
      <button onClick={() => undo()}>UNDO</button>
      <div>
        {circles.map((circle) => (
          <div key={circle.id}>
            <div
              style={{
                backgroundColor: circle.color,
                borderRadius: "50%",
                width: "15px",
                height: "15px",
                position: "absolute",
                top: circle.posY,
                left: circle.posX,
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
