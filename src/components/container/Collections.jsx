import React from 'react'
import './style/collections.css'
function Collections() {
  return (
    <>
      <div className="collections-container">
          <div className="collections-conatainer-section">
              <div className="collection-section">
                  <div className="collection-image">
                      <img src="https://images.pexels.com/photos/18186107/pexels-photo-18186107/free-photo-of-t-shirt-hanging-on-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                  </div>
                  <div className="collections-information">
                      <div className='collection-text'>
                          <h1>POLO COLLECTIONS</h1>
                      </div>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta inventore soluta aut, 
                        blanditiis beatae quia dolorem ut est magnam dignissimos.</p>
                      <div className='collections-btn'>
                          <button>View More</button>
                      </div>
                  </div>
              </div>
              <div className="collection-section-second">
                  <div className="collection-image">
                      <img src="https://images.pexels.com/photos/2112636/pexels-photo-2112636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                  </div>
                  <div className="collections-information">
                      <div className='collection-text'>
                          <h1>SHIRT COLLECTIONS</h1>
                      </div>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta inventore soluta aut, 
                        blanditiis beatae quia dolorem ut est magnam dignissimos.</p>
                      <div className='collections-btn'>
                          <button>View More</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>

    </>
  )
}

export default Collections
