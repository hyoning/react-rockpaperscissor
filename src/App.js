import {useState} from 'react'
import './App.css';
import Box from './component/Box.js'

const choice = {
  rock : {
    name: "Rock",
    img: "img/rock.png"
  },
  scissors : {
    name: "Scissors",
    img: "img/scissors.png"
  },
  paper : {
    name: "Paper",
    img: "img/paper.png"
  }
}
function App() {
  const [userSelect, setUserSelect] = useState(choice.scissors)
  const [computerSelect, setComputerSelect] = useState(choice.scissors)
  const [result, setResult] = useState("")
  const [computerResult, setComputerResult] = useState("")
  const [userScore, setUserScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)

  const play = (userChoice) =>{
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
    let user = judgement(choice[userChoice], computerChoice)
    setResult(user)
    let computer = user === "Tie" ? "Tie" : user === "Win" ? "Lose" : "Win"
    setComputerResult(computer)
    inScore(user, computer)
  } 
  const judgement = (user, computer) => {
    if(user.name === computer.name){
      return "Tie"
    } else if(user.name === "Rock"){
      return computer.name === "Scissors" ? "Win" : "Lose";
    } else if(user.name === "Scissors"){
      return computer.name === "Paper" ? "Win" : "Lose";
    } else if(user.name === "Paper"){
      return computer.name === "Rock" ? "Win" : "Lose";
    }
  }
  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체에 키값만 뽑아서 배열로 만들어주는 Object.keys
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem]
    return choice[final]
  }

  const inScore = (user, computer) => {
    setUserScore(user === "Win" ? userScore + 1 : userScore)
    setComputerScore(computer === "Win" ? computerScore + 1 : computerScore)
  }

  return (
    <div className="wrap">
      <div className="title">가위 바위 보 게임!
        <div className="scoreWrap">
          <ul>
            <li>{userScore}</li>
            <li>{computerScore}</li>
          </ul>
        </div>
      </div>
      <div className='buttonWrap'>
        <button className="button-scissors" onClick={() => play("scissors")}>가위</button>
        <button className="button-rock" onClick={() => play("rock")}>바위</button>
        <button className="button-paper"  onClick={() => play("paper")}>보</button>
      </div>
      <div className="main">
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={computerResult}/>
      </div>
    </div>
  );
}

export default App;
