import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import './Todo.css';

function Todo({ id, text }) {
  console.log(text);
  return (
    <List className='todo__list'>
      <ListItem>
        <ListItemAvatar>
          <ListItemText primary={text} key={id} />
        </ListItemAvatar>
      </ListItem>
    </List>
  );
}

export default Todo;
