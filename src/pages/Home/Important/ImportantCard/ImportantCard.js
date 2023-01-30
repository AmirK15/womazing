import React from 'react';

const ImportantCard = ({image, title, text}) => {
    return (
        <div className="important__card">
            <img className="important__card-image"
                src={image}
                alt={title}/>
            <h4 className="title title-info">
                {title}
            </h4>
            <p className="desc">
                {text}
            </p>
        </div>
    );
};

export default ImportantCard;