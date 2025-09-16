import React from 'react'
import './SelectedCategorie.css'

export default function SelectedCategorie({ categories, onSelected, idSelection }) {
  return (
    <ul>
      {categories.map((nom, index) => {
        if (idSelection) {
          if (idSelection.includes(nom)) {
            return (
              <li key={index} className="active" onClick={() => onSelected(nom)}>{nom}</li>
            )
          }
        }
        return (
          <li key={index} onClick={() => onSelected(nom)}>{nom}</li>
        )
      })}
    </ul>
  )
}
