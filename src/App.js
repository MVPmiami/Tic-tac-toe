import React, { useEffect, useState } from 'react';
import Game from "./Game";
import checkVictory from './CheckVictory';
import VictoryWindow from './VictoryWindow';

export default function App() {
    const [isgame, setIsGame] = useState(false);
    const [TicTac, setTicTac] = useState('Х');
    const [valuesOfBoxes, setValuesOfBoxes] = useState([[],[],[],[],[],[],[],[],[]]);
    const [isWin, setIsWin] = useState(false);
    const [winner, setWinner] = useState(null);
    const [isAI, setIsAI] = useState(false);

        const changeColorButton = () => {
            setIsAI(prev => !prev);
        }

    useEffect(() =>{
        document.querySelector('.add-ai-btn').classList.toggle('ai-enabled');
    },[isAI]);

    const startGame = () => setIsGame(prev => !prev);



    function moveAI () {
        let randomNum;
        let currectNum;
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
          }
        
        do{
            getRandomIntInclusive(0, 9);
            if(randomNum === 0){
                randomNum++;
                currectNum = 0;
            }else if(randomNum === 9){
                currectNum = 8;
            }else{
                currectNum = randomNum - 1;
            }
        }while(document.querySelector(`.box${randomNum}`).innerText === 'Х' || document.querySelector(`.box${randomNum}`).innerText === 'О');

        console.log(randomNum);
        console.log(currectNum);
        document.querySelector(`.box${randomNum}`).innerText = 'О';
        setValuesOfBoxes([...valuesOfBoxes],valuesOfBoxes[currectNum].push('О'));
        console.log(valuesOfBoxes);
    }

    const renderTicTacToe = event => {
        if(isAI){
            if(event.target.innerText === 'Х' || event.target.innerText === "О"){
                return;
            }else if(event.target.innerText === ''){
                let isLastMove = false;
                let count = 0;
                for(let i = 0; i < valuesOfBoxes.length; i++){
                    if(valuesOfBoxes[i].length !== 0){
                        count++;
                    }
                }

                if(count === 8){
                    isLastMove = true;
                }
                event.target.innerText = TicTac;
                let num = Number(event.target.className.slice(7)) - 1;
                setValuesOfBoxes([...valuesOfBoxes],valuesOfBoxes[num].push('Х'));
                checkVictory(valuesOfBoxes,isWin, setIsWin, winner, setWinner);
                if(!isLastMove){
                    moveAI();
                }
                checkVictory(valuesOfBoxes,isWin, setIsWin, winner, setWinner);
            }
        }else{
            if(event.target.innerText === 'Х' || event.target.innerText === "О"){
                return;
            }else if(event.target.innerText === ''){
                event.target.innerText = TicTac;
                let num = Number(event.target.className.slice(7)) - 1;
                TicTac === 'О' ? setTicTac('Х') : setTicTac('О');
                TicTac === 'О' ? setValuesOfBoxes([...valuesOfBoxes],valuesOfBoxes[num].push('О')) 
                : setValuesOfBoxes([...valuesOfBoxes],valuesOfBoxes[num].push('Х'));
                checkVictory(valuesOfBoxes,isWin, setIsWin, winner, setWinner)
            }
        }
    }

    return(
        <div className="main-container" onClick={renderTicTacToe}>
            <button className="new-game-btn" onClick={startGame}>New Game</button>
            <button className="add-ai-btn" onClick={changeColorButton}>Add AI</button>
            <Game isGame={isgame}/>
            <VictoryWindow isWin={isWin} winner={winner} setIsWin = {setIsWin} setWinner={setWinner} isgame={isgame} setIsGame={setIsGame} valuesOfBoxes={valuesOfBoxes} setValuesOfBoxes={setValuesOfBoxes} setIsAI={setIsAI}/>
        </div>
    )
}