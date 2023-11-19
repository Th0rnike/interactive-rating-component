import thanks from '../images/illustration-thank-you.svg'

const ThankYou = (props) => {
    return (
        <div className='thankyou-component'>
            <img src={thanks} alt="" />
            <p className='higlight'>You selected {props.rating} out of 5</p>
            <h1 className='main-text'>Thank you!</h1>
            <p className='paragraph'>We appreciate you taking the time
                to give a rating. If you ever need more
                support, don't hesitate to get in touch!
            </p>
        </div>
    )
}

export default ThankYou;

