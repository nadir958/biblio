import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';

const Header = () => {
    return(
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Biblio</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">Books</Nav.Link>
          <Nav.Link href="/">About</Nav.Link>
          <Nav.Link href="/add/book">Add book</Nav.Link>

        </Nav>
        </Navbar>
    )
};
export default Header;