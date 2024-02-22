import * as React from 'react';
import "./reg-footer.css"

export const RegFooter = (props) =>
{
    return(
        <div className='reg-footer'>        
            <button className='footer-button-goback' onClick={props.onBack}>Назад</button>
            {props.curStep === 5 ?
                <button className='footer-button-next' onClick={props.onSubmit}>Отправить</button> : 
                <button className='footer-button-next' onClick={props.onContinue}>Продолжить</button>}
        </div>
    )
}