import React, { useState } from 'react'
import { QUESTIONS } from '../assets/quiz'
import ListeChoix from '../Liste-choix/ListeChoix'

export default function Question() {
  const [count, setCount] = useState(0)
  const [choix, setChoix] = useState(null)
  const [total, setTotal] = useState(0)

  if (count >= QUESTIONS.length) {
    return (
      <>
        <h1>Quiz terminé </h1>
        <p>Votre score : {total} </p>
      </>
    )
  }

  const nextQuestion = () => {
    if(choix){
        if(choix == QUESTIONS[count].answerId){
            setTotal(t=>t+1);
        }
        setCount(c=>c+1);
        setChoix(null);
    }
  } 


  return (
    <>
      <h1>{QUESTIONS[count].id} : {QUESTIONS[count].prompt} </h1>
      <ListeChoix choix={QUESTIONS[count].choices} onSelect={setChoix} selectedId={choix} />
      <button onClick={nextQuestion}>suivant</button>
    </>
  )
}
