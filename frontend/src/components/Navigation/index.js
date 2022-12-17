import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from './images/logo.png'

function Navigation({ isLoaded }){

  const sessionUser = useSelector(state => state.session.user);

  return (
    <div className='nav-bar-wrapper'>
      <div className='nav-bar'>
        <div>
        <NavLink exact to="/" className='home-link'><img style={{"height":"25px", "width":"25px"}} src={logo} alt='logo'></img> adventurebnb</NavLink>
        </div>
        <div style={{"width":"50px"}}></div>
        {isLoaded && (
          <div style={{"display": 'flex', 'alignItems': 'center', 'gap':'20px'}}>
            <div>
              { sessionUser && (
                <NavLink to='/new' style={{"textDecoration":"underline"}}>adventurebnb your home</NavLink>
              )}
            </div>
            <ProfileButton user={sessionUser} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navigation;
