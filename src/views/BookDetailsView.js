import React, { useState, useEffect } from 'react';
import { bookService } from '../services/BookService';
import { useParams, Link } from 'react-router-dom';
import {Card } from 'react-bootstrap';


const BookDetailsView = ({data})=>{

  let { id } = useParams();
  const [Book, setBook] = useState([]);
  const findBookById = ()=>{
    bookService.findBookById(id).then((response)=>{
        setBook(response.data)
    });
  }

  useEffect(()=>{
    findBookById();
  }, []);

  const divStyle = {
    marginTop: '20px'
};

  return (
    
  /**   <div>
      <Link to={`/edit/book/${Book.id}`} className="text-right m-3 btn btn-dark border-dark">Edit</Link>
      <div className="p-2 border border-dark rounded">
      <h3>{Book.title}</h3>
          <p> {Book.summary} </p>
          <hr className="bg-primary" />
          <p className="m-0">{Book.language}</p>
          <p>{Book.author}</p>
      </div>
    </div>
    */
   <div>
   <Link to={`/edit/book/${Book.id}`} className="text-right m-3 btn btn-dark border-dark">Edit</Link>
   <Card style={divStyle}>
   <Card.Body>
     <Card.Title >{Book.title}</Card.Title>
     <Card.Subtitle className="mb-2 text-muted">{Book.publisher+" - "+Book.publicationDate}</Card.Subtitle>
     <Card.Text>
       <p>{Book.summary}</p>
     </Card.Text>
     <hr/>
        <p className="m-0">{Book.language}</p>
        <p>{Book.author}</p>
   </Card.Body>
 </Card>
 </div>
  )
};

export default BookDetailsView;