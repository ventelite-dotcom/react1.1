import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-500 flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">
          Background Changer
        </h1>
      </div>

      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-4">
        <div className="flex flex-wrap justify-center gap-4 shadow-2xl bg-white/30 backdrop-blur-md px-6 py-4 rounded-2xl">

          <button
            onClick={() => setColor("red")}
            className="outline-none px-5 py-2 rounded-full text-white font-semibold shadow-lg hover:scale-110 duration-300"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("pink")}
            className="outline-none px-5 py-2 rounded-full text-white font-semibold shadow-lg hover:scale-110 duration-300"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none px-5 py-2 rounded-full text-white font-semibold shadow-lg hover:scale-110 duration-300"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-5 py-2 rounded-full text-white font-semibold shadow-lg hover:scale-110 duration-300"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-5 py-2 rounded-full text-black font-semibold shadow-lg hover:scale-110 duration-300"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("purple")}
            className="outline-none px-5 py-2 rounded-full text-white font-semibold shadow-lg hover:scale-110 duration-300"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>

          <button
            onClick={() => setColor("black")}
            className="outline-none px-5 py-2 rounded-full text-white font-semibold shadow-lg hover:scale-110 duration-300"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>

          <button
            onClick={() => setColor("orange")}
            className="outline-none px-5 py-2 rounded-full text-white font-semibold shadow-lg hover:scale-110 duration-300"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>

        </div>
      </div>
    </>
  );
}

export default App;