import React, {useState} from 'react';
import {Container, Row,Col } from 'react-bootstrap';
import Book from './Book';
import BookSearch from './BookSearch';



const BookView = ({books,onSearch}) => {

    const searchBook = (booktitle)=>{
        onSearch(booktitle);
    }
    return(
        <Container>
            <Row>
                <Col>
                    <BookSearch onSearch={searchBook}/>
                </Col>
            </Row>
            <Row>
                {
                    books.map((book) => <Col key={book.isbn}><Book book={book}/></Col>)
                }
            </Row>
        </Container>
    )
};

export default BookView;