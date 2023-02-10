import React from 'react';
import {useNavigate} from 'react-router-dom'

const Checkout = () => {

    const navigate = useNavigate()

    return (
        <section className="checkout">
            <div className="container">
                <h2 className="title">Оформление заказа</h2>

                <form onSubmit={() => navigate('/order')} className="checkout__form">
                    <div className="checkout__buyer">
                        <h3 className="title-info">Данные покупателя</h3>
                        <input type="text" className="checkout__input" placeholder="Имя"/>
                        <input type="email" className="checkout__input" placeholder="E-mail"/>
                        <input type="tel" className="checkout__input" placeholder="Телефон"/>
                    </div>
                    <div className="checkout__order">
                        <h3 className="title-info">Ваш заказ</h3>
                        <div className="checkout__order-info">
                            <ul className="checkout__order-list">
                                <li className="checkout__order-item">
                                    Товар
                                </li>
                                <li className="desc">
                                    Футболка USA
                                </li>
                                <li className="desc">
                                    Подытог
                                </li>
                                <li className="desc">
                                    Итого
                                </li>
                            </ul>
                            <ul className="checkout__order-list">
                                <li className="checkout__order-item">
                                    Всего
                                </li>
                                <li className="desc">
                                    $129
                                </li>
                                <li className="desc">
                                    $129
                                </li>
                                <li className="desc">
                                    $129
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="checkout__buyer">
                        <h3 className="title-info">Адрес получателя</h3>
                        <input type="text" className="checkout__input" placeholder="Страна"/>
                        <input type="text" className="checkout__input" placeholder="Город"/>
                        <input type="text" className="checkout__input" placeholder="Улица"/>
                        <input type="text" className="checkout__input" placeholder="Дом"/>
                        <input type="text" className="checkout__input" placeholder="Квартира"/>
                    </div>
                    <div className="checkout__pay">
                        <h3 className="title-info">Способы оплаты</h3>
                        <label className='checkout__label'>
                            <input type="checkbox"/>
                            <p className='desc'>Оплата наличными</p>
                        </label>
                        <button type="submit" className="btn">Разместить заказ</button>
                    </div>
                    <div className="checkout__buyer">
                        <h3 className="title-info">Комментарии</h3>
                        <textarea className="checkout__input checkout__input-area" placeholder='Страна'></textarea>
                    </div>
                </form>


            </div>
        </section>
    );
};

export default Checkout;