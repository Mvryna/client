import "./Foot.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import logo_dark from "./JobBoard_Dark.png";

function Foot() {
  return (
    <>
      <footer>
        <div class="footer_connexion">
          <img class="logo" src={logo_dark} alt=""></img>
          {/* <p>Qui sommes-nous ?</p> */}
          <a href="#" class="foot_link">
            Espace candidat
          </a>
          <a href="#" class="foot_link">
            Espace recruteur
          </a>
        </div>
      </footer>
    </>
  );
}

export default Foot;
