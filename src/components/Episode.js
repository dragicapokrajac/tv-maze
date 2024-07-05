import React from 'react';
import Modal from './UI/Modal';
import classes from './Episode.module.css';
import { removeTags } from '../helpers';

const Episode = ({ onCloseEpisode, showName, episodeData }) => {
   let description = removeTags(episodeData.summary);

   return (
      <Modal onClose={onCloseEpisode}>
         <div className={classes.infoWrapper}>
            <h4>{showName}</h4>
            <p className={classes.season}>S{episodeData.season}E{episodeData.number}</p>
            <h2>{episodeData.name}</h2>
            <p><span className={classes.span}>Episode aired: </span>{episodeData.airdate}</p>
            {episodeData.summary && <p><span className={classes.span}>Storyline: </span>{description}</p>}
            <button className={classes.btn} onClick={onCloseEpisode}>Close</button>
         </div>
      </Modal>
   );
};

export default Episode;