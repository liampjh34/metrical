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


   return  <Form onSubmit={handleSubmit}>
        <Form.Label htmlFor="searchInput">Search a poet:</Form.Label>
        <Form.Control 
            value={searchInput}
            onChange={handleChange}
            id="searchInput"
            placeholder="Poet's name"
        ></Form.Control>
        <Button 
            variant="primary" 
            size="lg"
            type="submit"
        >Search</Button>{' '}
    </Form>
}