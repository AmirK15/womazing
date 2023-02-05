import React, {useEffect, useState, useContext} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {CustomContext} from "../../Context";
import Card from "../../components/Card/Card";

const Product = () => {

    const params = useParams()
    const [product, setProduct] = useState({})
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')
    const {shop} = useContext(CustomContext)

    useEffect(() => {
        axios(`http://localhost:8080/clothes/${params.id}`)
            .then(({ data }) => {
                setProduct(data)
                setColor(data.colors[0])
                setSize(data.size[0])
                window.scrollTo(0, 0)
            })
    }, [params])

    return (
        <section className="product">
            <div className="container">
                {product.title && <>
                    <h2 className="title">{product.title}</h2>
                    <p className="desc">Главная — Свитшоты — Свитшот Sweet Shot</p>
                    <div className="product__content">
                        <img className="product__content-img" src={`../${product.image.black}`} alt={product.title}/>
                        <div className="product__info">
                            <p className="product__content-price">${product.price}</p>
                            <p className="product__content-choose-text">Выберите размер</p>
                            <ul className="product__content-choose">
                                {
                                    product.size.map((item, idx) => (
                                        <li key={idx} onClick={() => setSize(item)}
                                            className={`product__content-size ${item === size && 'product__content-size_active'}`}>
                                            {item}
                                        </li>
                                    ))
                                }
                            </ul>
                            <p className="product__content-choose-text">Выберите цвет</p>
                            <ul className="product__content-choose">
                                {
                                    product.colors.map((item, idx) => (
                                        <li key={idx} onClick={() => setColor(item)}
                                            style={{background: item}}
                                            className={`product__content-color ${item === color && 'product__content-color_active'}`}
                                        />
                                    ))
                                }
                            </ul>
                            <div className='product__content-form'>
                                <input className='product__content-input' min='1' defaultValue='1' type="number"/>
                                <button type='button' className='btn'>Добавить в корзину</button>
                            </div>
                        </div>

                    </div>

                    <h3 className="title-section">
                        Связанные товары
                    </h3>

                    <div className="product__row">
                        {
                            shop.filter(el => el.category === product.category && el.id !== product.id)
                                .slice(0, 3)
                                .map(item => (
                                    <Card key={item.id} id={item.id} image={item.image} title={item.title} price={item.price}/>
                                ))
                        }
                    </div>
                </>}
            </div>
        </section>
    );
};

export default Product;