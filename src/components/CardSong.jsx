const CardSong = ({title, genero, album, banda})=> {

    //const { genero, album, banda}= props
    return (
        <div className="card-song">
            <h2>{title}</h2>
            <h3><span>Genero:</span>{genero}</h3>
            <h3><span>Album:</span>{album}</h3>
            <h3><span>Banda:</span>{banda}</h3>
        </div>
    )
}


export default CardSong