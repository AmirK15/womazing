import React, {useContext} from 'react';
import {CustomContext} from "../../Context";
import Arrivals from "./Arrivals/Arrivals";

const Home = () => {

    const {count, setCount} = useContext(CustomContext)

    console.log(count)

    return (
        <main>
            <Arrivals/>
        </main>
    );
};

export default Home;