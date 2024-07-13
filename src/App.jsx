import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import SearchBar from './Components/SearchBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResults from './Components/SearchResults'
import LandingView from './Views/LandingView'

function App() {

  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
      <LandingView/>
    </>
  )
}

export default App
