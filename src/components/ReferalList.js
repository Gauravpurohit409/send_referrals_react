import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
// import ImageIcon from '@mui/icons-material/Image';
// import WorkIcon from '@mui/icons-material/Work';
// import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function ReferalList({userList}) {
  
  return (
    <div>
        {userList.map(user => (
           <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
            <ListItemAvatar>
            <Avatar>
              {/* <ImageIcon /> */}
            </Avatar>
          </ListItemAvatar>
            <ListItemText primary={user.email} secondary={user.invitation_accepted ? "invitaion accepted" : "invitaion pending"} />
            </ListItem>
            </List>
        ))}
    </div>
  );
}
