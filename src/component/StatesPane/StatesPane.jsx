import React, { useState, useEffect } from 'react';

import {List} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PersonAdd from '@material-ui/icons/PersonAdd';
import UserStateBox from './../UserStateBox/UserStateBox'

export default function StatesPane() {
  const [userList, setUserList] = useState([])

  useEffect(()=>{
    fetch("https://localhost:5001/users")
    .then(res => res.json())
    .then(
      (result) => {
        setUserList(result)
      },
      (error) => {
        setUserList([])
      }
    ).catch(e => console.log(e))
  }, []);

  const userStates = [1,2,3,4,5,6,7,8,9,10]

  return (
  <div className='flex-container'>
      <div>
          <List component="nav" aria-label="contacts">
            {userList.map((user) => (
              <ListItem button>
                <ListItemText primary={user.nickName} /> <PersonAdd/>
              </ListItem>
            ))}
          </List>
      </div>

      <div className="flex-user-state-container">
        {userStates.map((userState) => 
            <UserStateBox key={userState.id} />
        )}
      </div>
  </div>)
}