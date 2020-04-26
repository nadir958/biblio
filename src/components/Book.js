import React from 'react';
import {Card} from  'react-bootstrap';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
  const divStyle = {
    marginTop: '20px',
    width: '18rem'
  };
    return(
        <Card style={divStyle}>
        <Card.Header>{book.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {book.summary}
            </p>
          </blockquote>
        <Link to={`/Book/${book.id}`} className="btn btn-dark d-block m-1">Details</Link>
        </Card.Body>
        </Card>
    )
};
export default Book;