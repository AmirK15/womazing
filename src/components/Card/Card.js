import React from 'react';

const Card = ({ id, image, title, price }) => {
    return (
        <div className="card" key={id}>
            <img className="card__img" src={`../${image.black}`} alt={title}/>
            <h5 className="title title-card">{title}</h5>
            <p className="price">${price}</p>
        </div>
    );
};

export default Card;