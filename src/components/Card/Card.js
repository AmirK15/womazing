import React from 'react';
import {Link} from "react-router-dom";

const Card = ({ id, image, title, price }) => {
    return (
        <div className="card" key={id}>
            <Link to={`/product/${id}`}>
                <img className="card__img" src={`../${image.black}`} alt={title}/>
            </Link>
            <h5 className="title-card">{title}</h5>
            <p className="price">${price}</p>
        </div>
    );
};

export default Card;