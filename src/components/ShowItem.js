import React from 'react';
import classes from './ShowItem.module.css';
import star from '../images/star.png';
import { Link } from 'react-router-dom';


const ShowItem = ({ id, name, score, year, image }) => {

   let remieredYear;

   if (year) {
      const date = new Date(year.split('-'));
      remieredYear = date.getFullYear();
   } else {
      remieredYear = '-'
   };

   return (
      <li className={classes.container}>
         <Link to={`show-details/${id}`}>
            <img
               src={image ? image : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'}
               alt={name}
               className={classes.img}
            />
            <div className={classes.infoWrapper}>
               <h3>{name}</h3>
               <div className={classes.showInfo}>
                  <p>
                     <span>{score.toFixed(2)}</span>
                     <img src={star} className={classes.starImg} />
                  </p>
                  <p>{remieredYear}</p>
               </div>
            </div>
         </Link>
      </li>
   );
};

export default ShowItem;