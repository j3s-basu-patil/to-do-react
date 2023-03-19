import {
  Alert,
  Button,
  Card,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "./Container";
import TaskList from "./TaskList";
import AddTaskIcon from "@mui/icons-material/AddTask";
function Home() {
  let todoList = useSelector((state) => state.todoManager.list);
  const dispatch = useDispatch();
  const inputTaskRef = useRef(null);
  const vertical = "bottom";
  const horizontal = "center";
  const [taskName, setTaskName] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  useEffect(() => {
    inputTaskRef.current.focus();
  }, []);

  const handleAdd = () => {
    let exist =
      todoList.filter((item) => item.title === taskName).length > 0
        ? true
        : false;
    if (!exist) {
      dispatch({ type: "ADD", value: taskName });
    } else {
      setOpenSnackbar(true);
    }
  };

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => dispatch({ type: "INIT", value: json.slice(1,10) }))
  },[])
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={4}></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          style={{ backgroundColor: "#e4f2ff" }}
        >
          <Container>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h5">To Do List</Typography>
            </div>
          </Container>

          <Container>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <TextField
                label="Task"
                placeholder="Type here..."
                ref={inputTaskRef}
                size="small"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
              <Button
                color="primary"
                variant="contained"
                size="small"
                startIcon={<AddTaskIcon />}
                disabled={!taskName}
                onClick={() => handleAdd()}
              >
                <Typography variant="button">Add</Typography>
              </Button>
            </div>
          </Container>
          {todoList.length > 0 && (
            <Container>
              <TaskList></TaskList>
            </Container>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}></Grid>
      </Grid>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert severity="error">Task Already Exist...!</Alert>
      </Snackbar>
    </>
  );
}

export default Home;
