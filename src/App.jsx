import { useState } from 'react';
import './App.css';
import Buttons from './Components/Buttons';
import Image from './Components/Image';
import TextDivs from './Components/TextDivs';
import ThankYou from './Components/ThankYou';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [rating, setRating] = useState(0);

  function handleClick(){
    if(rating > 0){
      setIsClicked(!isClicked)
    }
  }

  function chooseRating(e){
    let choosenRating = e.target.textContent;
    let forStyle = e.target;

    let prevCheckedButton = document.querySelector(".checked")
    if(prevCheckedButton){
      prevCheckedButton.classList.remove("checked")
    }

    if(forStyle.className === "numbers"){
      forStyle.classList.add("checked")
    }
    console.log(forStyle)
    setRating(choosenRating)
  }



  return (
    <div className="App">
      {isClicked ? (<ThankYou rating={rating}/>) : (
        <>
          <Image />
          <TextDivs />
          <Buttons onClick={handleClick} ratingClick={chooseRating}/>
        </>
        )}
    </div>
  );
}

export default App;
