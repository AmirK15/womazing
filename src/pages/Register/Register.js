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
        <section>
            <form className="form" onSubmit={handleSubmit(registerUser)}>
                <h2 className="form__title">Регистрация </h2>

                <input
                    className="form__input"
                    {...register('email')}
                    type="email"
                    placeholder="Введите email"/>

                <input
                    className="form__input"
                    {...register('login')}
                    type="text"
                    placeholder="Введите login"/>

                <input
                    className="form__input"
                    {...register('phone')}
                    type="tel"
                    placeholder="Введите номер"/>

                <input
                    className="form__input"
                    {...register('password')}
                    type="password"
                    placeholder="Введите password"/>

                <input
                    className="form__input"
                    type="password"
                    placeholder="Подтвердить password"/>

                <button className="btn" type="submit">Регистрация</button>

                <p className="desc">
                    Уже есть аккаунт?
                    <Link to='/login'> Войти</Link>
                </p>
            </form>
        </section>
    );
};

export default Register;