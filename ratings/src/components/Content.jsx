import Card from './Card'
import { useState } from 'react'
import './Content.css'
import iconStar from '../assets/icon-star.svg'

const Content = ({rating, setRating, setShowThankYouPage}) => {

  const [activeRating, setActiveRating] = useState({
    oneStar: false, 
    twoStar: false,
    threeStar: false,
    fourStar: false,
    fiveStar: false,
  });

  const handleSubmit = () =>{
    if(!rating) return;

    setShowThankYouPage(true);
  }

  return <Card>
       <div className="star">
        <img src={iconStar} alt="" />
       </div>
       <h1>How did we do?</h1>
       <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
       <div className="ratings">
        <div className={activeRating.oneStar ? "rating active" : "rating"} 
        onClick={() => {
          setActiveRating({oneStar : true})
          setRating(1);
        }}>1</div>
        <div className={activeRating.twoStar ? "rating active" : "rating"}
        onClick={() => {
          setActiveRating({twoStar : true})
          setRating(2);
        }}
        >2</div>
        <div className={activeRating.threeStar ? "rating active" : "rating"}
        onClick={() => {
          setActiveRating({threeStar : true})
          setRating(3);
        }}
        >3</div>
        <div className={activeRating.fourStar ? "rating active" : "rating"}
        onClick={() => {
          setActiveRating({fourStar : true})
          setRating(4);
        }}
        >4</div>
        <div className={activeRating.fiveStar ? "rating active" : "rating"}
        onClick={() => {
          setActiveRating({fiveStar : true})
          setRating(5);
        }}>5</div>
       </div>
       <button className="btn" onClick={handleSubmit}>Submit</button>
    </Card>
}

export default Content