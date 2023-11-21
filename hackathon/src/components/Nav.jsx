import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Navigation (){
    return (
        
        <div className='navigation'>
      <Navbar bg="light" data-bs-theme="light" >
        <Container id="nav">
          <Navbar.Brand href="#home" id="title">Title</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Leaderboard</Nav.Link>
            <Nav.Link href="#pricing">Log-in</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        </div>
)
}