import React from 'react';
import {Link} from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Card = ({ id, image, title, price, sale, stock }) => {

    return (
        <div className="card" key={id}>
            <Link to={`/product/${id}`}>
                <LazyLoadImage
                    className="card__img"
                    alt={title}
                    effect="blur"
                    src={`../${image.black}`}
                />
            </Link>
            <h5 className="title-card">{title}</h5>
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