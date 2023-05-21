import React, { useState } from "react";

function App() {
  const [circles, setCircles] = useState([]);

  const colors = ["green", "blue", "orange", "blue", "black", "orange"];

  const addCircle = () => {
    const id = Math.floor(Math.random() * colors.length);
    const color = colors[id];
    const posX = Math.floor(Math.random() * 1024);
    const posY = Math.floor(Math.random() * 766);

    const newCircle = { id, posX, posY, color };
    setCircles((prevCircles) => [...prevCircles, newCircle]);
    console.log(posX, posY);
  };

  const deleteCircles = () => {
    setCircles([]);
  };

  return (
    <div className="App">
      <button onClick={addCircle}>Add Circle</button>
      <button onClick={deleteCircles}>Delete Circles</button>
      <div>
        {circles.map(({ id, color, posX, posY }) => (
          <div key={id}>
            <div
              style={{
                backgroundColor: color,
                borderRadius: "50%",
                width: "15px",
                height: "15px",
                position: "absolute",
                top: posY,
                left: posX,
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
