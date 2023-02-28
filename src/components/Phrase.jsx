    import Jphrase from "./phrases.json"
    const Phrase =()=>{


    return (
        <div className="phrase-cookie">
            <h1>Esta es la frase
            </h1>
            <h2>este es el autor</h2>
            <button onClick={ () => setIsVisible(!isVisible)}>Aparece/desaparece</button>
        </div>
    )
    }

    export default Phrase;