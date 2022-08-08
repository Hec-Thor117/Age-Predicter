import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const predictAge = () => {
    fetch(`https://api.agify.io/?name=${name}`)
    .then(res => res.json())
    .then(data => setAge(data.age))
  };

  return (
    <div className="App">
      <input 
        placeholder='Ex. Hector...'
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={predictAge}> Predict Age </button>

      <h1> Predicted Age: {age}</h1>
    </div>
  );
}

export default App;
