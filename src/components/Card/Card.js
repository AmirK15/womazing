import React from 'react';
import {Link} from "react-router-dom";

const Card = ({ id, image, title, price, sale, stock }) => {

    return (
        <div className="card" key={id}>
            <Link to={`/product/${id}`}>
                <img className="card__img" src={`../${image.black}`} alt={title}/>
            </Link>
            <h5 className="title-card">{title}</h5>
            {/*{sale ? <p className="price">*/}
            {/*    <span className="price-sale">${price}</span> <span>${sale}</span>*/}
            {/*</p> : <p className="price">${price}</p>}*/}
            <p className="price">$
                {sale ? <>
                    <span className='price-line'>{price}</span>
                    <span> ${sale}</span>
                </>
                : price}
            </p>
            {
                stock ? <p>В наличии: <span>{stock}</span></p> : <p>Нет в наличии</p>
            }
        </div>
    );
};

export default Card;