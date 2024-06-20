import React, { useState } from 'react'
import './style/about.css'

function About() {

  const initialDropdownStates = Array(4).fill(false); // Assuming 4 items, you can adjust based on your actual number of items
  const [dropdownStates, setDropdownStates] = useState(initialDropdownStates);

  const contentData = [
    { title: 'THIS SHIFT WAS DRIFT?', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ' },
    { title: 'THIS SHIFT WAS DRIFT?', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ' },
    { title: 'THIS SHIFT WAS DRIFT?', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ' },
    { title: 'THIS SHIFT WAS DRIFT?', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ' },
  ];

  const toggleDropdown = (index) => {
    setDropdownStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };
  

  return (
    <>
      <div className='about-container'>
        <div className="about-container-section">
            <div className='about-section'>
                <div className='about-left-section'>
                    <div className='about-left-text'>
                         <h1>STYLZE</h1>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta inventore soluta aut, 
                          blanditiis beatae quia dolorem ut est magnam dignissimos.</p>
                    </div>
                    <div className='about-list-text'>
                        <div className="about-list-box">
                        {contentData.map((item, index) => (
                          <div className="about-list" key={index}>
                            <div className='about-list-tag'>
                              <h1 onClick={() => toggleDropdown(index)}>{item.title}</h1>
                              <i class="fa-solid fa-sort-up" style={{color: '#000000'}}></i>
                            </div>
                            {dropdownStates[index] && (
                              <div className='about-list-text'>
                                <p>{item.text}</p>
                              </div>
                            )}
                          </div>
                        ))}
                        </div>
                    </div>
                </div>    
                <div className='about-right-img'>
                    <img src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=625,quality=75,format=auto/in-resources/21e9ae3c-de72-4391-9c4a-c7af58447630/Images/userimages/refresh223/Navigation%20Men.jpg" alt="" />
                </div>
            </div>
        </div>
      </div>

    </>
  )
}

export default About
