import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {CustomContext} from "../../Context";

const BasketCard = ({item}) => {

    const [count, setCount] = useState(item.count)

    const {deleteCart, updateCart, product} = useContext(CustomContext)

    return (
        <ul className="basket__list">
            <li className="basket__item">
                <span onClick={() => deleteCart(item.id, item.color, item.size)}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L13 13M13 1L1 13" stroke="black"/>
                    </svg>
                </span>
                <Link to={`/product/${item.id}`}>
                    <img className='basket__item-img' src={item.image.black} alt={item.title}/>
                </Link>
                <p className='desc'>{item.title}</p>
            </li>
            <li className="basket__item">
                <p className='desc' style={{textTransform: "uppercase"}}>{item.size}</p>
            </li>
            <li className="basket__item">
                <p className='desc' style={{color: item.color === 'white' || item.color === 'beige' ? 'black' : item.color}}>{item.color}</p>
            </li>
            <li className="basket__item">
                <p className='desc'>${item.price}</p>
            </li>
            <li className="basket__item">
                <input onChange={(e) => {
                    setCount(e.target.value >= product.inStock ? product.inStock : e.target.value)
                    updateCart(item.id, item.color, item.size, e.target.value)
                }} min='1' value={count} type="number" max={product.inStock} />
            </li>
            <li className="basket__item">
                <p className='desc'>${item.price * item.count}</p>
            </li>
        </ul>
    );
};

export default BasketCard;