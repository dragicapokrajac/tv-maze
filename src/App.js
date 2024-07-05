import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/Root';
import ErrorPage from './pages/Error';
import ShowsPage, { loader as showsLoader } from './pages/Shows';
import ShowPage, { loader as showLoader } from './pages/Show';

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
               path: 'show-details/:showId',
               id: 'show-details',
               element: <ShowPage />,
               loader: showLoader,
            },
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
