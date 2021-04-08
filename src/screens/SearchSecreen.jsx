import React, { useState } from 'react'
import { Form, Button, FormControl, Container } from 'react-bootstrap'
import { Header } from '../components'
import { SearchMovie } from '../services'

export const SearchSecreen = () => {

    const [search, setSearch] = useState('');
    const [result, setResult] = useState([]);

    const handleSearch = async () => {
        const data = await SearchMovie(search)
        setResult(data)
    }
    const response = result.map(r=>(<p key={r.imdbID}>{r.Title}</p>))

    return (
        <>
        <Header/>
        <Container>
        <Form inline  className='py-3 d-flex justify-content-center' onSubmit={handleSearch} >
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

        <h1>{response}</h1>
        </Container>
    </>
    )
}
