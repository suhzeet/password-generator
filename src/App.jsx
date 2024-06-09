import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) string += "0123456789";
    if (charAllowed) string += "~!@#$%^&*()_+={}[]?";

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      pass = string.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  return (
    <>
      <div className="w-full max-w-md text-orange-500 mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-700">
        <h1 className="text-2xl text-white text-center my-3">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg mb-4 overflow-hidden">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />
          <button className="text-white bg-blue-700 outline-none px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
