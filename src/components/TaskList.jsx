import { Button, List } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Task from './Task';

function TaskList() {

 let todoList = useSelector(state=> state.todoManager.list);
 let markedAll = useSelector(state=> state.todoManager.markedAll);
  const dispatch = useDispatch();

  const handleChecks = () => {
    if(markedAll){
      dispatch({type:'UNDO_ALL', value : ''})
    } else if(!markedAll) {
      dispatch({type:'MARK_ALL', value : ''})
    } 
    dispatch({type:'SET_MARK_ALL', value : ''})
  }
  return (
    <>
    <Button onClick={
       ()=> 
        handleChecks()
       
    }>
    {markedAll ? 'Undo All' : 'Mark All'}</Button>

    <List>
    {
         todoList.map((task)=>{
            return (
             <Task item={task}/>   
            )
        })
    }
   </List>
    </>
  )
}

export default TaskList