import * as React from 'react';
import './checkbox.css'

export const Checkbox = (props) =>
{
    return(
        <div className='checkbox'>        
            <input type="checkbox" className="custom-checkbox" id="happy" name="happy" checked={props.checked} onChange={props.onChange} />
            <label for="happy">{props.title}</label>
        </div>
    )
}