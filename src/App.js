import React, { useEffect,useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Row,Col } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import BookView from './components/BookView';
import axios from "axios";
import { bookService } from './serviceq/BookService';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BookDetailsView from './views/BookDetailsView';

const BOOKS =[
  {id: 'EE1', title: 'Java',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuereerat a ante.'},
  {id: 'EE2', title: 'React',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuereerat a ante.'},
  {id: 'EE3', title: 'PHP',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuereerat a ante.'}
  ,{id: 'EE4', title: 'Laravel',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuereerat a ante.'}
  ,{id: 'EE5', title: 'Symfony',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuereerat a ante.'}

]

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
            <Route path="/books/:id">
              <p>ididididid</p>
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
