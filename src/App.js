import React from 'react';
import Title from './Components/Title';
import AddToDo from './Components/AddToDo';
function App() {
  return (
    <div className="App">
      <div>
      <Title />
      </div>
      <div>
        <AddToDo />
      </div>
    </div>
  );
}

export default App;
