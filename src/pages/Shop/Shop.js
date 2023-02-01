import React, {useState, useContext} from 'react';
import {CustomContext} from "../../Context";
// import 'antd/dist/antd.css';
import {Pagination} from 'antd';
import Card from "../../components/Card/Card";

const Shop = () => {

    const [status, setStatus] = useState('all')
    const [page, setPage] = useState(1)

    const {shop} = useContext(CustomContext)

    return (
        <section className="shop">
            <div className="container">
                <h2 className="title">
                    Магазин
                </h2>

                <ul className="shop__list">
                    <li onClick={() => setStatus('all')}
                        className={`shop__item desc ${status === 'all' && 'shop__item-active'}`}>Все
                    </li>
                    <li onClick={() => setStatus('coat')}
                        className={`shop__item desc ${status === 'coat' && 'shop__item-active'}`}>Пальто
                    </li>
                    <li onClick={() => setStatus('sweatshirt')}
                        className={`shop__item desc ${status === 'sweat' && 'shop__item-active'}`}>Свитшоты
                    </li>
                    <li onClick={() => setStatus('cardigan')}
                        className={`shop__item desc ${status === 'cardigan' && 'shop__item-active'}`}>Кардиганы
                    </li>
                    <li onClick={() => setStatus('hoody')}
                        className={`shop__item desc ${status === 'hoody' && 'shop__item-active'}`}>Толстовки
                    </li>
                </ul>

                <p>
                    Показано:
                    {
                        shop.filter(el => status === 'all' ? el : el.category === status)
                            .filter((item, idx) => idx + 1 <= page * 9 && idx >= page * 9 - 9).length
                    }
                    из
                    {shop.filter(el => status === 'all' ? el : el.category === status).length}
                </p>

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
                        <Card key={item.id} image={item.image} title={item.title} price={item.price}/>
                    ))}
                </div>
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
    );
};

export default Shop;