import React, { useEffect, useState } from 'react'
import './Item.css'
import axios from '../../Axios';
import {  imageUrl,API_KEY } from '../../constants/constants';
import Youtube from 'react-youtube';

function Item(props) {

  const [movie, setMovie] = useState([]);

  const [trailerId,setTrailerId] = useState('');

  useEffect(() => {
    axios.get(props.url).then((response) => {
      // console.log(response.data.results[0]);
      setMovie(response.data.results);
    })
  }, [props.url])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMoviePlay = (id)=> {
    axios.get(`movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then((response)=>{
      if(response.data.results.length!==0) {
        setTrailerId(response.data.results[0]);
      }
    })

  }

  return (
    <div className='list'>
      <h2>{props.title}</h2>
      <div className='list-item'>
        {movie.map((obj) =>
          <img onClick={()=>handleMoviePlay(obj.id)} className={props.isSmall ? 'small-list-item-poster' : 'list-item-poster'} src={`${imageUrl + obj.backdrop_path}`} alt='movie' />

        )}
      </div>
      {trailerId &&  <Youtube videoId={trailerId.key} opts={opts} /> }

    </div>
  )
}

export default Item
