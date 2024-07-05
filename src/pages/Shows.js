import { json, useLoaderData } from 'react-router-dom';
import ShowsList from '../components/ShowsList';

const ShowsPage = () => {
   const shows = useLoaderData();

   return (
      <ShowsList shows={shows} />
   );
};

export default ShowsPage;

export const loader = async () => {
   const response = await fetch('https://api.tvmaze.com/search/shows?q=all');

   if (!response.ok) {
      throw json(
         { message: 'Could not fetch shows.' },
         { status: 500 }
      );
   } else {
      return response;
   };
};