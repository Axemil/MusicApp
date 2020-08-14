import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMusic, getSearchMusic } from "../redux/actions";
import { useParams } from 'react-router-dom'
import CardMusic from "./CardMusic";
import CardMusicSearch from './CardMusicSearch'

const TopChartList = () => {
  const { text } = useParams();
  const dispatch = useDispatch();
  const music = useSelector((state) => state.music.arrayMusic.tracks);
  const searchMusic = useSelector((state) => state.music.searchMusic.results)
  const loading = useSelector((state) => state.app.loading);

  useEffect(() => {
    if(text){
      dispatch(getSearchMusic(text))
    } else dispatch(getMusic());
  }, [dispatch, text]);

  if (loading) {
    return (
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div
          style={{ fontSize: "2rem" }}
          className="spinner-border text-primary"
          role="status"
        >
          <span className="sr-only">loading...</span>
        </div>
      </div>
    );
  } else if(searchMusic){
    return (
      <div className="d-flex justify-content-around align-items-start flex-wrap">
        {searchMusic.trackmatches.track.map((item, index) => (
          <CardMusicSearch key={index} info={item} />
        ))}
      </div>
    );
  } else if (music) {
    return (
      <div className="d-flex justify-content-around align-items-start flex-wrap">
        {music.track.map((item, index) => (
          <CardMusic key={index} info={item} />
        ))}
      </div>
    );
  }

  return <></>;
};

// {
//     arrayMusic.map((post) => <CardMusic post={post} key={post.id} />)
//   }

export default TopChartList;
