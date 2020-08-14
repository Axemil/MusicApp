import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getArtist } from "../redux/actions";
import CardArtist from './CardArtist'

const Artist = () => {
    const { artist } = useParams();
    const dispatch = useDispatch();
    const artistInfo = useSelector((state) => state.music.artist.artist);
    const loading = useSelector((state) => state.app.loading);

    useEffect(() => {
        dispatch(getArtist(artist));
    }, [artist, dispatch]);

    if (loading) {
        return (
          <div style={{width: "100%", display: 'flex', justifyContent: 'center'}}>
            <div style={{fontSize: "2rem"}} className="spinner-border text-primary" role="status">
              <span className="sr-only">loading...</span>
            </div>
          </div>
        );
      } else return <CardArtist info={artistInfo}/>
    
}

export default Artist
