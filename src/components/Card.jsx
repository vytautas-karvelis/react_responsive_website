import React from 'react'
import './Card.css'
const Card = ({title, content, icon, bottomMargin}) => {
    return (
        <div className="card" style={{marginBottom:bottomMargin?'1rem':0}}>
            <div className="icon">
                {icon}
            </div>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}

export default Card
