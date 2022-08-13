import React from 'react';
import Stack from '@mui/material/Stack';
import { useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';

const UserList = ({ users }) => {
  let { userID } = useParams();

  const makeUserAvatars = (userArr) => {
    return userArr
      .filter((user) => user.id !== parseInt(userID))
      .map((user) => {
        return (
          <Avatar
            className="user-avatar"
            sx={{ bgcolor: blue[500], height: 56, width: 56 }}
          >{`${user['first_name'][0]}${user['last_name'][0]}`}</Avatar>
        );
      });
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      {users && makeUserAvatars(users)}
    </Stack>
  );
};

export default UserList;
