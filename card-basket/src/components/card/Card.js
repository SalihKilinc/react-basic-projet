import React from 'react'
import "./card.css"
import CardImage from '../cardImage/CardImage'
import CardInfo from '../cardInfo/CardInfo'
import CardTitle from '../cardTitle/CardTitle'

function Card({title ,image,info,onClick}) {
  return (
    <div className='card' onClick={onClick} >
<div className='card-body' > 
<CardTitle title={title}/>
<CardImage image={image} />
<CardInfo info={info} />


</div>

    </div>
  )
}

export default Card