import { useState, useCallback } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_+=-{}[]~`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <label className="block">
            Password Length:
            <input
              type="number"
              min="1"
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value) || 8)}
              className="ml-2 border rounded px-2"
            />
          </label>
        </div>

        <div className="flex items-center mb-4">
          <label className="mr-2">Include Numbers</label>
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed(!numberAllowed)}
          />
        </div>

        <div className="flex items-center mb-4">
          <label className="mr-2">Include Special Characters</label>
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed(!charAllowed)}
          />
        </div>

        <button
          onClick={passwordGenerator}
          className="w-full bg-orange-500 text-white py-2 rounded"
        >
          Generate Password
        </button>

        <div className="mt-4">
          <label className="block">Generated Password:</label>
          <input
            type="text"
            readOnly
            value={password}
            className="w-full border rounded px-2 py-1 mt-2"
          />
        </div>
      </div>
    </>
  );
}

export default App;
