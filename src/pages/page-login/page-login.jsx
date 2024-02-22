import * as React from 'react';
import { Header } from './../../components/header/header'
import { Footer } from './../../components/footer/footer'
import './page-login.css'
import { LoginForm } from './forms/login-form';
import { useState } from 'react';
import AuthService from './../../services/userAuth'
import { useNavigate } from 'react-router-dom';
import UserStore from './../../store/store'

export const PageLogin = () =>
{
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleContinue(e) {
        e.preventDefault();
        const error = await AuthService.login(login, password);
        if (error)
        {
            alert(error) //do popup window
        }
        else
        {
            navigate('/')
        }
    }

    return(
        <div className='page-login'>        
            <Header />
            <LoginForm setLogin={setLogin} setPassword={setPassword}/>
            <Footer onContinue={handleContinue}/>
        </div>
    )
}
