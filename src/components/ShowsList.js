import ShowItem from './ShowItem';
import classes from './ShowsList.module.css';

const ShowsList = ({ shows }) => {
   return (
      <>
         <h1>Trending Shows</h1>
         <ul>
            {shows.map(show =>
               <ShowItem
                  key={show.show.id}
                  name={show.show.name}
                  score={show.score}
                  year={show.show.premiered}
                  image={show.show.image?.medium}
                  link={show.show._links.self.href}
               />
            )}
         </ul>
      </>
   );
};

export default ShowsList;