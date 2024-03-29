import React from 'react';

const CreateColors = ({colors, setColors, color}) => {
    return (
        <li onClick={() => {
            if (colors.includes(color)){
                setColors(colors.filter((item) => item !== color))
            } else{
                setColors([...colors, color])
            }
        }}
            style={{background: color, border: "1px solid grey"}}
            className={`product__content-color ${colors.includes(color) && 'create__color'}`}
        />
    );
};

export default CreateColors;