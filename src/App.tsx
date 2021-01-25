import React from 'react';
import './App.css';
import ActionPanel from './components/ActionPanel';
import ColorPicker from './components/BoardElements/ColorPicker';
import TestButton from './components/BoardElements/TestButton';
import GameBoard from './components/GameBoard';
import Result from './components/Result';
import { store } from './context';
import { StoreProvider } from './context/Store';



function App() {
  return (
    <StoreProvider defaultValue={store}>

      <div className="App">
        <div>
          <h2>Mastermind</h2>
          <Result />

          <GameBoard />

          <ActionPanel />

          <TestButton />

        </div>

        <ColorPicker />

      </div>
    </StoreProvider>
  );
}

export default App;
