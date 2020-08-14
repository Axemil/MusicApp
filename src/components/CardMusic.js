import React from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardMusic = ({ info }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={info.image[3]["#text"]} />
      <Card.Body>
        <Card.Title>
          <Link
            to={"artist/" + info.artist.name.trim()}
            className="text-primary"
          >
            {info.artist.name}
          </Link>{" "}
          - {info.name}
        </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Listeners - {info.listeners}</ListGroupItem>
      </ListGroup>
      <Card.Body className="p-0">
        <a href={info.url}>
          <Button variant="primary" style={{ width: "100%" }}>
            View track on Last.fm
          </Button>
        </a>
      </Card.Body>
    </Card>
  );
};

export default CardMusic;
