import React from 'react';

const ShopShow = ({shop, page, status}) => {
    return (
        <p className="shop__show">
            Показано:
            {
                shop.filter(el => status === 'all' ? el : el.category === status)
                    .filter((item, idx) => idx + 1 <= page * 9 && idx >= page * 9 - 9).length
            }
            из
            {shop.filter(el => status === 'all' ? el : el.category === status).length}
        </p>
    );
};

export default ShopShow;