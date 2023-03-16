import React from "react";
import "./app.css";
//import Registration from './SimpleProject/Registration'
import MagicToDo from "./SimpleProject/MagicToDo";
const App = () => {
  return (
    <div className="container  shadow-lg p-3 mb-5 rounded">
      {/* <Registration /> */}

      <MagicToDo />
    </div>
  );
};

export default App;
