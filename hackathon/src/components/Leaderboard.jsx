import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'


export default function Leaderboard (){
const [points, setPoints] = useState(0)
const answer1 = "password"
const answer2 = "answer"
const answer3 = "password"
const handleSubmit = (questionNumber) => {
  const input = document.getElementById(`question${questionNumber}-input`)
  if (input.value === answer1 || input.value === answer2 || input.value === answer3){
    console.log("correct!")
    alert("correct!")
    setPoints(points + 1)
    console.log(points)
  } else{
    console.log("not quite... try again.")
    alert("not quite... try again.")
  }
}
//Create function for users with the top 3 amount of points to be at the top of the leaderboard

    return (
        
        <div >
          <Form className='questions-card'>
            <div className='questions'>
{/* QUESTION 1 */}
            <Form.Label id="question-label">Question 1</Form.Label>
            <Form.Text id="passwordHelpBlock" muted>1: What inspired ____ to start coding?</Form.Text>
            <div>
            <Form.Control placeholder='answer' id="question1-input"></Form.Control>
            <button onClick={() => handleSubmit(1)}>Submit</button>
            </div>
{/* QUESTION 2 */}
            <Form.Label id="question-label">Question 2</Form.Label>
            <Form.Text id="question-label">2: Where did ____ hear about GA?</Form.Text>
            <div>
            <Form.Control placeholder='answer' id="question2-input"></Form.Control>
            <button onClick={() => handleSubmit(2)}>Submit</button>
            </div>
{/* QUESTION 3 */}
            <Form.Label id="question-label">Question 3</Form.Label>
            <Form.Text id="question-label">3: On a scale of 0-10 what is ____'s current coding level?</Form.Text>
            <div>
            <Form.Control placeholder='answer' id="question3-input"></Form.Control>
            <button onClick={() => handleSubmit(3)}>Submit</button>
            </div>
          </div>

        </Form>
          <Card className='leaderboard' style={{ width: '18rem' }}>
          <Card.Header>Leaderboard</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Leader(in 1st place)</ListGroup.Item>
            <ListGroup.Item>Leader(in 2nd place)</ListGroup.Item>
            <ListGroup.Item>Leader(in 3rd place)</ListGroup.Item>
          </ListGroup>
        </Card>

      </div>
)
}
