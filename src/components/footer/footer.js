import * as React from 'react';
import "./footer.css"

export const Footer = ({ onContinue }) =>
{
    return(
        <div className='footer'>        
            <button className='footer-button-next' onClick={onContinue}>Продолжить</button>
        </div>
    )
}