import { useState, useEffect } from "react"
import Cards from "./Cards";

export default function MainContent(props){
    const [bestRecord, setBestRecord] = useState(localStorage.getItem("bestScore"));
    useEffect(() => {
        if(props.currLevel > Number(localStorage.getItem("bestScore"))){
            localStorage.setItem("bestScore", `${props.currLevel-1}`);
            setBestRecord(props.currLevel-1);
        }
    }, [props.currLevel])
    return(
        <div className="mainContent">
            <div className="score-level-container">
                <div className="currLevel">Level {props.currLevel}</div>
                <div className="scoreKeeper">Best: {bestRecord}</div>
            </div>
            <div className="tip">Click the pokemons!</div>
            <Cards currLevelHandler = {props.currLevelHandler} handleGameOver = {props.gameOver} loadHandler = {props.loadHandler} cardInfos = {props.cardInfos} totalCards = {props.currLevel + 4}/>
        </div>
    )
}