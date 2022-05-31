import { useState, useEffect } from "react"
import Cards from "./Cards";

export default function MainContent(props){
    const [bestRecord, setBestRecord] = useState(0);

    return(
        <div className="mainContent">
            <div className="score-level-container">
                <div className="currLevel">Level {props.currLevel}</div>
                <div className="scoreKeeper">Best: {bestRecord}</div>
            </div>
            <div className="tip">Click the pokemons!</div>
            <Cards loadHandler = {props.loadHandler} cardInfos = {props.cardInfos} currLevel = {props.currLevel + 4}/>
        </div>
    )
}