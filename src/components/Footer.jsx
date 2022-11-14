import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div className="container">
            <ul>
                <h3>Menu Items</h3>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <ul>
                <h3>Other Pages</h3>
                <li><a href="#">Styleguide</a></li>
                <li><a href="#">Changelog</a></li>
                <li><a href="#">Licenses</a></li>
                <li><a href="#">Team</a></li>
            </ul>
            <ul className='social'>
                <h3>My Social Links <i class="fa-solid fa-check"></i></h3>
                <li><a href="https://t.me/+-HcEKA0qaR5iMzAy"><i class="fa-brands fa-telegram"></i>Telegram</a></li>
                <li><a href="#"><i class="fa-brands fa-instagram"></i>Instagram</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer