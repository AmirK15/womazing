import React, {useState, useContext} from 'react';
import { CustomContext } from "../../Context";
// import 'antd/dist/antd.css';
import { Pagination } from 'antd';

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
                    <li onClick={() => setStatus('all')} className={`shop__item desc ${status === 'all' && 'shop__item-active'}`}>Все</li>
                    <li onClick={() => setStatus('coat')} className={`shop__item desc ${status === 'coat' && 'shop__item-active'}`}>Пальто</li>
                    <li onClick={() => setStatus('sweatshirt')} className={`shop__item desc ${status === 'sweat' && 'shop__item-active'}`}>Свитшоты</li>
                    <li onClick={() => setStatus('cardigan')} className={`shop__item desc ${status === 'cardigan' && 'shop__item-active'}`}>Кардиганы</li>
                    <li onClick={() => setStatus('hoody')} className={`shop__item desc ${status === 'hoody' && 'shop__item-active'}`}>Толстовки</li>
                </ul>

                <div className="shop__row">
                    {shop.filter(el => {
                        if (status === 'all'){
                            return el
                        } else {
                            return el.category === status
                        }
                    }).map(item => (
                        <div className="shop__card" key={item.id}>
                            <img className="shop__card-img" src={`../${item.image.black}`} alt={item.title}/>
                            <h5 className="title title-card">{item.title}</h5>
                            <p className="price">${item.price}</p>
                        </div>
                    ))}
                </div>

                <Pagination onChange={setPage} simple current={page} total={shop.length}/>
            </div>
        </section>
    );
};

export default Shop;