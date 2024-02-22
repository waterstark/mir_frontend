import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegHeader } from './reg-header/header';
import { FormEmail } from './forms/form-email';
import { FormInfo } from './forms/form-info';
import { FormOptions } from './forms/form-options';
import { FormInterests } from './forms/form-interests';
import { FormLocation } from './forms/form-location';
import { RegFooter } from './reg-footer/footer';
import AuthService from '../../services/userAuth';
import UserService from '../../services/userApp';
import './page-reg.css'

export const PageReg = () =>
{
    const [step, setStep] = useState(1); 
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({ 
        form1: {
            email: "",
            password: "",
            confirmedPassword: "",
            agreed: false
        }, 
        form2: {
            fullname: "",
            birthDate: {
                day: '',
                month: '',
                year: '',
            },
            gender: "none",
            about: "",
            photos: []
        }, 
        form3: {
            goal: "none",
            smoking: "none",
            sport: "none",
        },
        form4: {
            interests: [],
        },
        form5: {
            country: '',
            city: '',
        }
    });

    const navigate = useNavigate();

    const validate = 
    {
        form1: function()
        {
            if (formData.form1.email < 1 || formData.form1.email > 30) { //сделать проверку через регулярки
                setError('Введите корректный email!');
                return false;
            }
            if (formData.form1.password !== formData.form1.confirmedPassword) {
                setError('Пароль не совпадает');
                return false;
            }
            if (!formData.form1.agreed) {
//              SERVER SEND CODE TO THE PHONE
                setError('Это поле является обязательным');
                return false;
            }
            setError('');
            return true;
        },
        form2: function()
        {
            if (
                (formData.form2.fullname.length > 0) &&
                (formData.form2.fullname.length < 32) &&
                (formData.form2.birthDate.day > 0) &&  
                (formData.form2.birthDate.day < 32) &&  
                (formData.form2.birthDate.month > 0) &&  
                (formData.form2.birthDate.month < 13) &&  
                (formData.form2.birthDate.year > 1900) &&  
                (formData.form2.birthDate.year < 2025) &&  
                (formData.form2.gender !== "none"))
            {
                setError('');
                return true;
            }
            setError('* - заполните все обязятельные поля!')
            return false;
        },
        form3: function()
        {
            if (
                (formData.form3.goal !== "none") &&
                (formData.form3.smoking !== "none") &&
                (formData.form3.sport !== "none") 
            )
            { 
                setError('');
                return true; 
            }
            setError('Выберите значение для каждого поля!');
            return false;
        },
        form4: function()
        {
            if (formData.form4.interests.length > 0) {
                setError('');
                return true;
            }
            setError('Выберите как минимум один вариант!');
            return false;
        },
        form5: function() {return true}
    }
 
    const updateFormData = (formName, data) => { 
        setFormData((prevData) => ({ 
            ...prevData, 
            [formName]: data, 
        })); 
    }; 
 
    const handleContinue = () => { 
        if (validate["form" + step]())
        {
            setStep((prevStep) => prevStep + 1); 
        };
        console.log(formData)
    };

    const handleBack = () => { 
        if (step > 1) {
            setError('')
            setStep((prevStep) => prevStep - 1); 
        };
        console.log(formData)
    }; 
 
    const handleSubmit = () => { 
        setStep((prevStep) => prevStep + 1);
        setTimeout(() => {
            AuthService.registration(formData.form1.email, formData.form1.password)
                .then (() => {
                    return AuthService.login(formData.form1.email, formData.form1.password);
                })
                .then (() => {
                    return AuthService.getprofile();
                })
                .then (() => {
                    return UserService.createQuest({
                            fullname: formData.form2.fullname,
                            birthDate: formData.form2.birthDate,
                            gender: formData.form2.gender,
                            about: formData.form2.about,
                            photos: formData.form2.photos,
                            goal: formData.form3.goal,
                            smoking: formData.form3.smoking,
                            sport: formData.form3.sport,
                            interests: [
                                {                                    
                                    "hobby_name": "string",
                                }
                            ],
                            email: formData.form1.email,
                            password: formData.form1.password,
                    })
                })
                .then(() => {
                    navigate('/');
                })
        }, 2000)
    }; 
 
    const renderForm = () => { 
        switch (step) { 
            case 1: 
                return <FormEmail formData={formData.form1} updateFormData={(data) => updateFormData('form1', data)} error={error}/>; 
            case 2:
                return <FormInfo formData={formData.form2} updateFormData={(data) => updateFormData('form2', data)} error={error}/> 
            case 3:
                return <FormOptions formData={formData.form3} updateFormData={(data) => updateFormData('form3', data)} error={error}/>
            case 4:
                return <FormInterests formData={formData.form4} updateFormData={(data) => updateFormData('form4', data)} error={error}/>
            case 5:
                return <FormLocation formData={formData.form5} updateFormData={(data) => updateFormData('form5', data)} error={error}/>
            default: 
                return null; 
        } 
    }; 
    
    return(
        <div className='page-reg'>        
            {step === 6 ? 
            <div className='completed'>
                <h1>Completed!</h1>
            </div> 
            :
            <div style={{height: '100%'}}>
                <RegHeader curStep={step} />
                <div className='form-container'> 
                    {renderForm()}  
                </div>
                <RegFooter onBack={handleBack} onContinue={handleContinue} onSubmit={handleSubmit} curStep={step}/>
            </div>}
        </div>
    )
}