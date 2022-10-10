import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "./ModalLogin";
import "./NBar.css";
import logo from "./JobBoard.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function NBar() {
  const [openModal, setModalLogin] = useState(false);
  return (
    <>
      {openModal && (
        <div
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "black",
            opacity: "0.5",
            position: "fixed",
            zIndex: "1",
          }}
        />
      )}
      {openModal && <Modal closeModal={setModalLogin} />}
      <Navbar expand="md">
        <Container>
          <img class="logo" src={logo} alt=""></img>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{ alignItems: "start" }}>
              <Button
                className="navbarContent modalBtn"
                onClick={() => {
                  setModalLogin(true);
                }}
              >
                Connexion
              </Button>
              <NavLink to="/Bigad">
                <Button className="navbarContent modalBtn">
                  Espace entreprise
                </Button>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="yellowBar">
        <Row>
          <Col xs={12}>
            <h1 class="accroche">
              Trouvez le job qui vous convient <span>vraiment.</span>
            </h1>
          </Col>
        </Row>
        <div class="allsearch">
          <div class="search">
            <input
              class="jobsearchbar"
              type="search"
              placeholder="Métier, mots-clés ou entreprise"
              aria-label="Search"
            />
            <input
              class="citysearchbar"
              type="search"
              placeholder="Ville ou code postal"
              aria-label="Search"
            />
            <button class="searchbtn" type="submit">
              Rechercher
            </button>
          </div>
        </div>
      </Container>
      <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
        Offres d'emploi
      </h2>
    </>
  );
}

export default NBar;
