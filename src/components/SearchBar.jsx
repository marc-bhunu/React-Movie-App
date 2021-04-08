import React, { useState } from 'react'
import { Form, Button, FormControl } from 'react-bootstrap'
import { SearchMovie } from '../services'

export const SearchBar = () => {

    const [search, setSearch] = useState('');
    const [result, setResult] = useState([]);
   
    const handleSearch = () => {
        const data = SearchMovie(search)
        setResult(data)
       
    } 
    console.log('Result', result)

    return (
        <Form inline onSubmit={handleSearch} >
            <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={search}
                onChange={(event) => setSearch(event.target.value)} />
            <Button
                variant="outline-success"
                onClick={handleSearch}>
                Search
            </Button>
        </Form>
    )
}
