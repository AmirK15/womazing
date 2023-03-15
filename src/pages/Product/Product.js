import React, {useEffect, useState, useContext} from 'react';
import {useLocation, useParams} from "react-router-dom";
import axios from "axios";
import {CustomContext} from "../../Context";
import Card from "../../components/Card/Card";

const Product = () => {

    const location = useLocation()

    const params = useParams()
    const [color, setColor] = useState('')
    const [sale, setSale] = useState(false)
    const [saleCount, setSaleCount] = useState(0)
    const [size, setSize] = useState('')
    const [count, setCount] = useState(1)
    const {shop, addCart, product, setProduct, getAllClothes} = useContext(CustomContext)

    useEffect(() => {
        axios(`http://localhost:8080/clothes/${params.id}`)
            .then(({ data }) => {
                setProduct(data)
                setColor(data.colors[0])
                setSize(data.size[0])
                // window.scrollTo(0, 0)
            })
    }, [location, shop])

    return (
        <section className="product">
            <div className="container">
                {product.title && <>
                    <h2 className="title">{product.title}</h2>
                    <p className="desc">Главная — Свитшоты — Свитшот Sweet Shot</p>
                    <div className="product__content">
                        <img className="product__content-img" src={`../${product.image.black}`} alt={product.title}/>
                        <div className="product__info">
                            {
                                !product.priceSale &&
                                <div>
                                    {sale && <input type="number" value={saleCount} onChange={(e) => setSaleCount(e.target.value)}/>}
                                    <button type='button' onClick={() => {
                                        if (sale) {
                                            axios.patch(`http://localhost:8080/clothes/${product.id}`, {priceSale: product.price - product.price / 100 * saleCount})
                                                .then(() => {
                                                    getAllClothes()
                                                    setSaleCount(0)
                                                })
                                        }
                                        setSale(!sale)
                                        setSaleCount(0)
                                    }} className="btn">Добавить {!sale && 'скидку'}</button>
                                </div>
                            }
                            {
                                product.priceSale ?
                                    <div className="product__content-price">
                                        <span>${product.priceSale}</span>
                                        <span className="product__content-price-line">${product.price}</span>
                                    </div> :
                                    <p className="product__content-price">${product.price}</p>
                            }
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
                            {
                                product.inStock ? <p className="product__content-choose-text">В наличии: <span>{product.inStock}</span></p> : <p className="product__content-choose-text">Нет в наличии</p>
                            }
                            <div className='product__content-form'>
                                <input
                                    onChange={(e) => setCount(e.target.value >= product.inStock ? product.inStock : e.target.value)}
                                    value={count}
                                    className='product__content-input'
                                    disabled={!product.inStock}
                                    min='1'
                                    max={product.inStock}
                                    type="number"
                                />
                                <button onClick={() => addCart({
                                    id: product.id,
                                    title: product.title,
                                    image: product.image,
                                    color,
                                    size,
                                    count,
                                    price: product.priceSale || product.price,
                                    category: product.category
                                })} type='button' className='btn' disabled={!product.inStock}>Добавить в корзину</button>
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