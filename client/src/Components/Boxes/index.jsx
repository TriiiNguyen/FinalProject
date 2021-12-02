import React from "react";
import "../../index.css";
import "../Boxes/style.css";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Container, Row, Card } from "react-bootstrap";


export default function ContentBoxes() {
  return (
    <div className="min-300-vh ">
      <Row border-color="blue">
        {/* <Card.Img src={TraumaBonding} alt="Trauma Bonding"><h1> Signs of Trauma Bonding</h1></Card.Img> */}
        <Card.Title>Resources</Card.Title>
      </Row>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
              <Card.Body>
                <Card.Title>Suicide Prevention Resources</Card.Title>
                <Card.Text>
                  If you or someone you know battles depression or suicidal
                  thoughts, please call 800-273-8255 or visit{" "}
                  <a href="https://suicidepreventionlifeline.org/">
                    The Suicide Prevention Website.{" "}
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
              <Card.Body>
                <Card.Title>Domestic Violence Help Resources</Card.Title>
                <Card.Text>
                  If you or someone you know is in an abusive relationship,
                  please call 800-799-SAFE(7233) or visit{" "}
                  <a href="https://www.thehotline.org/">
                    The National Domestic Violence Hotline Website.{" "}
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
