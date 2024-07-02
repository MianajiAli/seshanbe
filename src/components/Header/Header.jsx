import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className='fixedHeader select-none'>
      <div className='headerContainer'>
        <div>
          <Link to="/">
            <span className='logo'>VANI<b>3</b>H</span>
          </Link>
        </div>
        <div className='nav-links '>
          <Link to="/shop">فروشگاه</Link>
          <Link to="/blog">وبلاگ</Link>
          <Link to="/about-us">درباره ما</Link>
          <Link to="/contact">تماس</Link>
          <Link to="/menu">رستوران</Link>
        </div>
      </div>
      <div className='downHeader'>
        <span className='smooth-300'>ثبت نام | ورود</span>
        <Link className='smooth-300' to="/cart">سبد خرید</Link>

      </div>
    </div>
  );
}

export default Header;
