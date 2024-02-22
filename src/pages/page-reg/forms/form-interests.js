import * as React from 'react';
import './form.css'

export const FormInterests = (props) =>
{
    const interests = [
        'Active partner',
        'Casual dating',
        'Experiments open',
        'Sugar daddy',
        'Secret meetengs',
        'Roleplay costumes',
        'Romance',
        'BDSM'
    ];
    
    const handleOptionChange = (option) => {
        props.updateFormData({
            interests: props.formData.interests.includes(option) ? 
            props.formData.interests.filter((selected) => selected !== option) : 
            [...props.formData.interests, option],
        }) 
      };

    return(
        <div style={{height: '100%'}}>
            <div className='form'>        
                <h1> Заполните Ваши интересы </h1>
            </div>
            <div className='checkbox-input-holder'>
                {interests.map((interest, index) => (
                    <label key={index} className='check-button' 
                    style={{
                        bottom: `50px`, 
                        left: `${index * 150 + 300}px`, 
                        backgroundColor: props.formData.interests.includes(interest) ? '#7653EB' : '#f2f2f2',
                        width: props.formData.interests.includes(interest) ? '120px' : '100px',
                        height: props.formData.interests.includes(interest) ? '120px' : '100px',
                        }}>
                        <input
                            type="checkbox"
                            checked={props.formData.interests.includes(interest)}
                            onChange={() => handleOptionChange(interest)}
                        />
                        <p className='check-button-text'> {interest} </p>
                    </label>
                ))}
            </div>
        </div>
    )
}
