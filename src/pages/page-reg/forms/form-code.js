import * as React from 'react';
import ReactCodeInput from 'react-code-input';
import './form.css'

export const FormCode = (props) =>
{
    const properties = {
        inputStyle: {
            fontFamily: 'inter',
            margin: '4px',
            width: '3.5vw',
            height: '3.5vw',
            borderRadius: '10px',
            fontSize: '16px',
            textAlign: 'center',
            backgroundColor: '#F2F2F2',
            color: 'black',
            border: '1px solid lightskyblue'
        }
    }

    const sendCodeAgain = () => {

    }

    return(
        <div className='form' style={{textAlign: 'center'}}>        
            <h1>
                Введите код аутентификации
            </h1>
            <h3>
                Введите 6-значный номер, который мы отправили по номеру телефона {props.formData.form1.phoneNumber}
            </h3>
            <ReactCodeInput 
                type='text' 
                fields={6} value={props.formData.form2.currCode} 
                onChange={(code) => props.updateFormData({
                    curCode: code
                })}
                {...properties}
            />
            {props.error && <p className='error'>{props.error}</p>}
            <button className='send-again' onClick={sendCodeAgain}>
                Отправить ещё раз
            </button>
        </div>
    )
}