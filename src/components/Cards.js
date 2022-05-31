import { useState, useEffect, useLayoutEffect } from "react";

export default function Cards(props){
    
    //useEffect(()=>{

  //  }, [props.currLevel]);

    function randomizeCards(){

    }
    
    const content = (<div className="cards">
    {props.cardInfos.map((card, index) => (
    <div className="card-container" key={index}>
        <img src={card[0]} alt={card[1]}></img>
        <div className="pokeName">{card[1]}</div>
    </div>))}
</div>)

    return content;
}