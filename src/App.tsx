import React from 'react';
import './App.css';
import { ReducerProvider } from './components/ContextApi/ReducerProvider';
import Expense from './components/Expense';

function App() {
  return (
    <div className="App">
      <ReducerProvider>
      <Expense/>
      </ReducerProvider>
    </div>
  );
}

export default App;
