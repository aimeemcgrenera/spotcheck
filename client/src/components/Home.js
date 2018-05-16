import React from 'react';
import './Index.css';
import image from '../spotcheck.jpg'


const Home = () => {
  return (
    <div className="HomePage">
      <h2>Welcome to SpotCheck</h2>
      <p class="text-info">Created to help Chicago residents be confident in where they park, without the fear of unexpected parking tickets.</p>
      <img src={image} width="600px"/>
    </div>
  );
};

export default Home;
