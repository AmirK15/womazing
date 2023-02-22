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

    const updateCart = (id, color, size, count) => {
        setCart(cart.map((item) => {
            if (item.id === id && item.color === color && item.size === size){
                return {...item, count: count}
            } else{
                return item
            }
        }))
    }

    const deleteCart = (id, color, size) => {
        setCart(cart.filter((item) => {
            return item.id !== id || item.color !== color || item.size !== size
        }))
    }

    const [ticket, setTicket] = useState([])
    let price = cart.reduce((acc, rec) => acc + rec.count * rec.price, 0)


    const [shop, setShop] = useState([])

    const getAllClothes = () => {
        axios('http://localhost:8080/clothes')
            .then(({data}) => setShop(data))
    }

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

    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }

        if (localStorage.getItem('cart') !== null){
            setCart(JSON.parse(localStorage.getItem('cart')))
        }

        getAllClothes()
    }, [])

    // useEffect(() => {
    //     axios('http://localhost:8080/clothes')
    //         .then(({data}) => setShop(data))
    // }, [shop])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user.orders])

    const logOutUser = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('cart')
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
        updateCart,
        getAllClothes,
        shop,
        cart,
        setCart,
        ticket,
        setTicket,
        price
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}