import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import {CustomContext} from "../../Context";
import BasketCard from "./BasketCard";

const Basket = () => {

    const {cart, setCart} = useContext(CustomContext)

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
                        <BasketCard key={idx} item={item}/>
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