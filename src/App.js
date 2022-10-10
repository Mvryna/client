import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import BigAd from "./BigAd";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Bigad" element={<BigAd />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
