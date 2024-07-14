import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResults from './Components/SearchResults'
import LandingView from './Views/LandingView'
import ResultsView from './Views/ResultsView'


function App() {
  
  const [searchInput, setSearchInput] = useState('')
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingView searchInput={searchInput} setSearchInput={setSearchInput}/>
    },
    {
      path: '/search',
      element: <ResultsView searchInput={searchInput} setSearchInput={setSearchInput}/>
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
