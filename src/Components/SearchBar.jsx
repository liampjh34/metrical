import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"

export default function SearchBar({ displayDirection }) {

    const [searchInput, setSearchInput] = useState('')
    const [searchTerm, setSearchTerm] = useState('')
    const inputRef = useRef(null)
    const navigate = useNavigate()

    function handleChange(event) {
        setSearchInput(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        setSearchTerm(searchInput)
        setSearchInput('')
    }

    useEffect(() => {
        if (searchTerm) {
            navigate(`/search?poet=${searchTerm}`)
        }
    }, [searchTerm, navigate])


   return  <form onSubmit={handleSubmit} className={displayDirection}>
        <input
            type='text'
            aria-label="Search for a classic poet" 
            value={searchInput}
            onChange={handleChange}
            id="searchInput"
            placeholder="Search for a classic poet"
        ></input>
        <button 
            variant="primary" 
            size="lg"
            type="submit"
        >Search</button>{' '}
    </form>
}