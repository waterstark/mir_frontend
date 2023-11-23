import * as React from 'react';
import { Link } from 'react-router-dom'
import './header.css'

export const Headertop = () => {
    return(
        <div className='header-top'>
            <h1>sitelogo</h1>
            <div className='header-link-container'>
                <Link to="/auth" className='header-link'>
                        <div>Sign in</div>
                </Link>
                <Link to="/reg" className='header-link'>
                        <div>Register</div>
                </Link>
            </div>
        </div>
    )
}