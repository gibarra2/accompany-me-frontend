import React from 'react';
import Stack from '@mui/material/Stack';
import { useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';

export const StyledAvatar = styled((props) => <Avatar {...props} />)`
  background-color: #58a4b0;
  height: 50px;
  width: 50px;
  font-weight: bold;
`;

const UserList = ({ users }) => {
  let { userID } = useParams();

  const makeUserAvatars = (userArr) => {
    return userArr
      .filter((user) => user.id !== parseInt(userID))
      .map((user) => {
        return (
          <StyledAvatar
            key={user.id}
            className="user-avatar"
          >{`${user['first_name'][0]}${user['last_name'][0]}`}</StyledAvatar>
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
