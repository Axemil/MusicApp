import React from "react";
import { Row, Col, Image, Badge, Alert, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardArtist = ({ info }) => {
  return info ? (
    <div>
      <Row>
        <Col className="d-flex">
          <Image className="m-1" src={info.image[3]["#text"]} rounded />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>
            {info.name} |{" "}
            <a href={info.url}>
              <Button variant="primary">View artis on Last.fm</Button>
            </a>{" "}
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>
            <Badge variant="secondary">Listeners</Badge> -{" "}
            {info.stats.listeners}
          </h5>
          <h5>
            <Badge variant="secondary">Playcount</Badge> -{" "}
            {info.stats.playcount}
          </h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <Alert variant="success" className="m-2">
            <h2 style={{textAlign: 'center'}}>Bio</h2>
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col style={{fontSize: "1.2rem"}}>
        {info.bio.summary}
        </Col>
      </Row>
      <Row>
        <Col>
          <Alert variant="warning" className="m-2" style={{fontSize: "1.5rem"}}>
            <h2 style={{textAlign: 'center'}}>Tags</h2>
          </Alert>
        </Col>
      </Row>
      <div style={{margin: '30px 0'}} className="d-flex justify-content-around align-items-start flex-wrap">
        {info.tags.tag.map((item, index) => (
          <Badge style={{fontSize: "1.5rem"}} className="m-1" variant="warning" key={index}>{item.name}</Badge>
        ))}
      </div>
      <Row>
        <Col>
          <Alert variant="primary" className="m-2">
            <h2 className="border" style={{textAlign: 'center'}}>Similar artists</h2>
          </Alert>
        </Col>
      </Row>
      <div className="d-flex justify-content-between align-items-start flex-wrap">
        {info.similar.artist.map((item, index) => (
          <Card key={index} style={{ width: "18rem", margin: "10px 0" }}>
            <Card.Body>
              <Card.Title
                className="text-primary"
                style={{ textAlign: "center", fontSize: "1.6rem" }}
              >
                <Link to={"/artist/" + item.name}>{item.name}</Link>
              </Card.Title>
              <a href={item.url}>
                <Button variant="primary" style={{ width: "100%" }}>
                  View artist on Last.fm
                </Button>
              </a>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default CardArtist;
