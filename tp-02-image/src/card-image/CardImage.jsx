import React from 'react'
import './CarImage.css'

export default function CarImage({ image }) {
  if(image.length === 0){
    return (
      <p>vide</p>
    )
  }
  return (
    <ul className="car-grid">
      {image.map((info) => (
        <li key={info.id} className="car-card">
          <img src={info.url} alt={info.title} />
          <p>{info.title}</p>
          <ul>
            {info.categories.map((titre, index) => (
              <li key={index}>{titre}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}
