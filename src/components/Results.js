// results
// Display definition and phonetics
const Results = (props) => {
  
    let audio = new Audio(`https://media.merriam-webster.com/audio/prons/en/us/mp3/${props.audioLetter}/${props.audio}.mp3`)
    
    const play = () => {
        audio.play()
    }
   
    return(
        <div className='wrapper outer-word-container'>
            <div className="inner-word-container">
                <h2>{props.word}</h2>
                <div className="pronunciation-container">
                    <p className='pronunciation'>Pronunciation: “{props.pronunciation}”</p>
                    <div>
                        <button onClick={ play } className="audio"> <i className="fa fa-play-circle" aria-label="Click to play the pronunciation."></i> </button>
                    </div>
                </div>
                <div className="definition-container">
                   <p>Definition: </p> <blockquote className='definition'> “{props.definition}”</blockquote>
                </div>
                
            </div>
        </div>
    )
}

export default Results;