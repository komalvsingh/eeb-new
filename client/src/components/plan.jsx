// src/components/PlanPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PlanPage = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/api/payment'); // Replace with actual API
      if (response.data.success) {
        setPaymentSuccess(true);
        localStorage.setItem('paymentDone', 'true'); // Save payment status
        setTimeout(() => {
          navigate('/welcome'); // Redirect to welcome page after payment
        }, 2000);
      }
    } catch (error) {
      console.error('Payment failed', error);
      alert('Payment failed, please try again.');
    } finally {
      setLoading(false);
    }
  };
  

  if (paymentSuccess) {
    return <h1>Welcome! Your payment was successful. You can now access all features.</h1>;
  }

  return (
    <div>
      <h2>Select a Plan</h2>
      <p>Please select a plan and complete your payment to unlock the full functionality of the website.</p>
      <button onClick={handlePayment} disabled={loading}>
        {loading ? 'Processing Payment...' : 'Pay Now'}
      </button>
    </div>
  );
};

export default PlanPage;
