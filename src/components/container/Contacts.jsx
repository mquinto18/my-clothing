import React from 'react'
import './style/contact.css'
function Contacts() {
  return (
    <>
      <div className='contact-container'>
          <div className='contact-section-container'>
              <div className="contact-left-section">
                  <div className='contact-text'>
                      <h1>Contact Us</h1>
                  </div>
                  <div className='contact-form'>
                      <form action="">
                        <div className='contact-form-input'>
                          <input type="text" placeholder='Name'/>
                          <input type="text" placeholder='Enter your Email'/>
                          <textarea name="" id="" cols="30" rows="10" placeholder="What's on your mind?"></textarea>
                        </div>
                        <div className='contact-btn'>
                          <button>Submit Now</button>
                        </div>
                      </form>
                  </div>
              </div>
              <div className='contact-images'>
                  <div className="contact-text-right">
                    <h1>THIS SHIFT WAS DRIFT?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta inventore 
                      soluta aut, blanditiis beatae quia dolorem ut est magnam dignissimos.
                      soluta aut, blanditiis beatae quia dolorem ut est magnam dignissimos.</p>
                  </div>
                  <div className='contact-img'>
                      <img src="https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Contacts
