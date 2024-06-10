import { useState } from "react"
import { Form, Button } from "react-bootstrap"

export default function SearchBar({searchTerm, setSearchTerm}) {

    

    function handleChange(event) {
        setSearchTerm(event.target.value)
    }

    function handleSubmit(event) {

    }


   return  <Form>
        <Form.Label htmlFor="searchTerm">Search a poet:</Form.Label>
        <Form.Control 
            value={searchTerm}
            onChange={handleChange}
        ></Form.Control>
        <Button 
            variant="primary" 
            size="lg"
        >Search</Button>{' '}
    </Form>
}