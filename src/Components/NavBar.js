import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import Avatar from '@mui/material/Avatar';
import { StyledAvatar } from './TripPage/UserList';

const NavBar = ({ userData }) => {
  let userInitials = userData.id
    ? `${userData['first_name'][0]}${userData['last_name'][0]}`
    : 'US';

  return (
    <>
      <nav>
        <li>
          <Link to={`/user/${userData.id}`}>Home</Link>
        </li>
        <li>
          <StyledAvatar className="user-avatar">{userInitials}</StyledAvatar>
        </li>
      </nav>
    </>
  );
};

export default NavBar;
