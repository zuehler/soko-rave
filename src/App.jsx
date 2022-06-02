import React from "react";
import "./App.scss";

import { Header } from "./components/header/header.jsx";
import { Navbar } from "./components/navbar/navbar.jsx";
import { Main } from "./components/main/main.jsx";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Main />
    </>
  );
}

export default App;
