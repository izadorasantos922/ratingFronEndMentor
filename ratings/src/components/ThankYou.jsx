import './ThankYou.css'
import Card from "./Card"
import thankyouimage from '../assets/illustration-thank-you.svg'
const ThankYou = ({rating}) => {
  return <Card>
            <div className="thank-you-container">
            <img src={thankyouimage} alt="thankyouimage" />
            <p className="select">You selected {rating} out 5</p>
            <div className='description'>
                <h1>Thank you!</h1>
                <p> We appreciate you taking the time to give a rating. If you ever need more support, 
                don’t hesitate to get in touch!
                </p>
            </div>
        </div>
  </Card>
}

export default ThankYou