// results

const Results = (props) => {
    return(
        <div className='wrapper outer-word-container'>
            <div className="inner-word-container">
                <h2>{props.word}</h2>
                <p className='pronunciation'>Pronunciation: “{props.pronunciation}”</p>
                <div className="definition-container">
                    <blockquote className='definition'>Definiton: “{props.definition}”</blockquote>
                </div>
            </div>
        </div>
    )
}

export default Results;