import React from 'react'

function Header() {
  return (
    <header>
        <div className="container">
            <div className="left">
                <h3><img src="/img/fire.png" width="20px" alt="" /> FUTURE OF ESPORTS</h3>
                <h1>Unleash the Next Generation of Gaming</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.</p>
                <button className='btn1'>Explore More <i class="fa-solid fa-arrow-right"></i></button>
                <button className='btn2'>View our team <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="right">
                <img src="/img/header.png" alt="" />
            </div>
        </div>
    </header>
  )
}

export default Header