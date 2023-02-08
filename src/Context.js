import React, {createContext, useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const CustomContext = createContext()

export const Context = (props) => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        login: ''
    })

    const [cart, setCart] = useState([])

    const addCart = (product) => {

        let idx = cart.findIndex((item) => item.id === product.id && item.color === product.color && item.size === product.size)

        if (idx >= 0){
            setCart(cart.map(item => {
                if (item.id === product.id && item.color === product.color && item.size === product.size){
                    return {...item, count: +item.count + +product.count}
                } else {
                    return item
                }
            }))
        } else{
            setCart([...cart, product])
        }
    }

    const deleteCart = (id, color, size) => {
        setCart(cart.filter((item) => {
            return item.id !== id && item.color !== color && item.size !== size
        }))
    }

    const [shop, setShop] = useState([])

    useEffect(() => {
        // if (localStorage.getItem('user') !== 'null') {
        //     setUser(JSON.parse(localStorage.getItem('user')))
        // }

        axios('http://localhost:8080/clothes')
            .then(({data}) => setShop(data))
    }, [])

    const registerUser = (data) => {
        axios.post('http://localhost:8080/register', {...data, orders: []})
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data.user))
                setUser(res.data.user)
                navigate('/')
            })
    }

    const loginUser = (data) => {
        axios.post('http://localhost:8080/login', data)
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data.user))
                setUser(res.data.user)
                navigate('/')
            })
    }

    const logOutUser = () => {
        localStorage.removeItem('user')
        setUser({
            login: ''
        })
    }

    const value = {
        user,
        setUser,
        registerUser,
        logOutUser,
        loginUser,
        addCart,
        deleteCart,
        shop,
        cart,
        setCart
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}