import React, {Suspense, useContext} from "react";
import { Routes, Route } from "react-router-dom"
import './style.scss'
import './i18n'
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Shop from "./pages/Shop/Shop";
import Basket from "./pages/Basket/Basket";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Brands from "./pages/Brands/Brands";
import NotFound from "./pages/NotFound/NotFound";
import Product from "./pages/Product/Product"
import Checkout from "./pages/Checkout/Checkout";
import Order from "./pages/Order/Order";
import Profile from "./pages/Profile/Profile";
import {CustomContext} from "./Context";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import CreateProduct from "./pages/CreateProduct/CreateProduct";

const App = () => {

    const {user} = useContext(CustomContext)

    return (
        <Suspense fallback={'Loading...'}>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    {user.email === 'admin@mail.ru' &&
                        <Route path='*' element={<AdminPanel/>} />
                    }
                    <Route path='' element={<Home/>}/>
                    <Route path='contact' element={<Contact/>}/>
                    <Route path='shop' element={<Shop/>}/>
                    <Route path='basket' element={<Basket/>}/>
                    <Route path='brands' element={<Brands/>}/>
                    <Route path='checkout' element={<Checkout/>}/>
                    <Route path='order' element={<Order/>}/>
                    <Route path='profile' element={<Profile/>}/>
                    <Route path='product/:id' element={<Product/>}/>
                    <Route path='*' element={<NotFound/>}/>
                    {/*{user.email === 'admin@mail.ru' &&*/}
                    {/*    <Route path='/admin' element={<AdminPanel/>} />*/}
                    {/*}*/}
                    {user.email === 'admin@mail.ru' &&
                        <Route path='/create' element={<CreateProduct/>} />
                    }
                </Route>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
        </Suspense>
    );
};

export default App;
