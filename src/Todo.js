import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
  makeStyles,
} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import DeleteOutlineTwoToneIcon from "@material-ui/icons/DeleteOutlineTwoTone";
import EditIcon from "@material-ui/icons/Edit";
import "./Todo.css";
import db from "./firebase.config";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    marginRight: theme.spacing(2),
  },
  paper: {
    position: "absolute",
    width: 400,
    top: 0,
    transform: "translateX(50%) translateY(50%)",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing[(2, 4, 3)],
  },
}));

function Todo({ id, text }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();
  const handleOpen = () => {
    setOpen(true);
  };

  const updateTodo = () => {
    // ? update the todos with new input text
    db.collection("todos").doc(id).set(
      {
        todo: input,
      },
      { merge: true }
    );

    setOpen(false);
  };
  return (
    <React.Fragment>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h1>Update your todo</h1>
          <input placeholder={text} value={input} onChange={(e) => setInput(e.target.value)} />
          <Button onClick={updateTodo}>Update Todo</Button>
        </div>
      </Modal>
      <List className="todo__list">
        <ListItem>
          <ListItemAvatar>
            <ListItemText primary={text} key={id} />
          </ListItemAvatar>
        </ListItem>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<EditIcon />}
          onClick={(e) => setOpen(true)}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={(e) => db.collection("todos").doc(id).delete()}
        >
          Delete
          <DeleteOutlineTwoToneIcon />
        </Button>
      </List>
    </React.Fragment>
  );
}

export default Todo;
