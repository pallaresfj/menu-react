import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap';

const MenuBar = function({ onOptionClicked }) {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">Menu-React</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse >
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <NavDropdown title="Menu" align="end" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#Componente1" name="comp1" onClick={onOptionClicked}>Componente 1</NavDropdown.Item>
                            <NavDropdown.Item href="#Componente2" name="comp2" onClick={onOptionClicked}>Componente 2</NavDropdown.Item>
                            <NavDropdown.Item href="#Componente3" name="comp3" onClick={onOptionClicked}>Componente 3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#Componente4" name="comp4" onClick={onOptionClicked}>Componente 4</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MenuBar;