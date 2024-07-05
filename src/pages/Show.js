import { json, useRouteLoaderData } from "react-router-dom";
import ShowDetails from "../components/ShowDetails";

const ShowPage = () => {
   const show = useRouteLoaderData('show-details');

   return (
      <ShowDetails show={show} />
   );
};

export default ShowPage;

export const loader = async ({ request, params }) => {
   const id = params.showId;
   const response = await fetch('https://api.tvmaze.com/shows/' + id);

   if (!response.ok) {
      throw json(
         { message: 'Could not fetch details for selected show.' },
         { status: 500 }
      );
   } else {
      return response;
   };
};