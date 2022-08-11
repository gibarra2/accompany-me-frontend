import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../styles/NavBar.css';
import Avatar from '@mui/material/Avatar';

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
          <Avatar className="user-avatar">{userInitials}</Avatar>
        </li>
      </nav>
    </>
  );
};

export default NavBar;
