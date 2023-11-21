import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'


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
            <Form.Text id='current-user-name'>Carter Stewart</Form.Text>
            <div>
          <Image id="profile-img-current-user"></Image>
          </div>
            <div className='questions'>
{/* QUESTION 1 */}
            <Form.Label id="question-label">Q1</Form.Label>
            <Form.Text id="question-text" muted>What fictional family would you join?</Form.Text>
            <div>
            <Form.Control placeholder='answer' id="question1-input"></Form.Control>
            <button onClick={() => handleSubmit(1)}>Submit</button>
            </div>
{/* QUESTION 2 */}
            <Form.Label id="question-label">Q2</Form.Label>
            <Form.Text id="question-text">What is your go-to karaoke anthem song?</Form.Text>
            <div>
            <Form.Control placeholder='answer' id="question2-input"></Form.Control>
            <button onClick={() => handleSubmit(2)}>Submit</button>
            </div>
{/* QUESTION 3 */}
            <Form.Label id="question-label">Q3</Form.Label>
            <Form.Text id="question-text">What made you want to start coding?</Form.Text>
            <div>
            <Form.Control placeholder='answer' id="question3-input"></Form.Control>
            <button onClick={() => handleSubmit(3)}>Submit</button>
            </div>
          </div>

        </Form>

      </div>
)
}
