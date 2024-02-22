import * as React from 'react';
import { useState } from 'react';
import './form.css';
import Select from 'react-select';
import location from '../../../assets/icons/location.svg';


export const FormLocation = (props) =>
{
    const [manualMode, setManualMode] = useState(false);

    const changeMode = () => {
        setManualMode((val) => !val)
    }

    const countries = [
        {
            value: 'belarus',
            label:'Беларусь',
        },
        {
            value: 'russia',
            label:'Россия',
        },
        {
            value: 'ukraine',
            label:'Украина',
        }
    ]

    const cities = [
        {
            country: 'belarus',
            cityList: [
                {
                    value: 'minsk',
                    label: 'Минск',
                },
                {
                    value: 'vitebsk',
                    label: 'Витебск',
                },
                {
                    value: 'brest',
                    label: 'Брест',
                },
                {
                    value: 'lipnishki',
                    label: 'Липнишки',
                },
            ],
        },
        {
            country: 'russia',
            cityList: [
                {
                    value: 'moskow',
                    label: 'Москва',
                },
                {
                    value: 'spb',
                    label: 'СПБ',
                },
                {
                    value: 'vorkuta',
                    label: 'Воркута',
                },
                {
                    value: 'nt',
                    label: 'Нижний Тагил',
                },
            ],
        },
        {
            country: 'ukraine',
            cityList: [
                {
                    value: 'kyiv',
                    label: 'Киев',
                },
                {
                    value: 'lwiv',
                    label: 'Львов',
                },
                {
                    value: 'kharkiv',
                    label: 'Харьков',
                },
                {
                    value: 'dnipro',
                    label: 'Днепр',
                },
            ],
        },
    ]

    return(
            manualMode ?
            <div className='form'>
                <h1>Введите Ваше местоположение</h1>
                <h2>Страна</h2>
                <Select
                    value={countries.find(country => country.value === props.formData.country)}
                    options={countries}
                    onChange={(e) => {
                        console.log(e)
                        props.updateFormData(
                        {
                            ...props.formData,
                            country: e.value,
                        })}}
                />
                <h2>Город</h2>
                <Select
                    value={props.formData.country ? 
                        cities.find(country => country.country === props.formData.country).cityList.find(city => city.value === props.formData.city)
                        :
                        ''
                    }
                    options={props.formData.country ? 
                        cities.find(country => country.country === props.formData.country).cityList
                        :
                        ''
                    }
                    onChange={(e) => {
                        props.updateFormData(
                        {
                            ...props.formData,
                            city: e.value,
                        })}}
                />
            </div>
            :
            <div className='location-form'>    
                <img src={location} alt=''/>
                <h1 style={{margin: '10% auto 4% auto'}}> Включите своё местоположение </h1>
                <p className='loc-text'> Включите использование вашего местоположения, чтобы показать людей поблизости </p>
                <button className='enter-loc-button' onClick={changeMode}>
                    Ввести вручную
                </button>
            </div>
    )
}