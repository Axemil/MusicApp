import React from "react";
import MusicList from "./MusicList";
import { Badge } from "react-bootstrap";
import { useParams } from 'react-router-dom'

const Main = () => {
  const { text } = useParams();
  return (
    <div className="main">
      <Badge pill variant="success">
        {console.log(text)}
        { !text ? <h1>Top-50 music on Last.fm</h1> : <h1>Searching for {text}</h1> }
      </Badge>
      <MusicList />
    </div>
  );
};

export default Main;
