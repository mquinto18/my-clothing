import React from 'react'
import './style/home.css'
function Home() {
  return (
    <div className='home-container'>
      <div className="home-container-section">
        <div className='home-title'>
            <h1>DISCOVER YOUR<br />FASHIONABLE TREND STYLE</h1>
        </div>
        <div className='home-image'>
          <img src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg" alt="" />
        </div>
        <div className='pay-button'>
            <div className="play-button-box">
              <i class="fa-solid fa-play" style={{color: '#000000'}}></i>
            </div>
        </div>
        <div className='shop-new-arrivals'> 
            <div className="shop-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta inventore soluta aut, 
                  blanditiis beatae quia dolorem ut est magnam dignissimos.</p>
            </div>
            <div className="shop-arivals">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing el.</p>
                <button>Shop New Arrivals</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
