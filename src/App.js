import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/Counter';
import './App.css';
import Sidebar from './features/Sidebar';
import Chat from './features/Chat';

function App() {
  return (
    <div className="app">
       <Sidebar />
       <Chat />
    </div>
  );
}

export default App;
