import './App.scss';
import React, { useEffect, useState } from 'react';

let colors: string[] = [
  '#afa',
  '#faa',
  '#aaf'
];

const speed = 2000;

export function App() {
  const [color, setColor] = useState(colors[1]);

  function changeColor() {
    const [nextColor, ...other] = colors;

    colors.push(nextColor);
    setColor(nextColor);
    colors = [...other, nextColor];
  }

  useEffect(() => {
    const interval = setInterval(changeColor, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundColor: color,
        transition: `background-color ${speed}ms linear`
      }}
    >

    </div>
  );
}

