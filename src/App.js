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

    const startGame = () => setIsGame(prev => !prev);

    const renderTicTacToe = event => {
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

    return(
        <div className="main-container" onClick={renderTicTacToe}>
            <button className="new-game-btn" onClick={startGame}>New Game</button>
            <Game isGame={isgame}/>
            <VictoryWindow isWin={isWin} winner={winner} setIsWin = {setIsWin} setWinner={setWinner} isgame={isgame} setIsGame={setIsGame} valuesOfBoxes={valuesOfBoxes} setValuesOfBoxes={setValuesOfBoxes} />
        </div>
    )
}