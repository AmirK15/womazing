import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom'
import {CustomContext} from "../../Context";
import {Pagination} from 'antd';
import Card from "../../components/Card/Card";
import ShopShow from "./ShopShow";


const Shop = () => {

    const [status, setStatus] = useState('all')
    const [page, setPage] = useState(1)

    const {shop, user} = useContext(CustomContext)

    return (
        <main>
            <section className="shop">
                <div className="container">
                    <h2 className="title">Магазин</h2>

                    <ul className="shop__list">
                        <li onClick={() => {
                            setStatus('all')
                            setPage(1)
                        }}
                            className={`shop__item desc ${status === 'all' && 'shop__item-active'}`}>Все
                        </li>
                        <li onClick={() => {
                            setStatus('sportsuit')
                            setPage(1)
                        }}
                            className={`shop__item desc ${status === 'sportsuit' && 'shop__item-active'}`}>Спорт
                        </li>
                        <li onClick={() => {
                            setStatus('sweatshirt')
                            setPage(1)
                        }}
                            className={`shop__item desc ${status === 'sweatshirt' && 'shop__item-active'}`}>Свитшоты
                        </li>
                        <li onClick={() => {
                            setStatus('tshort')
                            setPage(1)
                        }}
                            className={`shop__item desc ${status === 'tshort' && 'shop__item-active'}`}>Футболки
                        </li>
                        <li onClick={() => {
                            setStatus('hoody')
                            setPage(1)
                        }}
                            className={`shop__item desc ${status === 'hoody' && 'shop__item-active'}`}>Толстовки
                        </li>
                    </ul>
                    {
                        user.email === 'admin@mail.ru' &&
                        <div>
                            <Link to="/create">
                                <button className="btn">Добавить</button>
                            </Link>
                        </div>
                    }
                    <ShopShow shop={shop} page={page} status={status}/>

                    <div className="shop__row">
                        {shop.filter(el => {
                            if (status === 'all') {
                                return el
                            } else {
                                return el.category === status
                            }
                        }).filter((item, idx) => {
                            return idx + 1 <= page * 9 && idx >= page * 9 - 9
                        }).map(item => (
                            <Card key={item.id} id={item.id} image={item.image} title={item.title} price={item.price} sale={item.priceSale} stock={item.inStock}/>
                        ))}
                    </div>

                    <ShopShow shop={shop} page={page} status={status}/>

                    {shop.filter(el => status === 'all' ? el : el.category === status).length > 9
                        ? <Pagination
                            onChange={setPage}
                            simple
                            current={page}
                            total={shop.filter(el => {
                                if (status === 'all') {
                                    return el
                                } else {
                                    return el.category === status
                                }
                            }).length}/> : ''}
                </div>
            </section>
        </main>
    );
};

export default Shop;