import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCalendar, faMedal, faLaptop } from '@fortawesome/free-solid-svg-icons'

export default function Navigation (){

    return (
        
        <div className='navigation'>
      <Navbar bg="light" data-bs-theme="light"fixed="bottom" position="sticky">
        <Container className="nav">
          <Nav id="nav">
            <Nav.Link href="/"><FontAwesomeIcon icon={faUser} size="3x"/></Nav.Link>
            <Nav.Link href="/Availability"><FontAwesomeIcon icon={faCalendar} size="3x" /></Nav.Link>
            <Nav.Link href="/IcebreakerQuestions"><FontAwesomeIcon icon={faLaptop} size="3x" /></Nav.Link>
            <Nav.Link href="/Leaderboard"><FontAwesomeIcon icon={faMedal} size="3x" /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        </div>
)
}