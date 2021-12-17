import React from 'react';
import './App.css';
import Counter from "./Counter";

function App() {

  const counters = [1, 2, 3]

  return (
      <div>
        <h1>Counters</h1>
        {counters.map(el =>
            <Counter counter={el}/>
        )}
        <hr/>
        <input
            type="number"
            placeholder={'add new counter'}
            onChange={(event) => console.log(event.target.value)}
        />
      </div>
  );
}

export default App;