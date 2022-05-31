import { useEffect, useLayoutEffect, useState } from "react";
import Header from "./components/Header";
import Line from "./components/Line";
import MainContent from "./components/MainContent";
import {ReactComponent as PokeBall} from "./assets/pokeball.svg";

function App() {
  const [needsFetch, setNeedsFetch] = useState(true);
  const [currLevel, setcurrLevel] = useState(1);
  const [cardInfoArr, setCardInfoArr] = useState([]);

  useEffect(() => {
    if(!needsFetch){return;}
    const cardsArray = [...Array(currLevel+4)];
    async function getPoke(){
      const allPokemon = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
      const allPokemonResult = await allPokemon.json();
  
      let randomNum = Math.ceil(Math.random() * 1000);  

      const randomPoke = await fetch(`${allPokemonResult.results[randomNum].url}`, {mode: "cors"});
      const randomPokeResult = await randomPoke.json();
      
      const POKE_PICTURE_URL = randomPokeResult.sprites.front_default;
      const POKE_NAME = randomPokeResult.species.name;

      (new Image()).src = POKE_PICTURE_URL; //pre-loading images

      return [POKE_PICTURE_URL, POKE_NAME];
    }

    Promise.all(cardsArray.map(async () =>  [...await getPoke()])).then((result)=>{
      setCardInfoArr(result);
      setTimeout(() => { //to ensure images are pre-loaded before starting to load in images
        setNeedsFetch(false);
      }, 1000)
    });

  }, [needsFetch, currLevel]) 

  const content = needsFetch? (
    <div className="loadingScreen">
      <PokeBall className="loadingBall" />
      <div className="loadingWord">Loading...</div>
    </div>
    
  ) : <>
    <Header />
    <Line />
    <MainContent currLevel = {currLevel} cardInfos = {cardInfoArr} loadHandler = {setNeedsFetch}/>
  </>;


  return content;
}

export default App;
