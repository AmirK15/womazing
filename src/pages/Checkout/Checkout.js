import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom'
import {CustomContext} from "../../Context";
import {useForm} from "react-hook-form";
import axios from "axios";

const Checkout = () => {

    const {cart, setCart, ticket, price, user, setUser, shop, getAllClothes} = useContext(CustomContext)
    console.log(cart)
    // cart.map(item => {
    //     return console.log((shop[item.id - 1]).inStock)
    // })
    const {reset, register, handleSubmit} = useForm()

    const navigate = useNavigate()

    const addOrder = async (data) => {
        await axios.post('http://localhost:8080/orders', {
            ...data,
            clothes: cart,
            price: Array.isArray(ticket) && ticket.length
                ? price - price / 100 * ticket[0].sum
                : price,
            userEmail: user.email,
            date: new Date()
        }).then(() => console.log('Success'))
        console.log(data)

        await axios.patch(`http://localhost:8080/users/${user.id}`, {
            orders: [
                ...user.orders,
                {
                    ...data,
                    clothes: cart,
                    price: Array.isArray(ticket) && ticket.length
                        ? price - price / 100 * ticket[0].sum
                        : price,
                    date: new Date()
                }
            ]
        }).then(() => console.log('Success'))

        await axios(`http://localhost:8080/users/${user.id}`)
            .then((res) => setUser(res.data))

        await cart.map(item => {
            axios.patch(`http://localhost:8080/clothes/${item.id}`, {
                inStock: (shop[item.id - 1]).inStock - item.count
            }).then(() => console.log('Success'))
        })

        await Array.isArray(ticket) && ticket.length && ticket[0].count > 1 ?
            axios.patch(`http://localhost:8080/tickets/${ticket[0].id}`, {
                count: ticket[0].count - 1
            }).then(() => console.log('use ticket')) :

            Array.isArray(ticket) && ticket.length && ticket[0].count === 1 ?

                axios.delete(`http://localhost:8080/tickets/${ticket[0].id}`)
                    .then(() => console.log('delete ticket')) :

                console.log('error')

        await reset()
        await getAllClothes()
        await setCart([])
        await navigate('/order')
    }

    return (
        <section className="checkout">
            <div className="container">
                <h2 className="title">Оформление заказа</h2>

                <form onSubmit={handleSubmit(addOrder)} className="checkout__form">
                    <div className="checkout__buyer">
                        <h3 className="title-info">Данные покупателя</h3>
                        <input {...register("name")} type="text" className="checkout__input" placeholder="Имя"/>
                        <input {...register("email")} type="email" className="checkout__input" placeholder="E-mail"/>
                        <input {...register("phone")} type="tel" className="checkout__input" placeholder="Телефон"/>
                    </div>
                    <div className="checkout__order">
                        <h3 className="title-info">Ваш заказ</h3>
                        <div className="checkout__order-info">
                            <ul className="checkout__order-list">
                                <li className="checkout__order-titles">
                                    <p>Товар</p>
                                    <p>Всего</p>
                                </li>
                                {
                                    cart.map((item, idx) => (
                                        <li key={idx} className="checkout__order-item">
                                            <div className="checkout__order-block">
                                                <p className="desc">{item.title}</p>
                                                <p className="desc">{item.count}</p>
                                            </div>
                                            <div className="checkout__order-block">
                                                <p className="desc"
                                                   style={{color: item.color === 'white' || item.color === 'beige' ? 'black' : item.color}}>{item.color}</p>
                                                <p className="desc" style={{textTransform: "uppercase"}}>{item.size}</p>
                                                <p className="desc">${item.count * item.price}</p>
                                            </div>
                                        </li>
                                    ))
                                }
                                <li className="checkout__order-titles">
                                    <p>Подытог</p>
                                    <p>${price}</p>
                                </li>
                                <li className="checkout__order-titles">
                                    <p>Итого</p>
                                    <p>${Array.isArray(ticket) && ticket.length
                                        ? price - price / 100 * ticket[0].sum
                                        : price
                                    }</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="checkout__buyer">
                        <h3 className="title-info">Адрес получателя</h3>
                        <input {...register("county")} type="text" className="checkout__input" placeholder="Страна"/>
                        <input {...register("city")} type="text" className="checkout__input" placeholder="Город"/>
                        <input {...register("street")} type="text" className="checkout__input" placeholder="Улица"/>
                        <input {...register("home")} type="text" className="checkout__input" placeholder="Дом"/>
                        <input {...register("flat")} type="text" className="checkout__input" placeholder="Квартира"/>
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
                        <textarea {...register("message")} className="checkout__input checkout__input-area"
                                  placeholder='Страна'/>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Checkout;