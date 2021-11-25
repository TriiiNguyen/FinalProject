import React from 'react';
import '../Boxes/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Container, Row, Card } from 'react-bootstrap'
import TraumaBonding from "./Resources/TraumaBonding.jpg"

export default function ContentBoxes() {
  return (
    <div className="min-100-vh ">

      <Row border-color="white">
      <Card.ImgOverlay src={TraumaBonding} alt="Trauma Bonding"><h1> Signs of Trauma Bonding</h1></Card.ImgOverlay>
      <Card.Title>Trauma Bonding</Card.Title>
      <Card.Text>Trauma bonding is a psychological response to abuse.It occurs when the abused person forms an unhealthy bond with the person who abuses them.The person experiencing abuse may develop sympathy for the abusive person, which becomes reinforced by cycles of abuse, followed by remorse.</Card.Text>
      </Row>
      <Row xs={1} md={2} className="g-4">
    {Array.from ({ length: 4 }).map((_, idx) => (
      <Col>
      <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
      This is a longer card with supporting text below as a natural
      lead-in to additional content.This content is a little bit longer.
      </Card.Text>
      </Card.Body>
      </Card>
      </Col>
    ))}
      </Row>

    </div>
  )}