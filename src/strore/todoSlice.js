import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [
    
  ],
  markedAll : false
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  extraReducers: builder => {
    builder.addCase('INIT', (state, action) => {
       
        state.list = action.value
    });
    builder.addCase('ADD', (state, action) => {
        let newList = [...state.list];
        newList.push({
            title : action.value,
            id: state.length,
            completed : false
        })
        state.list = [...newList]
    });
   
    builder.addCase('DELETE', (state, action) => {
        let newList = [...state.list];
        state.list = newList.filter(item=> item.id !== action.value)
    });

    builder.addCase('CHECKED', (state, action) => {
        let newList = [...state.list];
        newList.forEach(item=> {
            if(item.id === action.value) {
                item.completed = !item.completed
            }
        })
        state.list = [...newList]
    });
    builder.addCase('EDIT', (state, action) => {
        let newList = [...state.list];
        newList.forEach(item=> {
            if(item.id === action.value.id) {
                item.title = action.value.title
            }
        })
        state.list = [...newList]
    });
    builder.addCase('MARK_ALL', (state, action) => {
        let newList = [...state.list];
        newList.forEach(item=> {
            
                item.completed = true
        })
        state.list = [...newList]
    });
    builder.addCase('UNDO_ALL', (state, action) => {
        let newList = [...state.list];
        newList.forEach(item=> {
                item.completed = false
        })
        state.list = [...newList]
    });
    builder.addCase('SET_MARK_ALL', (state, action) => {
        state.markedAll = !state.markedAll
    });
   
}
})


export default todoSlice.reducer