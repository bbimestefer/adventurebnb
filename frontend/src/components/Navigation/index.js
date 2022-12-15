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
        <NavLink exact to="/">adventurebnb</NavLink>
      {/* </li> */}
      {isLoaded && (
        <div style={{"display": 'flex', 'alignItems': 'center', 'gap':'10px'}}>
          <div>
            { sessionUser && (
              <NavLink to='/new'>Host your home</NavLink>
            )}
          </div>
          <ProfileButton user={sessionUser} />
        </div>
      )}
    </div>
  );
}

export default Navigation;
