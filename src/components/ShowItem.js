import React from 'react';
import classes from './ShowItem.module.css';
import star from '../images/star.png';
import { Link } from 'react-router-dom';


const ShowItem = ({ name, score, year, image, link }) => {

   let yearPremiered;

   if (year) {
      const date = new Date(year.split('-'));
      yearPremiered = date.getFullYear();
   } else {
      yearPremiered = '-'
   };

   return (
      <li className={classes.container}>
         <Link to='show-details'>
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
         </Link>
      </li>
   );
};

export default ShowItem;