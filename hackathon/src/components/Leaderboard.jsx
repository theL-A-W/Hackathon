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
        
      <div className='leaderboard' >
          <Card style={{ width: '18rem' }}>
          <Card.Header>PROFILE</Card.Header>
          <Image id="profile-img-current-user"></Image>
          <Card.Header id="leaderboard-title">LEADERBOARD</Card.Header>
          <ListGroup variant="flush" className='leaderboard-group'>
          <Image id="profile-img-other-user"></Image>
            <ListGroup.Item id="leaderboard-list">
              <p>Michelle</p>
              <p id="num-points">163 pts</p>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className='leaderboard-group'>
          <Image id="profile-img-other-user"></Image>
            <ListGroup.Item id="leaderboard-list">
              <p>Cheryl</p>
              <p id="num-points">148 pts</p>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className='leaderboard-group'>
          <Image id="profile-img-other-user"></Image>
            <ListGroup.Item id="leaderboard-list">
              <p>Marie</p>
              <p id="num-points">121 pts</p>
            </ListGroup.Item>
        </ListGroup>
        </Card>
      </div>
)
}
