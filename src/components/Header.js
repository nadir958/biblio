import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';

const Header = () => {
    return(
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Biblio</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#Books">Books</Nav.Link>
          <Nav.Link href="#About">About</Nav.Link>
        </Nav>
        </Navbar>
    )
};
export default Header;