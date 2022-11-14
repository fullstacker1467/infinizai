import React from 'react'

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='container'>
                    <div className='navbar__wrap'>
                        <a href="#logo" className='logo' id='logo'><img className='logo-img' src="/img/logo.png" /></a>
                        
                        <div className="hamb">
                            <div className='hamb__field' id="hamb">
                                <span className='bar'></span> <span className='bar'></span>
                                <span className='bar'></span>
                            </div>
                        </div>
                        <ul className='menu' id='menu'>
                            <li><a href='#home'>Home</a></li>
                            <li><a href='#about'>About</a></li>
                            <li><a href='#team'>Team</a></li>
                            <li><a href="#shop">Shop</a></li>
                            <li><a href="#pages">Pages</a></li>
                        </ul>
                        <div className="nbtn d-flex items-center justify-betweeen">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <button>Contact Us</button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='popup' id='popup'></div>
        </>
    )
}

export default Navbar