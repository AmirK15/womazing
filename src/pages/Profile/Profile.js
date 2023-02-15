import React, {useContext, useState} from 'react';
import {CustomContext} from "../../Context";
import InputMask from 'react-input-mask'

const Profile = () => {

    const [userChange, setUserChange] = useState(false)
    const {user} = useContext(CustomContext)

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
                <div className="profile__content">
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
                                ? <input defaultValue={user.login} type="text"/>
                                : user.login
                            }
                        </p>
                        <p className='desc'>
                            <span className="profile__content-info">Номер телефона</span>
                            {userChange
                                ? <InputMask mask={'+\\9\\96(999)99-99-99'} defaultValue={user.phone} type="tel"/>
                                : user.phone
                            }
                        </p>
                        <p className='desc'>
                            <span className="profile__content-info">Почта</span>
                            {userChange
                                ? <input defaultValue={user.email} type="email"/>
                                : user.email
                            }
                        </p>
                    </div>
                    {
                        userChange && <button className="btn">Сохранить изменения</button>
                    }
                </div>
                <div className="profile__content">
                    <div className="profile__content-top">
                        <h3 className='title-info'>Пароль</h3>
                        <p className='profile__content-desc'>Изменить</p>
                    </div>
                    <div className="profile__content-bottom">
                        <p className='desc'>
                            <span className="profile__content-info">Логин</span>
                        </p>
                        <p className='desc'>
                            <span className="profile__content-info">Номер телефона</span>
                        </p>
                        <p className='desc'>
                            <span className="profile__content-info">Почта</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;