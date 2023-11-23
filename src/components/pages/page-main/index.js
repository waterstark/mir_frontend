import * as React from 'react';
import './styles.css'
import { Link } from 'react-router-dom'
import { Headertop } from '../../header/header';
import { PageReg } from '../page-reg';

export const PageMain = () => {
    return (
        <div>
            <Headertop />
            <div className='form-wrapper'>
                <PageReg />
            </div>
        </div>
    );
};