import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Menu } from "./Components/Navbar/Navbar";
import CheckTicket from "./Pages/CheckTicket/CheckTicket";
import Home from "./Pages/Home/Home";
import Option from "./Pages/Option/Option";
import Ticketmanagement from "./Pages/Ticketmanagement/Ticketmanagement";
import Header from "./Widgets/Headers/Header";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="browserRoutter">
        <Menu />
        <div className="right_content">
          <Header />
          <div className="home_page wide">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route
                path="/ticketmanagement"
                element={<Ticketmanagement />}
              ></Route>
              <Route path="/ticketcheck" element={<CheckTicket />}></Route>
              <Route path="/option" element={<Option />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
