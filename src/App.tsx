import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </div>
  );
}

export default App;
