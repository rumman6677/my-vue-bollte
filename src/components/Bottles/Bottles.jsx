import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCard, removeFromLS } from "../../utilities/localstorage";
import Card from "../Card/Card";




const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [card, setCard] = useState([]);
    

    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))

    },[])

    useEffect(() => {
        console.log('called the useEffect', bottles.length)
        if(bottles.length){
            const storedCard = getStoredCard();
            console.log(storedCard, bottles);
            const savedCard = [];

            for(const id of storedCard){
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle){
                    savedCard.push(bottle)
                }
            }

           console.log('saved card', savedCard)
           setCard(savedCard);
        }
    }, [bottles])

    const AddToHandleCard = bottle =>{
        const newCard = [...card, bottle]
        setCard(newCard);
        addToLS(bottle.id);
        
    }

    const handleRemoveCard = id => {

        const remainingCard = card.filter(bottle => bottle.id !== id);
        setCard(remainingCard);
        removeFromLS(id);
    }
  

    return (
        <div>
            <h2>Bottles Available :{bottles.length}</h2>
            <Card card={card} handleRemoveCard={handleRemoveCard}></Card>
            
           <div className="bottle-container">
           {
                bottles.map(bottle => <Bottle key={bottle.id} 
                    AddToHandleCard= {AddToHandleCard}
                    bottle={bottle}></Bottle>)
            }
           </div>
        </div>
    );
};

export default Bottles;


