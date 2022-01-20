// results

const Results = (props) => {
    return(
        <div className='wrapper outer-word-container'>
            <div className="inner-word-container">
                <h2>{props.word}</h2>
                <p className='pronunciation'>Pronunciation: “{props.pronunciation}”</p>
                <audio controls src={`https://media.merriam-webster.com/audio/prons/en/us/mp3/${props.audioLetter}/${props.audio}.mp3`}></audio>
                <div className="definition-container">
                    <blockquote className='definition'>Definiton: “{props.definition}”</blockquote>
                </div>
                
            </div>
        </div>
    )
}

export default Results;