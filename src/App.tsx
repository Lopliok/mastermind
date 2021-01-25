import React from 'react';
import './App.css';
import ActionPanel from './components/ActionPanel';
import RoundButton from './components/BoardElements/RoundButton';
import GameBoard from './components/GameBoard';
import styled from 'styled-components'
import { StoreProvider } from './context/Store';
import { store } from './context';
import TestButton from './components/BoardElements/TestButton';
import Result from './components/Result';
import ColorPicker from './components/BoardElements/ColorPicker';



function App() {
  return (
    <StoreProvider defaultValue={store}>

      <div className="App">
        <div>
          <h2>Mastermind</h2>
          {false && <Result />
          }
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
