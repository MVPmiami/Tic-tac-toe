import React from 'react';

export default function Game(props) {
    const isGame = props.isGame;

    if(!isGame) return null;

    return(
        <div className="game-desktop">
            <div className="box box1"></div>
            <div className="box box2"></div>
            <div className="box box3"></div>
            <div className="box box4"></div>
            <div className="box box5"></div>
            <div className="box box6"></div>
            <div className="box box7"></div>
            <div className="box box8"></div>
            <div className="box box9"></div>
        </div>
    )
}