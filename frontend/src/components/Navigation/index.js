import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){

  const sessionUser = useSelector(state => state.session.user);

  return (
    <div className='nav-bar-wrapper'>
      {/* <li> */}
        <NavLink exact to="/" className='home-link'>adventurebnb</NavLink>
      {/* </li> */}
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
  );
}

export default Navigation;
