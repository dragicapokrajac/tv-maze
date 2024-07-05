import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './ShowDetails.module.css';
import Episode from './Episode';
import axios from 'axios';
import { removeTags } from '../helpers';

const ShowDetails = ({ show }) => {
   const [episodeIsShown, setEpisodeIsShown] = useState(false);
   const [episodeData, setEpisodeData] = useState({})

   const urlPrevEpisode = show._links.previousepisode?.href;
   const urlNextEpisode = show._links.nextepisode?.href;

   const fetchEpisodeDetail = async (url) => {
      try {
         const response = await axios.get(url);
         const data = response.data;
         setEpisodeData(data);
      } catch (error) {
         console.error(error);
      };
   };

   const openEpisodeHandler = (url) => {
      setEpisodeIsShown(true);
      fetchEpisodeDetail(url);
   };

   const closeEpisodeHandler = () => {
      setEpisodeIsShown(false);
   };

   let description = removeTags(show.summary);

   const airDate = show.premiered
      ? show.premiered
      : '-';

   const runtime = show.runtime
      ? show.runtime
      : '-';

   // let formattedDate;
   // if (show.premiered) {
   //    const date = new Date(show.premiered);
   //    formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
   // } else {
   //    formattedDate = '-'
   // };

   return (
      <>
         {episodeIsShown && <Episode onCloseEpisode={closeEpisodeHandler} showName={show.name} episodeData={episodeData} />}
         <div className={classes.container}>
            <img
               src={show.image?.original ? show.image?.original : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'}
               alt={show.name}
               className={classes.img}
            />
            <div className={classes.infoWrapper}>
               <Link to='..' className={classes.link}>&lt; Back</Link>
               <h1>{show.name}</h1>
               <p>
                  {show.genres.map((genre, i) =>
                     <span key={i} className={classes.genres}>{genre}</span>
                  )}
               </p>
               <h3>Story:</h3>
               <p>{description}</p>

               <h3>Details:</h3>
               <p><span className={classes.span}>Status:</span> {show.status}</p>
               {/* <p>First air date: <span className={classes.span}>{formattedDate}</span></p> */}
               <p><span className={classes.span}>First air date: </span>{airDate}</p>
               <p><span className={classes.span}>Spoken language: </span>{show.language}</p>
               <p><span className={classes.span}>Runtime: </span>{runtime} min</p>
               {urlPrevEpisode &&
                  <button onClick={() => openEpisodeHandler(urlPrevEpisode)} className={classes.episodeBtn}>
                     Previous episode
                  </button>
               }
               {urlNextEpisode &&
                  <button onClick={() => openEpisodeHandler(urlNextEpisode)} className={classes.episodeBtn}>
                     Next episode
                  </button>
               }
            </div>
         </div>
      </>
   );
};

export default ShowDetails;