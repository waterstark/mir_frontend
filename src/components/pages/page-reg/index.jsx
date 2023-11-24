import * as React from 'react'
import './style.css'
import { Form } from "../../form"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import AuthService from '../../../services/userAuth'

// 00000000 - idle (0)
// 00000001 - sending (1)
// 00000010 - checkbox err (2)
// 00000100 - password not matching (4)
// 00001000 - length (8)
// 00010000 - pass check error (16)
// 00100000 - mail err (32)
// 01000000 - username error (64)

export const PageReg = ({onExitClick}) => {

    const [passinp, setPassinp] = useState('');
    const [passrep, setPassrep] = useState('');
    const [nameinp, setNameinp] = useState('');
    const [mailinp, setMailinp] = useState('');
    const [agreed, setAgreed] = useState(0);

    const [reqstate, setReqstate] = useState(0);

    return (
        <div className="center-container">
        <button onClick={onExitClick} className="exit">X</button>        
        <Form>        
            <h3>Регистрация</h3>
            <input placeholder='Имя' value={nameinp} onChange={(e) => {setNameinp(e.target.value)}}/>
            <p className={reqstate & (1 << 6) ? "password-not-matching-text" : "password-matching-text"}>Username must be longer than 4 symbols and shorter than 24 symbols</p>
            <input type='email' placeholder="email" value={mailinp} onChange={(e) => {setMailinp(e.target.value); setReqstate(0)}}/>
            <p className={reqstate & (1 << 5) ? "password-not-matching-text" : "password-matching-text"}>Enter an actual mail</p>
            <input type='password' placeholder="пароль" className={(reqstate & (1 << 3)) ? "password-not-matching-input" : ""} value={passinp} onChange={(e) => {setPassinp(e.target.value); setReqstate(0)}}/>
            <p className={reqstate & (1 << 3) ? "password-not-matching-text" : "password-matching-text"}>Password must be at least 8 symbols long</p>
            <input type='password' className={reqstate & (1 << 2) ? "password-not-matching-input" : ""} placeholder="повторить пароль" value={passrep} onChange={(e) => {setPassrep(e.target.value); setReqstate(0)}}/>
            <p className={reqstate & (1 << 2) ? "password-not-matching-text" : "password-matching-text"}>Passwords do not match</p>
            <div className={(reqstate & (1 << 1)) ? "checkbox-wrong" : ""}>
                <input type='checkbox' className='checkbox' value={agreed} onChange={(e) => {setAgreed(e.target.checked); setReqstate(0)}} />
                <p>By pressing Continue, you agree to the
                    <Link to='/terms'> Terms of Service</Link> and
                <Link to='/privacy'> Privacy Policy</Link>
            </p>
        </div>
        <button onClick={(e) => {HandleClick(e)}}>{reqstate & (1 << 0) ? "Loading..." : "Register"}</button>
    </Form>
    </div>
);

    function CheckFields()
    {
        let k = 0;
        k = k ^ ((!agreed) << 1)
        k = k ^ ((passinp !== passrep) << 2) 
        k = k ^ ((!(/^.{8,}$/.test(passinp)))<< 3)
        //enter password check-up
        k = k ^ ((!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(mailinp)) << 5)
        k = k ^ ((!(/^.{5,24}$/.test(passinp))) << 6)
        return k
    }

    async function HandleClick(e)
    {
        console.log(reqstate)
        e.preventDefault()

        const check = CheckFields()

        console.log(check)

        if (check)
        {
            setReqstate(check)
            return
        }
        setReqstate(1);
        await AuthService.registration(mailinp, passinp)
        setReqstate(0);
    }
};