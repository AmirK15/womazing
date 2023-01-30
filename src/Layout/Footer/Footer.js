import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Footer = () => {

    const {t} = useTranslation()

    return (
        <footer className="footer">
            <div className="container">
                <nav className="nav">
                    <NavLink to="/" href="#" className="nav__logo">
                        <span>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M21.5169 22.6493L21.1587 20.9776C20.4207 17.5332 19.0683 14.2964 17.1387 11.3529V8.64058C18.0275 7.97178 18.6035 6.9084 18.6035 5.71289V4.24805C18.6035 3.84355 18.2756 3.51562 17.8711 3.51562H17.1387V0.732422C17.1387 0.32793 16.8107 0 16.4062 0C16.0018 0 15.6738 0.32793 15.6738 0.732422V3.52339C14.3584 3.6001 13.2059 4.29209 12.5 5.31528C11.7941 4.29209 10.6416 3.6001 9.32617 3.52339V0.732422C9.32617 0.32793 8.99824 0 8.59375 0C8.18926 0 7.86133 0.32793 7.86133 0.732422V3.51562H7.1289C6.72441 3.51562 6.39648 3.84355 6.39648 4.24805V5.71289C6.39648 6.9084 6.97246 7.97178 7.86133 8.64058V11.3529C5.93174 14.2964 4.57934 17.5332 3.84126 20.9776L3.48305 22.6493C3.40649 23.0066 3.60507 23.3658 3.94853 23.4909C6.69741 24.4923 9.57451 25 12.5 25C15.4255 25 18.3026 24.4923 21.0515 23.4909C21.3949 23.3658 21.5935 23.0067 21.5169 22.6493ZM15.918 4.98047H17.1387V5.71289C17.1387 6.92446 16.153 7.91016 14.9414 7.91016H13.2324V7.66602C13.2324 6.1852 14.4372 4.98047 15.918 4.98047ZM7.86133 4.98047H9.08203C10.5628 4.98047 11.7676 6.1852 11.7676 7.66602V7.91016H10.0586C8.84702 7.91016 7.86133 6.92446 7.86133 5.71289V4.98047ZM10.0586 9.375H14.9414C15.1922 9.375 15.4371 9.34956 15.6738 9.30132V10.8398H9.32617V9.30132C9.56289 9.34956 9.80781 9.375 10.0586 9.375ZM12.5 23.5352C9.95849 23.5352 7.45561 23.128 5.05073 22.3244L5.27353 21.2846C5.96118 18.0757 7.21054 15.0566 8.98901 12.3047L16.0109 12.3047C17.7894 15.0566 19.0388 18.0757 19.7264 21.2845L19.9492 22.3244C17.5444 23.128 15.0415 23.5352 12.5 23.5352Z" fill="black"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_30400_416">
                                    <rect width="25" height="25" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        </span>
                        <h1 className="nav__title">Womazing</h1>
                    </NavLink>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <NavLink className="nav__link" to="/">{t("header.link1")}</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink className="nav__link" to="/shop">{t("header.link2")}</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink className="nav__link" to="/brands">{t("header.link3")}</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink className="nav__link" to="/contact">{t("header.link4")}</NavLink>
                        </li>
                    </ul>
                    <div className="nav__info">
                        <a href="tel: +7 (495) 823-54-12" className="nav__number">
                            +7 (495) 823-54-12
                        </a>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;