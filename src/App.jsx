import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingView from './Views/LandingView';
import ResultsView from './Views/ResultsView';

function App() {
  console.log("App component render");

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingView />,
    },
    {
      path: '/search',
      element: <ResultsView />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;