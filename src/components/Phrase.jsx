const Phrase =({phraseData})=>{


    return (
        <div className="phrase-cookie">
            <h1>{phraseData.phrase}</h1>
            <h2>{phraseData.author}</h2>
        </div>
    )
    }

    export default Phrase;