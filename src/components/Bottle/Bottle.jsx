import './Bottle.css';
import PropTypes from 'prop-types';

const Bottle = ({bottle, AddToHandleCard }) => {
    const {name, price, img} = bottle;
   
    return (
        <div className='bottle'>
            <h3>Name: {name}</h3>
            <p>Price: &{price}</p>
            <img src={img} alt="" /> <br />
            <button onClick={() => AddToHandleCard(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle : PropTypes.object.isRequired,
    AddToHandleCard : PropTypes.func.isRequired
}

export default Bottle;