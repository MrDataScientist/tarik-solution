import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/cart.svg';
import CartIcon from '../cart-icon/cart-icon.component'
// import CartIconComponent from '../cart-icon/cart-icon.component'
// import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import './header.styles.scss';
// import { connect } from 'react-redux';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <div className='logo-container' >
      <Logo className='logo' />
    </div>
    <div className='options'>
      <div className='shop'>
        SHOP
      </div>
      <div className='option'>
        CONTACT
      </div>
      <CartIcon />
    </div>
  </div>
);

/* const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
})
 */
//console.log("tada:", mapStateToProps) // TODO: delete it

//  export default connect(mapStateToProps)(Header);

export default Header
