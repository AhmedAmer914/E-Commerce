import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../img/logo.png'
import { FaSearch, FaRegHeart, FaBars } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import './header.css'
import { CartContext } from '../context/CartContext';

function TopHeader() {
  const { cartItems } = useContext(CartContext) || { cartItems: [] }
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)


  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false)
        setMobileSearchOpen(false)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleSearchSubmit = (e) => {
    e.preventDefault()
  
    setMobileSearchOpen(false)
    setMenuOpen(false)
  }

  return (
    <div className='top-header'>
      <div className="container">
        {/* <Link to="/"><img src={Logo} alt="Logo" className="logo" /></Link> */}

        <form action="" className={`search_box ${mobileSearchOpen ? 'open' : ''}`} onSubmit={handleSearchSubmit}>
          <input type='text' name='search' id='search' placeholder='Search For Products' />
          <button type='submit'><FaSearch /></button>
        </form>

        <div className="header_icons">
          <button className="icon mobile-search-btn" aria-label="search" onClick={() => setMobileSearchOpen(s => !s)}>
            <FaSearch />
          </button>

          <div className="icon">
            <FaRegHeart />
            <span className='count'>0</span>
          </div>

          <div className="icon">
            <Link to="/cart">
              <TiShoppingCart />
              <span className='count'>{(cartItems && cartItems.length) || 0}</span>
            </Link>
          </div>

          <button className={`icon mobile-menu-btn ${menuOpen ? 'open' : ''}`} aria-label="menu" onClick={() => setMenuOpen(s => !s)}>
            <FaBars />
          </button>
        </div>
      </div>

      <nav className={`mobile_nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/accessories" onClick={() => setMenuOpen(false)}>Accessories</Link></li>
          <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default TopHeader
