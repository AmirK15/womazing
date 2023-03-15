import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from 'react-router-dom';
import CreateColors from "./CreateColors";
import CreateSizes from "./CreateSizes";
import axios from "axios";
import {CustomContext} from "../../Context";

const CreateProduct = () => {

    const navigate = useNavigate()
    const [colors, setColors] = useState([])
    const [sizes, setSizes] = useState([])
    const {getAllClothes} = useContext(CustomContext)
    const {register, reset, handleSubmit} = useForm()

    const createProduct = (data) => {
        axios.post('http://localhost:8080/clothes', {
            ...data,
            colors,
            size: sizes,
            image: data.image[0].name
        }).then(() => {
            getAllClothes()
            navigate('/shop')
        })
        console.log(data)
    }

    return (
        <section className="create">
            <div className="container">
                <h2 className="title">
                    Добавить
                </h2>
                <form onSubmit={handleSubmit(createProduct)} className="create__form">
                    <div className="create__form-block">
                        <label className="create__form-label">
                            <span>Название</span>
                            <input {...register('title')} className="create__form-input" type="text"/>
                        </label>
                    </div>

                    <div className="create__form-block">
                        <label className="create__form-label">
                            <span>Цена</span>
                            <input {...register('price')} className="create__form-input" type="number"/>
                        </label>
                    </div>

                    <div className="create__form-block">
                        <label className="create__form-label">
                            <span>Количество</span>
                            <input {...register('inStock')} className="create__form-input" type="number"/>
                        </label>
                    </div>

                    <div className="create__form-block">
                        <label className="create__form-label">
                            <span>Изображение</span>
                            <input {...register('image')} className="create__form-input" type="file"/>
                        </label>
                    </div>

                    <div className="create__form-block">
                        <ul className="product__content-choose">
                            <CreateColors setColors={setColors} colors={colors} color="blue"/>
                            <CreateColors setColors={setColors} colors={colors} color="black"/>
                            <CreateColors setColors={setColors} colors={colors} color="white"/>
                            <CreateColors setColors={setColors} colors={colors} color="red"/>
                            <CreateColors setColors={setColors} colors={colors} color="orange"/>
                            <CreateColors setColors={setColors} colors={colors} color="green"/>
                        </ul>
                    </div>

                    <div className="create__form-block">
                        <ul className="product__content-choose">
                            <CreateSizes sizes={sizes} setSizes={setSizes} size="XS"/>
                            <CreateSizes sizes={sizes} setSizes={setSizes} size="S"/>
                            <CreateSizes sizes={sizes} setSizes={setSizes} size="M"/>
                            <CreateSizes sizes={sizes} setSizes={setSizes} size="L"/>
                            <CreateSizes sizes={sizes} setSizes={setSizes} size="XL"/>
                            <CreateSizes sizes={sizes} setSizes={setSizes} size="XXL"/>
                        </ul>
                    </div>

                    <div className="create__form-block">
                        <label>
                            <span>Категория</span>
                            <select {...register('category')}>
                                <option>Hoody</option>
                                <option>Sportsuit</option>
                                <option>Sweatshirt</option>
                                <option>T-shirt</option>
                            </select>
                        </label>
                    </div>

                    <button type="submit" className="btn">Создать</button>
                </form>
            </div>
        </section>
    );
};

export default CreateProduct;