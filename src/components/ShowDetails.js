import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ShowDetails.module.css';

const ShowDetails = ({ show }) => {

   let description;

   function removeTags(str) {
      if ((str === null) || (str === '')) {
         return description = '-';
      } else {
         return str.replace(/(<([^>]+)>)/ig, '');
      };
   };

   description = removeTags(show.summary);

   // let formattedDate;

   // if (show.premiered) {
   //    const date = new Date(show.premiered);
   //    formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
   // } else {
   //    formattedDate = '-'
   // };

   return (
      <>
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
               <p>Status: <span className={classes.span}>{show.status}</span></p>
               {/* <p>First air date: <span className={classes.span}>{formattedDate}</span></p> */}
               <p>First air date:
                  <span className={classes.span}>
                     {show.premiered ? show.premiered : ' -'}
                  </span>
               </p>
               <p>Spoken language: <span className={classes.span}>{show.language}</span></p>
               <p>Runtime: <span className={classes.span}>{show.runtime} minute</span></p>
            </div>
         </div>

      </>
   );
};

export default ShowDetails;