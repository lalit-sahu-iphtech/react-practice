function printBye(){
    console.log("bye!");
}
function printHellow(){
    console.log("Hellow!");
}

export default function Button(){
    return(
        <div>
            <button onClick = {printHellow}>Click me !</button>
            <p onClick = {printBye}>this is psrsh for event demo</p>
        </div>
    )
}
//onMouseOver = hover
//onDoubleClick = double click
