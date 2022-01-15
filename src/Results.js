// Results.js

const Result = (props) => {
    return (
        <div>
            <h2>{props.diction.meta.id}</h2>
            <p>{props.diction.hwi.prs.mw}</p>

        </div>
    )
}