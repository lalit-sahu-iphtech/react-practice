
import CounterUseEffect from "./CounterUseEffect"

function App(){
  let[state, setState] = useState(true);
  return(
    <>
    <button onClick ={(e) => setState(!state)}>Toggle</button>
   {state ?<CounterUseEffect/> : ""}
    </>
  )
}
export default App;