import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import "./dashboard.scss"
import 'chart.js/auto';
import BasicTable from '../Table/table';
import CustomerReview from './Customerreview';
import Updates from './update';
function Dashboard(){
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    // Fetch data from MongoDB
    axios.get('http://localhost:8800/api/posts/')
      .then(response => {
        setPostData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

 
  const postsPerDay = postData.reduce((acc, post) => {
    const date = new Date(post.createdAt).toLocaleDateString();
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const postsPerDayData = {
    labels: Object.keys(postsPerDay),
    datasets: [{
      label: 'Posts per Day',
      data: Object.values(postsPerDay),
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    }]
  };

  // Data for rent rates by city
  const rentRatesByCity = postData.reduce((acc, post) => {
    if (post.type === 'rent') {
      acc[post.city] = (acc[post.city] || []).concat(post.price);
    }
    return acc;
  }, {});

  const rentRatesByCityData = {
    labels: Object.keys(rentRatesByCity),
    datasets: [{
      label: 'Rent Rates by City',
      data: Object.values(rentRatesByCity).map(prices => prices.reduce((a, b) => a + b, 0) / prices.length),
      backgroundColor: 'rgba(255, 159, 64, 0.6)',
    }]
  };

  // Data for properties listed as buy
  const buyRatesByCity = postData.reduce((acc, post) => {
    if (post.type === 'buy') {
      acc[post.city] = (acc[post.city] || []).concat(post.price);
    }
    return acc;
  }, {});

  const buyRatesByCityData = {
    labels: Object.keys(buyRatesByCity),
    datasets: [{
      label: 'Buy Rates by City',
      data: Object.values(buyRatesByCity).map(prices => prices.reduce((a, b) => a + b, 0) / prices.length),
      backgroundColor: 'rgba(153, 102, 255, 0.6)',
    }]
  };

  return (
    <div className="App">
      <div className="Appglass">
        <div className="maindash">
        <div>
      <h2>Posts Per Day</h2>
      <Bar data={postsPerDayData} />
      </div>
      <div>
      <h2>Rent Rates by City</h2>
      <Bar data={rentRatesByCityData} />
      </div>
      <div>
      <h2>Buy Rates by City</h2>
      <Bar data={buyRatesByCityData} />
      </div>
   
        </div>

        <div className="table">
          <BasicTable/>
        </div>

        <div className="review">
        <CustomerReview/>
      </div>

      {/* <div className="update">
        <Updates/>
      </div> */}

      </div>

     
    </div>
  );
}
export default Dashboard;