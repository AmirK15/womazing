import React, {useContext, useState, useRef, useEffect} from 'react';
import {CustomContext} from "../../Context";
import {useForm} from "react-hook-form";
import InputMask from 'react-input-mask';
import axios from "axios";
import {Link} from "react-router-dom";

const Profile = () => {

    const [content, setContent] = useState(false)
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
                        <button onClick={() => setContent(true)} className={`btn ${!content && 'btn-bg'}`}>История заказов</button>
                        <button onClick={() => setContent(false)} className={`btn ${content && 'btn-bg'}`}>Настройки</button>
                    </div>
                </div>
                {
                    !content ?
                       <>
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
                               {
                                   passwordChange &&
                                   <div className="profile__content-bottom">
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
                                       <button type='submit' className="btn">Сохранить изменения</button>
                                   </div>
                               }
                           </form>
                       </> :
                        <div>
                            <ul className='basket__list basket__list-top'>
                                <li className='basket__item'>Товар</li>
                                <li className='basket__item'>Размер</li>
                                <li className='basket__item'>Цвет</li>
                                <li className='basket__item'>Цена</li>
                                <li className='basket__item'>Количество</li>
                                <li className='basket__item'>Всего</li>
                            </ul>
                            {user.orders.map(el => (
                                el.clothes.map(item => (
                                    <>
                                        <ul key={item.id} className="basket__list">
                                            <li className="basket__item">
                                                <Link to={`/product/${item.id}`}>
                                                    <img className='basket__item-img' src={item.image.black} alt={item.title}/>
                                                </Link>
                                                <p className='desc'>{item.title}</p>
                                            </li>
                                            <li className="basket__item">
                                                <p className='desc' style={{textTransform: "uppercase"}}>{item.size}</p>
                                            </li>
                                            <li className="basket__item">
                                                <p className='desc' style={{color: item.color === 'white' || item.color === 'beige' ? 'black' : item.color}}>{item.color}</p>
                                            </li>
                                            <li className="basket__item">
                                                <p className='desc'>${item.price}</p>
                                            </li>
                                            <li className="basket__item">
                                                <p className='desc'>{item.count}</p>
                                            </li>
                                            <li className="basket__item">
                                                <p className='desc'>${item.price * item.count}</p>
                                            </li>
                                        </ul>
                                        <p className='desc'>{el.date.slice(0, 10).split('-').join('.')} - {el.date.slice(11, 19)}</p>
                                    </>
                                ))
                            ))}
                        </div>
                }
            </div>
        </section>
    );
};

export default Profile;