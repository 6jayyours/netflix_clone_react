import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../Axios';
import {API_KEY,imageUrl} from '../../constants/constants';

function Banner() {

    const [movie,setMovie] = useState([]);

    
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{

            const results = response.data.results;
            const randomIndex = Math.floor(Math.random() * results.length);
            // console.log(response.data.results[0]);
            setMovie(response.data.results[randomIndex]);
        })
        
    },[])

    return (
        <div className='banner' style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}>
            <div className='content'>
                <h1 className='content-title'>{movie ? movie.title:""}</h1>
                <div className='content-btn'>
                    <button className='btn'>Play</button>
                    <button className='btn'>My list</button>
                </div>
                <h3 className='content-desc'>{movie ? movie.overview:""}</h3>
            </div>
            <div className='fade'>

            </div>
        </div>
    );
}

export default Banner
