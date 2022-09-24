import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import homeImage from '../images/homeImage.png'

function Home() {
  const navigate = useNavigate();
  return (
    <div className='home_container'>
        <div className='right_container'>
            <div className='header'>
                <h2 className='title'>Imagine if </h2>
                <h2 className='spacial_string'>Snapchat</h2>
                <h2 className='title'>had events.</h2>
                <p className='sub_title'>Easily host and share events with your friends across any social media.</p>
               
            </div>
            
            
        </div>
        <div className='left_container'>
            <img src={homeImage} />
        </div>
        <div className='button_container'>
            <button onClick={() => navigate('/create')}>🎉 Create my event</button>
        </div>
       
       
    </div>
  )
}

export default Home