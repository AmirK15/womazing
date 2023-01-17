import React, {useContext} from 'react';
import {CustomContext} from "../../Context";
import {useTranslation} from "react-i18next";

const Home = () => {

    const {t} = useTranslation()

    const {count, setCount} = useContext(CustomContext)

    console.log(count)

    return (
        <div>
            <h1 dangerouslySetInnerHTML={{__html: t("home.firstScreen.title")}}/>
        </div>
    );
};

export default Home;