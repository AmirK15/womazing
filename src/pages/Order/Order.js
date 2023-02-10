import React from 'react';
import { Link } from 'react-router-dom'
import Done from '../../assets/order/done.svg'

const Order = () => {
    return (
        <section className='order'>
            <div className="container">
                <h2 className="title">Заказ получен</h2>
                <div className="order__content">
                    <div className="order__framed">
                        <img src={Done} alt="Done"/>
                        <div className="order__framed-text">
                            <h5 className="title-info">Заказ успешно оформлен</h5>
                            <p className="desc">Мы свяжемся с вами в ближайшее время!</p>
                        </div>
                    </div>
                    <Link to='/'>
                        <button className="btn btn-bg">Перейти на главную</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Order;