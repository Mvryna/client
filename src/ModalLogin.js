import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Modal.css";
import { useState } from "react";

export default function Modal({ closeModal }) {
  const [openMod, setModalRegister] = useState(false);
  return (
    <>
      {openMod && <Modal closeModal={setModalRegister} />}
      <div className="modalBackground" style={{ zIndex: "5" }}>
        <div className="modalContainer">
          <button onClick={() => closeModal(false)} class="closeBtn">
            X
          </button>
          <h2 style={{ color: "black", textAlign: "center" }}>Bienvenue !</h2>
          <div className="login-register">
            <Button
              className="login"
              style={{ marginRight: "35px" }}
              onClick={() => {
                setModalRegister(false);
              }}
            >
              Se connecter
            </Button>
            <Button
              className="register text-muted"
              onClick={() => {
                setModalRegister(true);
              }}
            >
              S'inscrire
            </Button>
          </div>
          {openMod ? (
            <div className="body">
              <Form className="form">
                <Form.Group className="mb-3">
                  <Form.Label>Adresse e-mail</Form.Label>
                  <Form.Control type="email" placeholder="Entrer l'email" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Mot de passe</Form.Label>
                  <Form.Control type="password" placeholder="Mot de passe" />
                </Form.Group>
                <Button variant="primary" className="modalBtn" type="submit">
                  Se connecter
                </Button>
                <Form.Group>
                  <Form.Text className="mb-2 foot">
                    Vous êtes une entreprise ?
                  </Form.Text>
                  <Form.Text className="mb-2 foot">
                    {" "}
                    Espace entreprise
                  </Form.Text>
                </Form.Group>
              </Form>
            </div>
          ) : (
            <div className="body">
              <Form className="form">
                <Form.Group className="mb-3">
                  <Form.Label>Sinscrire</Form.Label>
                  <Form.Control type="email" placeholder="Entrer l'email" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Mot de passe</Form.Label>
                  <Form.Control type="password" placeholder="Mot de passe" />
                </Form.Group>
              </Form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
