import { useState } from "react";

export default function Like(){

  let [liked, setLiked] = useState(false);

  let handleLike = () =>{
    setLiked(!liked);
  }

  return(
    <div>

      <button onClick={handleLike}>

        {liked ? "❤️ Liked" : "🤍 Like"}

      </button>

    </div>
  )
}