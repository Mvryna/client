import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import NBar from "./NBar.js";
import AdCards from "./AdCards.js";
import Foot from "./Foot.js";

export default function Home() {
  return (
    <>
      <div class="A">
        <NBar />
        <AdCards />
        <Foot />
      </div>
    </>
  );
}
