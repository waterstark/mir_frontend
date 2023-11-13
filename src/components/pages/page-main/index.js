import * as React from 'react';
import './styles.css'
import { Link } from 'react-router-dom'
import { Headertop } from '../../header/header';

export const PageMain = () => {
    return (
        <div>
            <Headertop />
            <h1>Main</h1>
            <div className='links_container'>
                <Link to="/auth" className='link'>
                    <div>Authintificate</div>
                </Link>
                <Link to="/reg" className='link'>
                    <div>Register</div>
                </Link>
                <Link to="/profile" className='link'>
                    <div>MyProfile</div>
                </Link>
            </div>
        </div>
    );
};