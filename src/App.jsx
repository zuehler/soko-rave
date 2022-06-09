import React from "react";
import "./App.scss";

import { Header } from "./components/header/header.jsx";
import { Main } from "./components/main/main.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
