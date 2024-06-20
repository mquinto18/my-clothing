import React from 'react'
import '../Navbar/navbar.css';
function Navbar() {
  return (
  <>
      <div className='navar-container'>
          <div className='navbar-container-section'>
              <div className='stylez-logo'>
                  <h1 className=''>STYLEZ</h1>
              </div>
              <div className='for-input-tag'>
                  <div className="input-search">
                      <i class="fa-solid fa-magnifying-glass" style={{ color: '#000000' }}></i>
                      <input type="text" placeholder='What are you looking for?' />
                  </div>
                  <div className='favorites-cart-section'>
                      <i class="fa-regular fa-heart" style={{ color: '#000000' }}></i>
                      <i class="fa-solid fa-cart-shopping" style={{ color: '#000000' }}></i>
                  </div>
              </div>
          </div>
      </div>
      <div className='menu-list-container'>
            <div className="menu-list-container">
                <ul className='menu-unlisted'>
                  <li>HOME</li>
                  <li>ALL TIME</li>
                  <li>PRODUCTS</li>
                  <li>COLECTION</li>
                  <li>ABOUT</li>
                  <li>CONTACTS</li>
                </ul>
            </div>
        </div>
  </>
  )
}

export default Navbar
