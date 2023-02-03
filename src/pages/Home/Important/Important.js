import React from 'react';
import ImportantCard from "./ImportantCard/ImportantCard";
import Quality from '../../../assets/important/quality.svg'
import Responsibility from '../../../assets/important/responsibility.svg'
import Speed from '../../../assets/important/speed.svg'

const Important = () => {
    return (
        <section className="important">
            <div className="container">
                <h3 className="title-section">
                    Что для нас важно
                </h3>
                <div className="important__row">
                    <ImportantCard image={Quality} title="Качество" text="Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества"/>
                    <ImportantCard image={Speed} title="Скорость" text="Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах"/>
                    <ImportantCard image={Responsibility} title="Ответственность" text="Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing"/>
                </div>
            </div>
        </section>
    );
};

export default Important;