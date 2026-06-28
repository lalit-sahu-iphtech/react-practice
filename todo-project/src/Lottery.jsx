import {useState} from "react"
import "./Lottery.css";
import {genTicket, sum} from "./helper";
export default function Lottery(){
  let [ticket, setTicket] = useState(genTicket(3));
  let isWinning = sum(ticket) === 15;

  function buyNewTicket(){
    setTicket(genTicket(3));
  }
  return (
    <div>
      <h4>Lottery Game</h4>
       <div className = "ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>

       </div>
       <button onClick={buyNewTicket}>Buy new ticket</button>
       <h3>{isWinning && "Congratulations, you won!"}</h3>
    </div>
  )
}