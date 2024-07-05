import ShowItem from './ShowItem';
import classes from './ShowsList.module.css';

const ShowsList = ({ shows }) => {
   return (
      <div className={classes.showsContainer}>
         <h1>Trending Shows</h1>
         <ul>
            {shows.map(show =>
               <ShowItem
                  key={show.show.id}
                  id={show.show.id}
                  name={show.show.name}
                  score={show.score}
                  year={show.show.premiered}
                  image={show.show.image?.original}
               />
            )}
         </ul>
      </div>
   );
};

export default ShowsList;