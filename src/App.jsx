import React from "react";
import "./App.scss";

import { Header } from "./components/header/header.jsx";
import { MainScreen } from "./components/mainScreen/mainScreen.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <MainScreen />
    </div>
  );
}

export default App;
