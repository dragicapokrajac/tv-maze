import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
   const error = useRouteError();

   let title = 'An error occurred';
   let message = error.data.message;

   return (
      <>
         <p>{title}</p>
         <p>{message}</p>
      </>
   );
};

export default ErrorPage;