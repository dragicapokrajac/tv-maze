import React from 'react';
import classes from './ShowItem.module.css';
import star from '../images/star.png';


const ShowItem = ({ name, score, year, image }) => {

   let yearPremiered;

   if (year) {
      const date = new Date(year.split('-'));
      yearPremiered = date.getFullYear();
   } else {
      yearPremiered = '-'
   };

   console.log(score.toFixed(2));

   return (
      <li className={classes.container}>
         <img
            src={image ? image : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'}
            alt={name}
         />
         <div className={classes.infoWrapper}>
            <h3>{name}</h3>
            <div className={classes.showInfo}>
               <p>
                  <span>{score.toFixed(2)}</span>
                  <img src={star} className={classes.starImg} />
               </p>
               <p>{yearPremiered}</p>
            </div>
         </div>
      </li>
   );
};

export default ShowItem;