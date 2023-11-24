import * as React from 'react';
import { Link } from 'react-router-dom'
import './header.css'

export const Headertop = ({ onSignInClick, onRegClick }) => {
    return (
        <div className='header-top'>
            <h1>sitelogo</h1>
            <div className='header-link-container'>
                <div onClick={onSignInClick} className='header-link'>
                    <div>Sign in</div>
                </div>
                <div onClick={onRegClick} className='header-link'>
                    <div>Register</div>
                </div>
            </div>
        </div>
    );
};