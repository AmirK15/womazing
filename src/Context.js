import React, {createContext, useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const CustomContext = createContext()

export const Context = (props) => {

    const navigate = useNavigate()

    const [count, setCount] = useState(1)
    const [user, setUser] = useState({
        login: ''
    })

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
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
        count,
        setCount,
        user,
        setUser,
        registerUser,
        logOutUser,
        loginUser
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}