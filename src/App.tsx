import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Menu } from "./Components/Menu/Menu";
import Home from "./Pages/Home/Home";
import Ticketmanagement from "./Pages/Ticketmanagement/Ticketmanagement";

function App() {
  return (
    <BrowserRouter>
      <div className="browserRoutter">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/ticketmanagement"
            element={<Ticketmanagement />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
