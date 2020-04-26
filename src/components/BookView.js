import React, {useState} from 'react';
import {Container, Row,Col,Button } from 'react-bootstrap';
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
                    books.map((book,key) => <Col key={book.id}><Book book={book}/></Col>)
                }
            </Row>
        </Container>
    )
};

export default BookView;