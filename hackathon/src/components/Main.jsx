import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Availability from './Availability'
import Leaderboard from './Leaderboard'
import IcebreakerQuestions from './IcebreakerQuestions'

export default function Main (){

    return (
        
        <div >
             <Routes>
                <Route exact path ="/" element ={<Home/>} />
                <Route exact path ="/Availability" element ={<Availability/>} />
                <Route exact path ="/Leaderboard" element ={<Leaderboard/>} />
                <Route exact path ="/IcebreakerQuestions" element ={<IcebreakerQuestions/>} />
            </Routes>
            
        </div>
)
}