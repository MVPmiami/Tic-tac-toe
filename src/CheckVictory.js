import React, { useState } from 'react';

export default function checkVictory (valuesOfBoxes, isWin, setIsWin, winner, setWinner) {
    let result = ['','','','','','','','',''];
    
    for(let i = 0 ; i < 9; i++){
        if(valuesOfBoxes[i][0] === 'О' || valuesOfBoxes[i][0] === 'Х'){
            result[i] = valuesOfBoxes[i][0]
        }
    }
    
   if((result[0] === result[1] && result[0] === result[2] && result[1] === result[2] ) && (result[0], result[1], result[2] !== '')){
        setIsWin(isWin = true);
        setWinner(winner = result[0]);
        result = ['','','','','','','','',''];
    }else if((result[3] === result[4] && result[4] === result[5] && result[3] === result[5] ) && (result[3], result[4], result[5] !== '')){
        setIsWin(isWin = true)
        setWinner(winner = result[3]);
        result = ['','','','','','','','',''];
    }else if((result[6] === result[7] && result[6] === result[8] && result[7] === result[8] ) && (result[6], result[7], result[8] !== '')){
        setIsWin(isWin = true)
        setWinner(winner = result[6])
        result = ['','','','','','','','',''];
    }else if((result[0] === result[3] && result[0] === result[6] && result[6] === result[3] ) && (result[0], result[6], result[3] !== '')){
        setIsWin(isWin = true)
        setWinner(winner = result[0])
        result = ['','','','','','','','',''];
    }else if((result[1] === result[4] && result[1] === result[7] && result[4] === result[7] ) && (result[1], result[4], result[7] !== '')){
        setIsWin(isWin = true)
        setWinner(winner = result[1])
        result = ['','','','','','','','',''];
    }else if((result[2] === result[5] && result[2] === result[8] && result[5] === result[8] ) && (result[2], result[5], result[8] !== '')){
        setIsWin(isWin = true)
        setWinner(winner = result[2])
        result = ['','','','','','','','',''];
    }else if((result[0] === result[4] && result[0] === result[8] && result[4] === result[8] ) && (result[0], result[4], result[8] !== '')){
        setIsWin(isWin = true)
        setWinner(winner = result[0])
        result = ['','','','','','','','',''];
    }else if((result[2] === result[4] && result[2] === result[6] && result[6] === result[4] ) && (result[2], result[6], result[4] !== '')){
        setIsWin(isWin = true)
        setWinner(winner = result[2])
        result = ['','','','','','','','',''];
    }else if(result[0] !== '' && result[1] !== '' && result[2] !== '' && result[3] !== '' && result[4] !== '' && result[5] !== '' &&result[6] !== '' && result[7] !== '' && result[8] !== '' ){
        setIsWin(isWin = true)
        setWinner(winner = 'DRAW')
        result = ['','','','','','','','',''];
    }
}