import React, {useContext} from 'react';
import {CustomContext} from "../../Context";
import Arrivals from "./Arrivals/Arrivals";
import Important from "./Important/Important";
import Collection from "./Collection/Collection";

const Home = () => {

    const {count, setCount} = useContext(CustomContext)

    console.log(count)

    return (
        <main className="home">
            <Arrivals/>
            <Collection/>
            <Important/>
        </main>
    );
};

export default Home;