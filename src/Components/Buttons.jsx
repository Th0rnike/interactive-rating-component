const Buttons = (props) => {
    

    return(
        <div className="buttons">
            <ul onClick={props.ratingClick}>
                <button className="numbers">1</button>
                <button className="numbers">2</button>
                <button className="numbers">3</button>
                <button className="numbers">4</button>
                <button className="numbers">5</button>
            </ul>
            <button id="submit" onClick={props.onClick}>submit</button>
        </div>
    )
}

export default Buttons;