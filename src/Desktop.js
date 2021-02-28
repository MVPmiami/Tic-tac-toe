import React, {useState} from 'react';

function Desktop() {
  let [isToe, setIsToe] = useState(true);
  let [allSteps, setAllSteps] = useState([[],[],[],[],[],[],[],[],[]]);
  let [numberBox, setNumberBox] = useState(null);

  function renderTicTacOrToe (elem){
    if(isToe) {
      elem.textContent = 'O';
      elem.classList.add('toe');
      setIsToe(isToe = false)
    }else{
      elem.textContent = 'X';
      elem.classList.add("tic-tac");
      setIsToe(isToe = true)
    }
  }

  function saveSteps(elem) {
    setNumberBox(numberBox = Number(elem.classList[0].slice(4)));
    setAllSteps(prev => {
      return [...prev,allSteps[numberBox - 1] = elem.textContent]
    });
  }

  function checkVictory(){
    if(allSteps[0] === allSteps[1] && allSteps[0] === allSteps[2]){
      alert(`win ${allSteps[0]}`);
      console.log("1" + allSteps);
    }else if(allSteps[3] === allSteps[4] && allSteps[3] === allSteps[5]){
      alert(`win ${allSteps[3]}`);
      console.log("2" + allSteps);
    }else if(allSteps[6] === allSteps[7] && allSteps[6] === allSteps[8]){
      alert(`win ${allSteps[6]}`);
      console.log("3" + allSteps);
    }else if(allSteps[0] === allSteps[4] && allSteps[0] === allSteps[8]){
      alert(`win ${allSteps[0]}`);
      console.log("4" + allSteps);
    }else if(allSteps[2] === allSteps[4] && allSteps[2] === allSteps[6]){
      alert(`win ${allSteps[2]}`);
      console.log("5" + allSteps);
    }else if(allSteps[0] === allSteps[3] && allSteps[0] === allSteps[6]){
      alert(`win ${allSteps[0]}`);
      console.log("6" + allSteps);
    }else if(allSteps[1] === allSteps[4] && allSteps[1] === allSteps[7]){
      alert(`win ${allSteps[1]}`);
      console.log("7" + allSteps);
    }else if(allSteps[2] === allSteps[5] && allSteps[2] === allSteps[8]){
      alert(`win ${allSteps[2]}`);
      console.log("8" + allSteps);
    }
  }

  checkVictory();

  return(
    <div className="wrapper-desktop">
      <div className="box-1 box" onClick={e => {renderTicTacOrToe(e.target); saveSteps(e.target);}}></div>
      <div className="box-2 box" onClick={e => {renderTicTacOrToe(e.target); saveSteps(e.target);}}></div>
      <div className="box-3 box" onClick={e => {renderTicTacOrToe(e.target); saveSteps(e.target);}}></div>
      <div className="box-4 box" onClick={e => {renderTicTacOrToe(e.target); saveSteps(e.target);}}></div>
      <div className="box-5 box" onClick={e => {renderTicTacOrToe(e.target); saveSteps(e.target);}}></div>
      <div className="box-6 box" onClick={e => {renderTicTacOrToe(e.target); saveSteps(e.target);}}></div>
      <div className="box-7 box" onClick={e => {renderTicTacOrToe(e.target); saveSteps(e.target);}}></div>
      <div className="box-8 box" onClick={e => {renderTicTacOrToe(e.target); saveSteps(e.target);}}></div>
      <div className="box-9 box" onClick={e => {renderTicTacOrToe(e.target); saveSteps(e.target);}}></div>
    </div>
  )
}

export default Desktop;
