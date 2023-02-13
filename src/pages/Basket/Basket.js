import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import {CustomContext} from "../../Context";
import BasketCard from "./BasketCard";
import axios from "axios";

const Basket = () => {

    const {cart, setCart, ticket, setTicket, price} = useContext(CustomContext)

    const useTicket = (e) => {
        e.preventDefault()
        axios(`http://localhost:8080/tickets?title=${e.target[0].value}`)
            .then(({data}) => {
                data.length ? setTicket(data) : setTicket(null)
            })
    }

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
                    <form onSubmit={useTicket} className="basket__discount">
                        <input className="basket__discount-input" type="text" placeholder='Введите купон'/>
                        <button type='submit' className="btn btn-bg">
                            Применить купон
                        </button>
                        <p className="desc">
                            {Array.isArray(ticket) && ticket.length
                                ? `По данному промокоду вы получаете скидку в размере ${ticket[0].sum} %`
                                : ticket === null ? 'По данному промокоду скидок нет' : ''
                            }
                        </p>
                    </form>
                    <button onClick={() => setCart([])} className="btn btn-bg">
                        Обновить корзину
                    </button>
                </div>
                <div className="basket__total">
                    <p className="basket__total-subtotal">
                        Подытог: $
                        {price}
                    </p>
                    <div className="basket__total-info">
                        <div className="basket__total-price">
                            <p>Итого:</p>
                            <span>${Array.isArray(ticket) && ticket.length
                                ? price - price / 100 * ticket[0].sum
                                : price
                            }</span>
                        </div>
                        <Link to='/checkout'>
                            <button className="btn">Оформить заказ</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Basket;