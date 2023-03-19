import {
  Avatar,
  Button,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import TaskIcon from "@mui/icons-material/Task";
import { useDispatch } from "react-redux";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import RemoveDoneTwoToneIcon from "@mui/icons-material/RemoveDoneTwoTone";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
function Task(props) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(props.item.title);

  const handleEdit = () => {
    setEdit(false);
    dispatch({ type: "EDIT", value: { ...props.item, title: name} })
  }
  return (
    <>
   
   
      {edit ? (
        <ListItem>
        
          <TextField
            label="Edit"
            placeholder="Type here..."
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <Button
            color="primary"
            variant="contained"
            size="small"
            onClick={() => handleEdit()}
          >
            <Typography variant="button">Done</Typography>
          </Button>
          </ListItem>
      ) : (
        <ListItem
          secondaryAction={
            <>
              <Tooltip title={props.item.completed ? "Undo" : "Mark as done"}>
                <IconButton
                  edge="end"
                  onClick={() =>
                    dispatch({ type: "CHECKED", value: props.item.id })
                  }
                >
                  {props.item.completed ? (
                    <RemoveDoneTwoToneIcon />
                  ) : (
                    <CheckCircleTwoToneIcon color="success" />
                  )}
                </IconButton>
              </Tooltip>
              <Tooltip title={`Delete ${props.item.title}`}>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() =>
                    dispatch({ type: "DELETE", value: props.item.id })
                  }
                >
                  <DeleteIcon color="danger" />
                </IconButton>
              </Tooltip>
            </>
          }
        >
          <ListItemAvatar onClick={()=>setEdit(true)}>
            <Avatar>
              <EditTwoToneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={props.item.title}
            style={{
              textDecoration: props.item.completed ? "line-through" : "",
            }}
          />
        </ListItem>
      )}
    </>
  );
}

export default Task;
