import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const [text, setText] = useState("");
  const history = useHistory();
  const handleSubmit = () => {
    if(text.length){
      history.push('/search/' + text)
      setText('');
    }
  }
  return (
    <div className="header bg-dark text-white p-2">
      <Container>
        <Row className="d-flex align-items-center">
          <Col>
            <Link to="/">
              <h1>Music App</h1>
            </Link>
          </Col>
          <Col className="d-flex justify-content-end">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search for music"
                className=" mr-sm-2"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <Button onClick={handleSubmit}>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
