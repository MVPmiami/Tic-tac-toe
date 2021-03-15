import React from 'react';

export default function VictoryWindow (props){
    let isWin = props.isWin;
    let winner = props.winner;
    let isgame = props.isgame;
    let valuesOfBoxes = props.valuesOfBoxes;
    let isAi = props.isAI;

    function goToMenu() {
        props.setIsGame(isgame = false);
        props.setIsWin(isWin = false);
        props.setWinner(winner = null);
        props.setValuesOfBoxes(valuesOfBoxes = [[],[],[],[],[],[],[],[],[]]);
        props.setIsAI(isAi = false);
        props.setTicTac('Х');
    }


    if(!isWin) return null;

    return(
        <div className="victory-window">
            <h1>WIN: {winner}</h1>
            <button className="go-to-menu-btn" onClick={goToMenu}>Back to menu</button>
        </div>
    )
}