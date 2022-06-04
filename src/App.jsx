import React from "react";
import "./App.scss";

import { Header } from "./components/header/header.jsx";
import { Navbar } from "./components/navbar/navbar.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
    </div>
  );
}

export default App;
