import React from 'react'
import './cards.css'


const Cards = ({title, imageUrl, body}) => {
  return (
    <div className='container'>
      <div className='image'>
        <img src={imageUrl} alt='beauty products'/>
      </div>
      <div className='card-content'>
        <div className='card-title'>
          <h3>{title}</h3>
        </div>
        <div className='card-body'>
          <p>{body}</p>
        </div>
        <div className='btn'>
          <button>
            <a href='_blank'>View More</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cards