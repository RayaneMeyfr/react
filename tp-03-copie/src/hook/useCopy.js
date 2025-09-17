import { useState } from "react"

export default function useCopy(wordParam = "default" ){
    const [word,setWord] = useState(wordParam);

    const changeWord = (newWord) => setWord(newWord);

    const copyWord = async () => {
        try {
            await navigator.clipboard.writeText(word);
        }catch (e){
            console.error("probleme lors de la copie "+e)
        }
    }


    return {changeWord,copyWord};
}