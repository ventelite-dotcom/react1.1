import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}[]<>?/";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

      <div className="w-full max-w-xl bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">

        <h1 className="text-4xl font-bold text-center text-white mb-8">
          🔐 Password Generator
        </h1>

        <div className="flex overflow-hidden rounded-xl shadow-lg mb-8">

          <input
            type="text"
            value={password}
            placeholder="Generated Password"
            readOnly
            className="w-full px-4 py-3 outline-none text-lg"
          />

          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 transition"
          >
            Copy
          </button>

        </div>

        <div className="space-y-6">

          <div>
            <label className="text-white block mb-2">
              Password Length : {length}
            </label>

            <input
              type="range"
              min={6}
              max={30}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full cursor-pointer"
            />
          </div>

          <div className="flex justify-between">

            <label className="flex items-center gap-2 text-white">
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              Numbers
            </label>

            <label className="flex items-center gap-2 text-white">
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              Special Characters
            </label>

          </div>

          <button
            onClick={passwordGenerator}
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 py-3 rounded-xl text-white font-bold text-lg hover:scale-105 duration-300 shadow-lg"
          >
            Generate Password
          </button>

        </div>

      </div>

    </div>
  );
}

export default App;