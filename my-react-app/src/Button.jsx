export default function Button(){
    
    

    function formHandleSubmit(event){
        event.preventDefault();
        console.log("form submited");
    }
    return(
        <div>
            <form onSubmit={formHandleSubmit}>
                <input type="text"placeholder="write something"/>
                <button>submit</button>

            </form>
        </div>
    )
}