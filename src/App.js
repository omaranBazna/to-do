import React from 'react';
import Title from './Components/Title';
import AddToDo from './Components/AddToDo';
import ToDo from './Components/ToDo';
import './App.css'
function App() {
  return (
    <div className="App">
  
      <Title />
     
      
        <AddToDo />
      
      
        <ToDo />
      
    </div>
  );
}

export default App;
