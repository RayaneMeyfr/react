import React from 'react'

export default function ListeChoix({ choix, onSelect }) {
  return (
    <ul>
      {choix.map((item) => (
        <li key={item.id} onClick={() => onSelect(item.id)}> {item.label} </li>
      ))}
    </ul>
  )
}
