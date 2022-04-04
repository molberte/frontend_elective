import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'rsuite';


const NavBar = () => {
    return (
        <Navbar>
            <Navbar.Brand href="#">
            Girls Diary
            </Navbar.Brand>
            <Nav>
                <Nav.Item as={Link} to="/">Home</Nav.Item>
                <Nav.Item as={Link} to="/quiz">Quiz</Nav.Item>
                <Nav.Item as={Link} to="/gallery">Gallery</Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default NavBar;