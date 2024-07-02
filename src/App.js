import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
   const [shows, setShows] = useState([]);

   useEffect(() => {
      getShows();
   }, []);

   const getShows = async () => {
      try {
         const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
         const data = response.data;
         setShows(data);
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <div className="App">
         <ul>
            {shows.map(show =>
               <li key={show.show.id}>
                  <p>{show.show.name}</p>
                  <p>{show.score}</p>
                  <p>{show.show.premiered}</p>
                  <img src={show.show.image?.medium} />
               </li>
            )}
         </ul>
      </div>
   );
}

export default App;
