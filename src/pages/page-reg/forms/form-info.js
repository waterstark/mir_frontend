import * as React from 'react';
import './form.css'

export const FormInfo = (props) =>
{
    return(
        <div className='form'>        
            <h1>Заполните Ваш профиль</h1>
            <h2>Имя{props.error && <sup className='error'>*</sup>}</h2>
            <input
                className='text-input'
                placeholder='Полное имя'
                onChange={(e) => {
                    props.updateFormData(
                    {
                        ...props.formData,
                        fullname: e.target.value,
                    })}}
                value={props.formData.fullname}
            />

            <h2>Дата рождения{props.error && <sup className='error'>*</sup>}</h2>
            <div className='birthday-input-container'>
                <input
                    className='text-input'
                    placeholder='ДД'
                    style={{width: '30%'}}
                    onChange={(e) => {
                        props.updateFormData(
                        {
                            ...props.formData,
                            birthDate: {
                                ...props.formData.birthDate,
                                day: e.target.value,
                            },
                        })}}
                    value={props.formData.birthDate.day}
                />
                <input
                    className='text-input'
                    placeholder='ММ'
                    style={{width: '30%'}}
                    onChange={(e) => {
                        props.updateFormData(
                        {
                            ...props.formData,
                            birthDate: {
                                ...props.formData.birthDate,
                                month: e.target.value,
                            },
                        })}}
                    value={props.formData.birthDate.month}
                />
                <input
                    className='text-input'
                    placeholder='ГГГГ'
                    style={{width: '30%'}}
                    onChange={(e) => {
                        props.updateFormData(
                        {
                            ...props.formData,
                            birthDate: {
                                ...props.formData.birthDate,
                                year: e.target.value,
                            },
                        })}}
                    value={props.formData.birthDate.year}
                />
            </div>

            <h2>Выберите пол{props.error && <sup className='error'>*</sup>}</h2>
            <div className='radio-container'>
                <label className="radio-button-label" style={{backgroundColor: props.formData.gender === "Male" ? '#7653EB' : '#f2f2f2'}}>
                    <input
                        type="radio"
                        value="Male"
                        checked={props.formData.gender === "Male"}
                        onChange={(e) => props.updateFormData({
                            ...props.formData,
                            gender: e.target.value,
                        })}
                    />
                    <span className="button-text">Мужчина</span>
                </label>
                <label className="radio-button-label" style={{backgroundColor: props.formData.gender === "Female" ? '#7653EB' : '#f2f2f2'}}>
                    <input
                        type="radio"
                        value="Female"
                        checked={props.formData.gender === "Female"}
                        onChange={(e) => props.updateFormData({
                            ...props.formData,
                            gender: e.target.value,
                        })}
                    />
                    <span className="button-text">Девушка</span>
                </label>
            </div>

            <h2>Расскажи о себе</h2>
            <input
                className='text-input'
                placeholder='Введите текст'
                style={{height: '100px'}}
                onChange={(e) => {
                    props.updateFormData(
                    {
                        ...props.formData,
                        about: e.target.value,
                    })}}
                value={props.formData.about}
            />


            <h2>Ваши фотографии</h2>
            <div className='image-container'>
                <img src='src\assets\img-temp\img1.jpg' alt=''/>
                <svg xmlns="http://www.w3.org/2000/svg" width="25%" height="33%" viewBox="0 0 122 161" fill="none">
                    <rect x="0.436279" width="121.564" height="160.857" rx="6.13958" fill="#F2F2F2"/>
                    <path d="M45.8689 80.4285H76.5668" stroke="#AAAAAA" stroke-width="2.45583" stroke-linecap="round"/>
                    <path d="M61.218 95.7775V65.0796" stroke="#AAAAAA" stroke-width="2.45583" stroke-linecap="round"/>
                </svg>
            </div>

            {props.error && <p className='error' style={{marginBottom: '50px'}}>{props.error}</p>}
        </div>
    )
}   