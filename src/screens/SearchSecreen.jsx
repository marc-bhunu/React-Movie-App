import React, { useState } from 'react'
import { Form, Button, FormControl, Container, Row, Col } from 'react-bootstrap'
import { Cards, Header } from '../components'
import { SearchMovie } from '../services'

export const SearchSecreen = () => {

    const [search, setSearch] = useState('');
    const [result, setResult] = useState([]);

    const handleSearch = async () => {
        const data = await SearchMovie(search)
        setResult(data)
    }
    
    return (
      <>
        <Header />
        <Container>
          <Form
            inline
            className="py-3 d-flex justify-content-center"
            onSubmit={handleSearch}>

            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={search}
              onChange={(event) => setSearch(event.target.value)}/>
            <Button variant="outline-success" onClick={handleSearch}>Search</Button>
          </Form>
          
          <Row>
            {result.map((r) => (
              <Col xs="12" sm="6" lg="3" key={r.imdbID}>
               <Cards title= {r.Title} poster={r.Poster} year={r.Year}/>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
}
