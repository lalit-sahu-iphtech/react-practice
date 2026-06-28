import { useState } from "react";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  const [isClicked, setIsClicked] = useState(0);


  const isToggled = () => {
    setIsLiked(!isLiked);
    setIsClicked(isClicked+1);
  };

  let styles = {
    color:"red"
  }

  return (
    <div>
        <h3>click = {isClicked}</h3>
      <p onClick={isToggled}>
        {isLiked ? (
          <i className="fa-solid fa-heart"style={styles}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}