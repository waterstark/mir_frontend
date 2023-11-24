import * as React from 'react';
import './style.css';
import {Form} from "../../form";
import AuthService from '../../../services/userAuth';
import { useState } from 'react'

export const PageAuth = ({ onExitClick }) => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [reqstate, setReqstate] = useState(0);

    return (
        <div className="center-container">
            <button onClick={onExitClick} className="exit">X</button>
            <Form>
                <h3>Вход</h3>
                <input placeholder='Логин' onChange={(e) => {setLogin(e.target.value)}} value={login}/>
                <p className={reqstate & (1 << 1) ? "login-not-valid" : "login-valid"} >Login is not valid</p>
                <input type='password' placeholder="Пароль" onChange={(e) => {setPassword(e.target.value)}} value={password}/>
                <button onClick={(e) => HandleClick(e)}>Вход</button>
                <a href='/reg'>Создать аккаунт</a>
            </Form>
        </div>
    );

    function checkFields(){
        let k = 0;
        k = k ^ ((!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(login)) << 1) //mail test
        return k
    }

    async function HandleClick(e) {
        e.preventDefault();
        const check = checkFields
        if (check)
        {
            setReqstate(check);
            return;
        }
        setReqstate(1)
        const error = AuthService.login(login, password);
        if (error)
        {
            console.log(error) //do popup window
        }
        setReqstate(0)
    }
};