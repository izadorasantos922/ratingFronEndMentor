import { useState } from 'react'
import './App.css'
import Content from './components/Content'
import ThankYou from './components/ThankYou'

function App() {
const [showThankYouPage, setShowThankYouPage] = useState(false);
const [rating, setRating] = useState(null);

  return (
    <>
    {showThankYouPage ? (
      <ThankYou rating={rating}/>
    ) : (
      <Content
      rating = {rating}
      setRating = {setRating}
      setShowThankYouPage={setShowThankYouPage}
      />
    )}
    </>
  )
}

export default App;
