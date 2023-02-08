import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import {CustomContext} from "../../Context";

const Basket = () => {

    const {cart, deleteCart, setCart} = useContext(CustomContext)

    return (
        <section className='basket'>
            <div className="container">
                <h2 className="title">Корзина</h2>
                <ul className='basket__list basket__list-top'>
                    <li className='basket__item'>Товар</li>
                    <li className='basket__item'>Размер</li>
                    <li className='basket__item'>Цвет</li>
                    <li className='basket__item'>Цена</li>
                    <li className='basket__item'>Количество</li>
                    <li className='basket__item'>Всего</li>
                </ul>
                <hr/>
                {
                    cart.map((item, idx) => (
                        <ul key={idx} className="basket__list">
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
                                <input min='1' defaultValue={item.count} type="number"/>
                            </li>
                            <li className="basket__item">
                                <p className='desc'>${item.price * item.count}</p>
                            </li>
                        </ul>
                    ))
                }
                <div className="basket__bottom">
                    <div className="basket__discount">
                        <input className="basket__discount-input" type="text" placeholder='Введите купон'/>
                        <button className="btn btn-bg">
                            Применить купон
                        </button>
                    </div>
                    <button onClick={() => setCart([])} className="btn btn-bg">
                        Обновить корзину
                    </button>
                </div>
                <div className="basket__total">
                    <p className="basket__total-subtotal">
                        Подытог: $
                        {cart.reduce((acc, rec) => acc + rec.count * rec.price, 0)}
                    </p>
                    <div className="basket__total-info">
                        <div className="basket__total-price">
                            <p>Итого:</p>
                            <span>${cart.reduce((acc, rec) => acc + rec.count * rec.price, 0)}</span>
                        </div>
                        <button className="btn">Оформить заказ</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Basket;