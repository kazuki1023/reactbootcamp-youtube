import React from 'react';
import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState(new Date());

  // let state = new Date();
  // setIntervalは第２ひきすうごとに第１引数の関数を実行する
  setInterval(() => {
    setState(new Date());
    // state = new Date();
  }, 1000);
  return (
    <div className="App">
      <header className="App-header">
        <p>{state.toLocaleTimeString()}</p>
      </header>
    </div>
  );
}

export default App;
