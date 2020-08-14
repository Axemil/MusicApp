import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Artist from './components/Artist'
import NotFound from './components/NotFound'
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="p-3">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/search/:text" component={Main} />
          <Route exact path="/search/:text" component={Main} />
          <Route exact path="/artist/:artist" component={Artist} />
          <Route exact path="/search/artist/:artist" component={Artist} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
