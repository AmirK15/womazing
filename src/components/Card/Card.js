import React from 'react';
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import arrow from '../../assets/arrow.svg'

const Card = ({id, image, title, price, sale, stock}) => {

    return (
        <div className="card" key={id}>
            <Link to={`/product/${id}`} className="card__image">
                <LazyLoadImage
                    className="card__img"
                    alt={title}
                    effect="blur"
                    src={`../${image.black}`}
                />
                <div className="card__hide">
                    <img src={arrow} alt="Arrow"/>
                </div>
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