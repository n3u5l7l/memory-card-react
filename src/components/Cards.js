import { useState, useEffect, useLayoutEffect } from "react";

export default function Cards(props){
    const [cardClick, setCardClick] = useState(0);
    const [pokemonCheck, setPokemonCheck] = useState({});
    const [currPoke, setCurrPoke] = useState();

    useEffect(() => {
        if(cardClick === props.totalCards){
            props.currLevelHandler((prevLevel) => prevLevel + 1);
            return;
        }
        randomizeCards();
    }, [cardClick])

    const handleCardClick = (e, pokeName) => {
        if(pokemonCheck[pokeName]){
            props.handleGameOver(true);
            return;
        }
        setCardClick((prevClick) => prevClick+1);
        setPokemonCheck((prevState) => {
            return {...prevState, [pokeName]: true};
        });
    }

    function randomizeCards(){
        for(let i  = 0; i < props.cardInfos.length; i++){
            let randomSwap = Number(Math.ceil(Math.random() * 100) % props.cardInfos.length);
            let temp = props.cardInfos[i];
            props.cardInfos[i] = props.cardInfos[randomSwap];
            props.cardInfos[randomSwap] = temp;
        } 
    }
    
    const content = (<div className="cards">
    {props.cardInfos.map((card, index) => (
    <div className="card-container" key={card[1]} onClick={(e) => handleCardClick(e, card[1])}>
        <img src={card[0]} alt={card[1]}></img>
        <div className="pokeName">{card[1]}</div>
    </div>))}
</div>)

    return content;
}