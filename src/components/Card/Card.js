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
                    // height={image.height}
                    src={`../${image.black}`} // use normal <img> attributes as props
                    // width={image.width}
                />
                {/*<img className="card__img" src={`../${image.black}`} alt={title}/>*/}
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