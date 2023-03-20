import React from 'react';
import {useTranslation} from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import image from '../../../assets/arrivals/arrivals.png'
import {Link} from "react-router-dom";

const Arrivals = () => {

    const {t} = useTranslation()

    return (
        <section className="arrivals">
            <div className="container">
                <div className="arrivals__content">
                    <div className="arrivals__text">
                        <h2 className="title" dangerouslySetInnerHTML={{__html: t("home.arrivals.title")}}/>
                        <p className="arrivals__desc" dangerouslySetInnerHTML={{__html: t("home.arrivals.desc")}}/>
                        <Link to="/shop">
                            <button className="btn">
                                {t("home.arrivals.button")}
                            </button>
                        </Link>
                    </div>
                    <div className="arrivals__image">
                        <LazyLoadImage
                            alt="Woman"
                            effect="blur"
                            src={image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Arrivals;