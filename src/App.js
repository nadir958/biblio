import React, { useEffect,useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Row,Col,Button } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import BookForm from './components/BookForm';
import BookView from './components/BookView';
import axios from "axios";
import { bookService } from './services/BookService';

import {
  BrowserRouter as Router,Switch,Route,Link
} from "react-router-dom";
import BookDetailsView from './views/BookDetailsView';


function App(){
  const [books, setBooks] = useState([]);
  const [searchValue,setSearchValue] = useState('');

  useEffect(()=>{

    const findBooks = () => {
      bookService.findBooks()
          .then(function (response) {
          console.log('books',response.data);
          setBooks(response.data);
    });};
    const findBooksByTitle= () =>{
      bookService.findBooksByTitle(searchValue)
          .then(function (response) {
          setBooks(response.data);
    });};

    const searchBook = ()=>{
      if(searchValue.length===0){
        findBooks();
      }else{
        findBooksByTitle(searchBook);
      };
  };

  searchBook();
}, [searchValue]);
  
  return(
    <Container fluid>
      <Row>
        <Col>
          <Header/>
        </Col>
      </Row>
      <Row>
        <Col>
        <Container>
        <Router>
          <Switch>
          <Route path="/edit/book/:id">
            <Container>
              <BookForm mode="edit" />
            </Container>
          </Route>
          <Route path="/add/book">
            <Container>
              <BookForm mode="create" />
            </Container>
          </Route>
          <Route path="/Book/:id">
            <Container>
              <BookDetailsView />
            </Container>
            </Route>
            <Route path="/">
              <BookView books={books} onSearch={(bookName)=>setSearchValue(bookName)}/>

            </Route>
          </Switch>
          </Router>
          
        </Container>
        </Col>
      </Row>
    </Container>

  )
};

export default App;
