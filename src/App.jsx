import { useState } from "react";

function App() {
  const [circles, setCircles] = useState([]);
  const colors = ["green", "blue", "orange", "blue", "black", "orange"];

  const addCircle = () => {
    const id = Math.floor(Math.random() * colors.length);
    const posX = Math.floor(Math.random() * 1024);
    const posY = Math.floor(Math.random() * 766);
    const color = colors[id];

    setCircles((prev) => [...prev, { id, posX, posY, color }]);
    console.log(posX, posY);
  };

  const deleteCircle = () => {
    setCircles([]);
  };

  return (
    <div className="App">
      <button onClick={() => addCircle()}>REDO</button>
      <button onClick={() => deleteCircle()}>UNDO</button>
      <div className="container">
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
