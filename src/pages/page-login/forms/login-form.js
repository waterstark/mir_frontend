import * as React from 'react';
import './form.css'
import 'react-international-phone/style.css';
import { ReactComponent as MailIcon } from '../../../assets/icons/mail.svg';
import { ReactComponent as KeyIcon } from '../../../assets/icons/key.svg';
import { ReactComponent as Facebook } from '../../../assets/icons/facebook.svg';
import { ReactComponent as Google } from '../../../assets/icons/google.svg';



export const LoginForm = ({
    setLogin,setPassword
}) =>
{
    return(
        <div className='form'>        
            <h1>Вход</h1>
            <h3>Введите свою почту, чтобы создать учетную запись.</h3>

            <h2>Почта</h2>

            <div className='wrape-input'>
                <input type='text' 
                className='text-input' 
                placeholder='Введите почту' 
                onChange={(e) => setLogin(e.target.value)}
                />
                <MailIcon className='icon-position margin-icon'/>
            </div>
         
            <h2>Пароль</h2>

            <div className='wrape-input'>
                <input type='password' 
                className='text-input' 
                placeholder='Введите пароль' 
                onChange={(e) => setPassword(e.target.value)}
                />
                <KeyIcon className='icon-position margin-icon'/>
            </div>

            <div className='line-solid-grey'></div>
            <div className='wrap-align-center'>
                <h3 className='text-center'>Нет аккаунта? <a href='/auth' className='link-login but-transition'>Зарегистрироваться</a></h3>
                <h3 className='text-center'><a href='/auth' className='link-login but-transition'>Забыли пароль?</a></h3>
                <h3 className='text-center'>Или продолжить</h3>
                <div className='continue-with-button-container'>
                    <button className='continue-with-button'>
                         <Google/>
                    </button>
                    <button className='continue-with-button'>
                        <Facebook/>
                    </button>
                    
            </div>
            </div>
        </div>
    )
}   