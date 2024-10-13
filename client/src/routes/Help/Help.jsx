// import React, { useState } from 'react';
// import './Help.css'; 
// import faqs from './helpData';

// const Help = () => {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [reviews, setReviews] = useState([]); // State to hold reviews
//   const [reviewText, setReviewText] = useState(""); // State for the review input field

//   // Toggle FAQ answers
//   const toggleAnswer = (index) => {
//     setActiveIndex(activeIndex === index ? null : index); 
//   };

//   // Handle review input change
//   const handleReviewChange = (e) => {
//     setReviewText(e.target.value);
//   };

//   // Handle review submission
//   const handleReviewSubmit = (e) => {
//     e.preventDefault();
//     if (reviewText.trim()) {
//       setReviews([...reviews, reviewText]); // Add new review to the state
//       setReviewText(""); // Clear input field after submission
//     }
//   };

//   return (
//     <div className="help-container">

//       <div className="reviews-section">
//         <h2>Reviews</h2>
//         <form onSubmit={handleReviewSubmit}>
//           <textarea 
//             value={reviewText}
//             onChange={handleReviewChange}
//             placeholder="Write your review here..." 
//             rows="4"
//             className="review-input"
//           />
//           <button type="submit" className="submit-review-btn">Submit Review</button>
//         </form>
        
//         <div className="reviews-list">
//           {reviews.length > 0 ? (
//             reviews.map((review, index) => (
//               <div key={index} className="review-item">
//                 <p>{review}</p>
//               </div>
//             ))
//           ) : (
//             <p>No reviews yet. Be the first to leave one!</p>
//           )}
//         </div>
//       </div>

//       {/* FAQ Section */}
//       <div className="faq-container">
//         <h1>Frequently Asked Questions</h1>
//         <div className="faq-content">
//           <div className="faq-column">
//             {faqs.slice(0, 5).map((faq, index) => (
//               <div key={index} className="faq-item">
//                 <div className="faq-question" onClick={() => toggleAnswer(index)}>
//                   <span>{faq.question}</span>
//                   <span>{activeIndex === index ? "-" : "+"}</span>
//                 </div>
//                 {activeIndex === index && (
//                   <div className="faq-answer">
//                     <p>{faq.answer}</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//           <div className="faq-column">
//             {faqs.slice(5).map((faq, index) => (
//               <div key={index + 5} className="faq-item">
//                 <div className="faq-question" onClick={() => toggleAnswer(index + 5)}>
//                   <span>{faq.question}</span>
//                   <span>{activeIndex === index + 5 ? "-" : "+"}</span>
//                 </div>
//                 {activeIndex === index + 5 && (
//                   <div className="faq-answer">
//                     <p>{faq.answer}</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* <div className="additional-info">
//           <p>You can change your email address by going to your account settings.</p>
//           <p>For support, please contact us through the in-app help menu.</p>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Help;

import React, { useState } from 'react';
import './Help.css'; 
import faqs from './helpData';
import help from './help.json';
import Lottie from "react-lottie"

const Help = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [reviews, setReviews] = useState([]); // State to hold reviews
  const [reviewText, setReviewText] = useState(""); // State for the review input field


  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: help,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  // Toggle FAQ answers
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); 
  };

  // Handle review input change
  const handleReviewChange = (e) => {
    setReviewText(e.target.value);
  };

  // Handle review submission
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (reviewText.trim()) {
      setReviews([...reviews, reviewText]); // Add new review to the state
      setReviewText(""); // Clear input field after submission
    }
  };

  return (
    <div className="help-container">

      <div className="help-header">
        <div className="help-question">
          <h2>How can we help?</h2>
        </div>
        <div className="help-animation">
          <Lottie options={defaultOptions} />
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="faq-container">
        <h1 className='faq-title'>Frequently Asked Questions</h1>
        <div className="faq-content">
          <div className="faq-column">
            {faqs.slice(0, 5).map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question" onClick={() => toggleAnswer(index)}>
                  <span>{faq.question}</span>
                  <span>{activeIndex === index ? "-" : "+"}</span>
                </div>
                {activeIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="faq-column">
            {faqs.slice(5).map((faq, index) => (
              <div key={index + 5} className="faq-item">
                <div className="faq-question" onClick={() => toggleAnswer(index + 5)}>
                  <span>{faq.question}</span>
                  <span>{activeIndex === index + 5 ? "-" : "+"}</span>
                </div>
                {activeIndex === index + 5 && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <h2 className='review-title'>Reviews</h2>
        <form onSubmit={handleReviewSubmit}>
          <textarea 
            value={reviewText}
            onChange={handleReviewChange}
            placeholder="Write your review here..." 
            rows="4"
            className="review-input"
          />
          <button type="submit" className="submit-review-btn">Submit Review</button>
        </form>
        
        <div className="reviews-list">
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="review-item">
                <p>{review}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet. Be the first to leave one!</p>
          )}
        </div>
      </div>

    </div>
  );
};

export default Help;
