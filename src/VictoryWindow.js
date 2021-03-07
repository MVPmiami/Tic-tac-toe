import React from 'react';

export default function VictoryWindow (props){
    let isWin = props.isWin;
    let winner = props.winner;
    let isgame = props.isgame;
    let valuesOfBoxes = props.valuesOfBoxes;
    console.log(winner)

    function goToMenu() {
        props.setIsGame(isgame = false);
        props.setIsWin(isWin = false);
        props.setWinner(winner = null);
        props.setValuesOfBoxes(valuesOfBoxes = [[],[],[],[],[],[],[],[],[]])
    }


    if(!isWin) return null;

    return(
        <div className="victory-window">
            <h1>WIN: {winner}</h1>
            <button className="go-to-menu-btn" onClick={goToMenu}>Back to menu</button>
        </div>
    )
}