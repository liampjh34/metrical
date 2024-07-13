import { useState } from "react"
import { Form, Button } from "react-bootstrap"

export default function SearchBar({searchTerm, setSearchTerm}) {

    const [searchInput, setSearchInput] = useState('')

    function handleChange(event) {
        setSearchInput(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        setSearchTerm(searchInput)
        setSearchInput('')
    }


   return  <form onSubmit={handleSubmit}>
        <input
            aria-label="Search a poet" 
            value={searchInput}
            onChange={handleChange}
            id="searchInput"
            placeholder="Poet's name"
        ></input>
        <button 
            variant="primary" 
            size="lg"
            type="submit"
        >Search</button>{' '}
    </form>
}