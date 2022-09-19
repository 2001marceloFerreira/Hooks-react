import React from "react";
import './App.css';
import Effect from "./components/Effect";
import Reducer from "./components/reducer/Reducer";
import Reducer1 from "./components/reducer/Reducer1";
import Ref from "./components/Ref";
import State from "./components/State";


const App = () => {

  return (
    <div className="App">
      <State />
      <Effect />
      <Ref />
      <Reducer />
      <Reducer1 />
    </div>
  );
}

export default App;
