import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='navbar-logo' onClick={closeMobileMenu}>
            < img src = "../image/terv-logo.png" alt = "" />
          </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
              className='nav-links'
               onClick={closeMobileMenu}>
                Practice
              </Link>
            </li>           
            <li className='nav-item'>
              <Link
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Perform
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Prepare
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu} 
              >
                Sign in
              </Link>
            </li>
          </ul>
          {button && <Button className='btn--primary'>SIGN IN</Button>}
        </div>
      </nav> 
    </>
  );
}

export default Navbar;
