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
      <h1 className="text-white text-4xl text-center">Password Generator</h1>
    </>
  );
}

export default App;
