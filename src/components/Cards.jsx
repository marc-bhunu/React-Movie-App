import React from 'react';
import { Card } from 'react-bootstrap';
export const Cards = ({title, poster, year}) => {
    return (
        <Card className='mb-3'>
          <Card.Body>
            <Card.Img variant="top" src={poster}/>
            <Card.Title  className='mt-3'tag="h4"> <b>Title: </b>{title}</Card.Title>
            <Card.Text>Year: {year}</Card.Text>
          </Card.Body>
        </Card>
      );
}
