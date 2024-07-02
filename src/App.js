import { useEffect, useState } from 'react';
import axios from 'axios';
import ShowsList from './components/ShowsList';

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
      <>
         <ShowsList shows={shows} />
      </>
   );
}

export default App;
