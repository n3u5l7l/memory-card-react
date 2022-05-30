import { useState, useEffect } from "react"

export default function MainContent(){
    const [bestRecord, setBestRecord] = useState(0);
    const [currlevel, setCurrLevel] = useState(1);


    return(
        <div className="mainContent">
            <div className="score-level-container">
                <div className="currLevel">Level {currlevel}</div>
                <div className="scoreKeeper">Best: {bestRecord}</div>
            </div>
            <div className="tip">Click the pokemons!</div>
            
        </div>
    )
}