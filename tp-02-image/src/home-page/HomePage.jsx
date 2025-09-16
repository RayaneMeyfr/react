import React, { useEffect, useState } from 'react'
import CardImage from '../card-image/CardImage'
import { CATEGORIES, IMAGES } from '../data/data'
import SelectedCategorie from '../selected-categorie/SelectedCategorie'

export default function HomePage() {
  const [image,setImage] = useState(null)
  const [selectionCategories,setselectionCategories] = useState(["toutes"])
  
  useEffect(() => { setTimeout(() => {
    setImage(IMAGES)}, 3000) 
  }, [])
  
  const selected = (selection) => {
    setselectionCategories((prevSelection) => {
      let newSelection;

      if (prevSelection.includes(selection)) {
        newSelection = prevSelection.filter(data => data !== selection)
      } else {
        if (selection === "toutes") {
          newSelection = [selection]
        } else {
          newSelection = [...prevSelection.filter(data => data !== "toutes"), selection]
        }
      }

      if (newSelection.includes("toutes")) {
        setImage(IMAGES) 
      } else if (newSelection.length === 0) {
        setImage([])
      } else {
        setImage(IMAGES.filter(img => img.categories.some(selection => newSelection.includes(selection))))
      }

      return newSelection
    })
  }


  if(image){
     return (
      <div>
        <SelectedCategorie categories={CATEGORIES} onSelected={selected} idSelection={selectionCategories} />
        <CardImage image={image} />
      </div>
    )
  }

  return(
    <div>
      <SelectedCategorie categories={CATEGORIES} onSelected={selected} idSelection={selectionCategories}/>
      <h1>Chargement en cours</h1>
    </div>
  )
 
}
