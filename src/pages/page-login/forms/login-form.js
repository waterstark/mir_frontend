import * as React from 'react';
import './form.css'

export const LoginForm = ({
    setLogin,setPassword
}) =>
{
    return(
        <div className='form'>        
            <h1>Авторизироваться</h1>

            <h2>Введите e-mail</h2>
            <input type='text' 
            className='text-input' 
            placeholder='Ваш e-mail' 
            onChange={(e) => setLogin(e.target.value)}
            />

            <h2>Введите пароль</h2>
            <input type='password' 
            className='text-input' 
            placeholder='Ваш пароль' 
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
    )
}   