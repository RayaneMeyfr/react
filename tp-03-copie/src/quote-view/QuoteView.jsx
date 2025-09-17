import React, { useEffect, useState } from 'react'
import { fetchPost } from '../service/api';
import useCopy from '../hook/useCopy';
import './QuoteView.css';


export default function QuoteView() {
    
    const [quoteData,setQuoteData] = useState(null);
    const [error, setError] = useState("");
    const {changeWord,copyWord} = useCopy()

    useEffect(() => {
        fetchPost().then(data => {
                        setQuoteData(data)
                        changeWord(data.quote)
                        // throw new Error("Erreur de test : rendu cassé intentionnellement");
                    }).catch(e => setError(e.message))
    },[])

    const reload = () => (
        fetchPost().then(data => {
                    setQuoteData(data)
                    changeWord(data.quote)
                }).catch(e => setError(e.message))
    )

    if(error) return (
                <div className="container">
                    <p className="error">Erreur : {error}</p>
                </div>
            )
            
    if(!quoteData) return <p className="loading">Chargement...</p>
    
    return (
        <div className="container">
            <h1 className="quote-text">“{quoteData.quote}”</h1>
            <h2 className="quote-author">— {quoteData.author}</h2>
            <div className="quote-buttons">
                <button onClick={reload} className="btn reload">Reload</button>
                <button onClick={copyWord} className="btn copy">Copy</button>
            </div>
        </div>
    )
}
