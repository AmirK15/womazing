import React, {useContext} from 'react';
import {CustomContext} from "../../Context";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "axios";

const Register = () => {

    const navigate = useNavigate()

    const {setUser} = useContext(CustomContext)

    const {
        register,
        handleSubmit,
        setError: {
            errors
        },
        reset
    } = useForm()

    const registerUser = (data) => {
        axios.post('http://localhost:8080/register', {...data, orders: []})
            .then((res) => {
                setUser(res.data.user)
                navigate('/')
            })
    }

    return (
        <section className="register">
            <form onSubmit={handleSubmit(registerUser)}>
                <h2>Регистрация </h2>

                <input {...register('email')} type="email" placeholder="Введите email"/>

                <input {...register('login')} type="text" placeholder="Введите login"/>

                <input {...register('phone')} type="tel" placeholder="Введите номер"/>

                <input {...register('password')} type="password" placeholder="Введите password"/>

                <input type="password" placeholder="Подтвердить password"/>

                <button type="submit">Регистрация</button>

                <p>Уже есть аккаунт,<Link to='/login'>Войти</Link></p>
            </form>
        </section>
    );
};

export default Register;