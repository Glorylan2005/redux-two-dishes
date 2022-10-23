import { useDispatch } from 'react-redux';
import dataDishes from '../../Data/dataDishes.js'
import { removeItemFromCart } from '../../redux/cartSlice.js';

const CartItem = ({cartItem}) => {
    const dishes = dataDishes.find (item => item.id === cartItem.dishId)
    const dispatch = useDispatch();

    return (<div>
        <p>{dishes.name}</p>
        <p>{cartItem.quantity} portion(s)</p>
        <p>Price: ${dishes.price*cartItem.quantity}</p>
        <span onClick = {() => dispatch(removeItemFromCart({cartItemID: cartItem.id}))}>
        <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt='icon'/> 
        </span>
    </div>)
}

export default CartItem;