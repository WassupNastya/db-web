import React from 'react';
import './App.css';

const getItems = () => {
  fetch('http://localhost:3000/offers')
    .then(response => response.json())
    .then(items => console.log(items))
    .catch(err => console.log(err))
}

function App() {
  getItems()
  return (
    <div></div>
  );
}

export default App;
