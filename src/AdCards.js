import "bootstrap/dist/css/bootstrap.min.css";
import "./AdCards.css";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export default function AdCards({ changeAdCard }) {
  useEffect(() => {
    axios.get("http://localhost:8081").then((res) => {
      console.log(res);
    });
  });
  return (
    <>
      <div className="TOUT">
        <div className="GAUCHE">
          <Card.Body>
            <Card className="cardsize">
              <Card.Title>Développeur Front-End H/F</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Entreprise
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                Lieu (13)
              </Card.Subtitle>
              <div className="contrat">
                <Card.Text
                  className="contratType"
                  style={{ marginRight: "10px" }}
                >
                  CDI
                </Card.Text>
                <Card.Text className="fullTime">Temps plein</Card.Text>
              </div>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor. Et dolore magna aliqua ut enim ad minim veniam,
                quis nostrud exercitation.
              </Card.Text>
              <NavLink to="/Bigad">
                <Button className="learnmore_bigad">Voir l'annonce</Button>
              </NavLink>
              <Button className="learnmore">En savoir +</Button>
              <Card.Subtitle className="mb-2 text-muted">
                Publiée il y a 2 jours
              </Card.Subtitle>
            </Card>

            <Card className="cardsize">
              <Card.Title>Architecte logiciel H/F</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                Lieu (13)
              </Card.Subtitle>
              <div class="contrat">
                <Card.Text
                  className="contratType"
                  style={{ marginRight: "10px" }}
                >
                  CDD
                </Card.Text>
                <Card.Text className="fullTime">Temps partiel</Card.Text>
              </div>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor. Et dolore magna aliqua ut enim ad minim veniam,
                quis nostrud exercitation.
              </Card.Text>
              <NavLink to="/Bigad">
                <Button className="learnmore_bigad">Voir l'annonce</Button>
              </NavLink>
              <Button className="learnmore">En savoir +</Button>
              <Card.Subtitle className="mb-2 text-muted">
                Publiée il y a 3 jours
              </Card.Subtitle>
            </Card>

            <Card className="cardsize">
              <Card.Title>Data analyst H/F</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Entreprise
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                Lieu (13)
              </Card.Subtitle>
              <div class="contrat">
                <Card.Text
                  className="contratType"
                  style={{ marginRight: "10px" }}
                >
                  CDI
                </Card.Text>
                <Card.Text className="fullTime">Temps plein</Card.Text>
              </div>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor. Et dolore magna aliqua ut enim ad minim veniam,
                quis nostrud exercitation.
              </Card.Text>
              <NavLink to="/Bigad">
                <Button className="learnmore_bigad">Voir l'annonce</Button>
              </NavLink>
              <Button className="learnmore">En savoir +</Button>
              <Card.Subtitle className="mb-2 text-muted">
                Publiée il y a 5 jours
              </Card.Subtitle>
            </Card>

            <Card className="cardsize">
              <Card.Title>Développeur Front-End H/F</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Entreprise
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                Lieu (13)
              </Card.Subtitle>
              <div class="contrat">
                <Card.Text
                  className="contratType"
                  style={{ marginRight: "10px" }}
                >
                  CDI
                </Card.Text>
                <Card.Text className="fullTime">Temps plein</Card.Text>
              </div>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor. Et dolore magna aliqua ut enim ad minim veniam,
                quis nostrud exercitation.
              </Card.Text>
              <NavLink to="/Bigad">
                <Button className="learnmore_bigad">Voir l'annonce</Button>
              </NavLink>
              <Button className="learnmore">En savoir +</Button>
              <Card.Subtitle className="mb-2 text-muted">
                Publiée il y a 2 jours
              </Card.Subtitle>
            </Card>
          </Card.Body>
        </div>

        <div class="DROITE">
          <Card className="cardsize">
            <Card.Body style={{ padding: "0px" }}>
              <Card.Title>Data analyst H/F</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Entreprise
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                Lieu (13)
              </Card.Subtitle>
              <Button
                className="learnmore"
                style={{ marginRight: "20px", marginBottom: "10px" }}
              >
                Postuler
              </Button>
              <br />
              <Card.Text
                className="contratType"
                style={{ marginRight: "10px" }}
              >
                CDI
              </Card.Text>
              <Card.Text className="fullTime">Temps plein</Card.Text>
              <Card.Subtitle className="mb-2">
                Description du poste
              </Card.Subtitle>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor. Et dolore magna aliqua ut enim ad minim veniam,
                quis nostrud exercitation. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor. Et dolore
                magna aliqua ut enim ad minim veniam, quis nostrud exercitation.
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                Publiée il y a 5 jours
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
