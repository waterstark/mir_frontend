import * as React from 'react';
import './form.css'

export const FormOptions = (props) =>
{

    const goals = [
        "Серьезные отношения",
        "Флирт",
        "Дружба",
        "Ha одну ночь",
    ];

    const smoking = [
        "Не в отношениях",
        "Всё сложно",
        "В отношениях"
    ];

    const sport = [
        "Худое",
        "Полное",
        "Спортивное",
        "Среднее"
    ];


    return(
        <div className='form'>        
            <h1>Заполните ваш профиль</h1>
            <h2> Я ищу{props.error && <sup className='error'>*</sup>} </h2>
            <div className="button-list">
                {goals.map((option) => (
                    <label key={option} className="radio-button-label" style={{backgroundColor: props.formData.goal === option ? '#7653EB' : '#f2f2f2'}}>
                        <input
                            type="radio"
                            value={option}
                            checked={props.formData.goal === option}
                            onChange={() => props.updateFormData({
                                    ...props.formData,
                                    goal: option,
                                })}
                        />
                        <span className="button-text">{option}</span>
                    </label>
                ))}
            </div>
            <h2>Отношение к курению{props.error && <sup className='error'>*</sup>}</h2>
            <div className="button-list">
                {smoking.map((option) => (
                    <label key={option} className="radio-button-label" style={{backgroundColor: props.formData.smoking === option ? '#7653EB' : '#f2f2f2'}}>
                        <input
                            type="radio"
                            value={option}
                            checked={props.formData.smoking === option}
                            onChange={() => props.updateFormData({
                                ...props.formData,
                                smoking: option,
                            })}
                        />
                        <span className="button-text">{option}</span>
                    </label>
                ))}
            </div>            
            <h2>Как часто занимаешься спортом{props.error && <sup className='error'>*</sup>}</h2>
            <div className="button-list">
                {sport.map((option) => (
                    <label key={option} className="radio-button-label" style={{backgroundColor: props.formData.sport === option ? '#7653EB' : '#f2f2f2'}}>
                        <input
                            type="radio"
                            value={option}
                            checked={props.formData.sport === option}
                            onChange={() => props.updateFormData({
                                ...props.formData,
                                sport: option,
                            })}
                        />
                        <span className="button-text">{option}</span>
                    </label>
                ))}
            </div>
            {props.error && <p className='error'>{props.error}</p>}
        </div>
    )
}