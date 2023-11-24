import * as React from 'react';
import './styles.css'
import { Link } from 'react-router-dom'
import { Headertop } from '../../header/header';
import { PageReg } from '../page-reg';
import { PageAuth } from '../page-auth';
import { useState } from 'react';

export const PageMain = () => {
    const [isAuthVisible, setIsAuthVisible] = useState(false);
    const [isRegVisible, setIsRegVisible] = useState(false);


    return (
        <div>
            <Headertop onSignInClick={() => setIsAuthVisible(true)}  onRegClick={() => setIsRegVisible(true)}/>
            
            {isAuthVisible && (
                <div className='form-wrapper'>
                    <PageAuth onExitClick={() => setIsAuthVisible(false)}/>
                </div>
            )}
            
            {isRegVisible && (
                <div className='form-wrapper'>
                    <PageReg onExitClick={() => setIsRegVisible(false)}/>
                </div>
            )}
        </div>
    );
};

