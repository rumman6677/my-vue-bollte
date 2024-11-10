import PropTypes from 'prop-types';

import './Card.css'
const Card = ({card, handleRemoveCard}) => {
    return (
        <div>
            <h4>Card: {card.length}</h4>
            {
                <div className="card-Container">
                    {/* {card.map(bottle => <img  src={bottle.img} alt=""/>)} */}
                    {card.map(bottle => <div key={bottle.id} >
                        <img  src={bottle.img} alt=""/>
                        <button onClick={() => handleRemoveCard(bottle.id)}>Remove</button>
                    </div> )} 
                </div>
            }
        </div>
    );
};

Card.propTypes = {
    card :PropTypes.array.isRequired,
    handleRemoveCard : PropTypes.func.isRequired
}



export default Card;