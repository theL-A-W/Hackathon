import Leaderboard from './Leaderboard'
import UserInterestHobbies from './UserInterestHobbies'

export default function Home (){
    return (
        
        <div className="home">

            <div id="app-title">Icebreaker</div>
              <UserInterestHobbies/>
              <Leaderboard/>

            
        </div>
)
}