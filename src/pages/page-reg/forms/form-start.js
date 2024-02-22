import * as React from 'react';
import './form.css'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { Checkbox } from '../../../components/checkbox/checkbox';

export const FormStart = (props) =>
{
    return(
        <div className='form'>        
            <h1>
                Создать аккаунт
            </h1>
            <h3>
                Введите свой номер телефона, чтобы создать учётную запись.
            </h3>
            <h2>
                Номер телефона
            </h2>
            <PhoneInput
                defaultCountry="ru"
                value={props.formData.phoneNumber}
                onChange={(phone) => props.updateFormData({
                    phoneNumber: phone,
                    agreed: props.formData.agreed
                })}
            />
            <Checkbox onChange={(e) => 
                props.updateFormData({
                    phoneNumber: props.formData.phoneNumber,
                    agreed: e.target.checked
                })}
                checked={props.formData.agreed}
                title={"Я согласен с публичным соглашением, условиями и политикой конфиденциальности."}
            />
            {props.error && <p className='error'>{props.error}</p>}
            <hr />
            <div className='continue-with'>
                <h2 className='text-have-an-account'>У вас уже есть аккаунт?</h2>
                <a href='/auth' className='link-login'>Войти</a>
            </div>
            <h2 className='text-continue-with'>
                или продолжить
            </h2>
            <div className='continue-with-button-container'>
                <button className='continue-with-button'>Google icon</button>
                <button className='continue-with-button'>Facebook icon</button>
            </div>
        </div>
    )
}
