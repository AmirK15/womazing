import React, {useContext, useState, useRef} from 'react';
import {CustomContext} from "../../Context";
import {useForm} from "react-hook-form";
import InputMask from 'react-input-mask';
import axios from "axios";

const Profile = () => {

    const [userChange, setUserChange] = useState(false)
    const [passwordChange, setPasswordChange] = useState(false)
    const {user, setUser} = useContext(CustomContext)
    const {
        register,
        reset,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm({
        mode: 'onBlur'
    })
    const password = useRef({});
    password.current = watch("password", "")

    const changeUser = (data) => {
        axios.patch(`http://localhost:8080/users/${user.id}`, data)
            .then(({data}) => {
                setUser(data)
                localStorage.setItem('user', JSON.stringify(data))
                setUserChange(false)
                console.log(data)
            })
    }

    const changePassword = (data) => {
        axios.patch(`http://localhost:8080/users/${user.id}`, {password: data.password})
            .then(() => setPasswordChange(false))
    }

    return (
        <section className='profile'>
            <div className="container">
                <div className="profile__head">
                    <h2 className="title-section">Мой аккаунт</h2>
                    <div className="profile__btns">
                        <button className="btn">История заказов</button>
                        <button className="btn">Настройки</button>
                    </div>
                </div>
                <form onSubmit={handleSubmit(changeUser)} className="profile__content">
                    <div className="profile__content-top">
                        <h3 className='title-info'>Личные данные</h3>
                        <p onClick={() => setUserChange(!userChange)} className='profile__content-desc'>
                            {userChange ? 'Отменить' : 'Изменить'}
                        </p>
                    </div>
                    <div className="profile__content-bottom">
                        <p className='desc'>
                            <span className="profile__content-info">Логин</span>
                            {userChange
                                ? <input {...register('login')} defaultValue={user.login} type="text"/>
                                : user.login
                            }
                        </p>
                        <p className='desc'>
                            <span className="profile__content-info">Номер телефона</span>
                            {userChange
                                ? <InputMask {...register('phone')} mask={'+\\9\\96(999)99-99-99'} defaultValue={user.phone} type="tel"/>
                                : user.phone
                            }
                        </p>
                        <p className='desc'>
                            <span className="profile__content-info">Почта</span>
                            {userChange
                                ? <input {...register('email')} defaultValue={user.email} type="email"/>
                                : user.email
                            }
                        </p>
                    </div>
                    {userChange && <button type='submit' className="btn">Сохранить изменения</button>}
                </form>
                <form onSubmit={handleSubmit(changePassword)} className="profile__content">
                    <div className="profile__content-top">
                        <h3 className='title-info'>Пароль</h3>
                        <p onClick={() => setPasswordChange(!passwordChange)} className='profile__content-desc'>
                            {passwordChange ? 'Отменить' : 'Изменить'}
                        </p>
                    </div>
                    <div className="profile__content-bottom">
                        {
                            passwordChange ?
                                <div className="profile__content-password">
                                    <p className='desc'>
                                        <span className="profile__content-info">Новый пароль</span>
                                        <input {...register('password', {
                                            required: "You must specify a password",
                                            minLength: {
                                                value: 6,
                                                message: "Password must have at least 6 characters"
                                            }
                                        })} type="password"/>
                                        {errors?.password && <p>{errors?.password?.message}</p>}
                                    </p>
                                    <p className='desc'>
                                        <span className="profile__content-info">Подтвердите пароль</span>
                                        <input {...register('confirmPwd', {
                                            validate: value =>
                                                value === password.current || "The password do not match"
                                        })} type="password"/>
                                        {errors?.confirmPwd && <p>{errors?.confirmPwd?.message}</p>}
                                    </p>
                                </div>
                                : ''
                        }
                        {passwordChange && <button type='submit' className="btn">Сохранить изменения</button>}
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Profile;