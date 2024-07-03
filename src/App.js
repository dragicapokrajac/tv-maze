import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ShowsPage, { loader as showsLoader } from './pages/Shows';
import ShowDetails from './components/ShowDetails';
import RootLayout from './components/Root';
import ErrorPage from './pages/Error';

function App() {

   const router = createBrowserRouter([
      {
         path: '/',
         element: <RootLayout />,
         errorElement: <ErrorPage />,
         children: [
            {
               index: true,
               element: <ShowsPage />,
               loader: showsLoader,
            },
            {
               path: 'show-details',
               element: <ShowDetails />
            }
         ],
      },
   ]);

   return (
      <>
         <RouterProvider router={router} />
      </>
   );
}

export default App;
