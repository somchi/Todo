import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'
import { Category, CategoryTask, StoreState } from '../../utils/types'

const initialState: StoreState = {
  categories: [],
  tasks: []
}

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    addCategory:(state, action: PayloadAction<Category>)=>{
      const category = action.payload
      state.categories.push(category)
    },
    removeCategory:(state, action: PayloadAction<string>)=>{
      const category = state.categories.findIndex(category => category.name===action.payload)

      const categoryName = state.categories[category].name
      state.tasks.map((task, index)=>{
        if(task.category === categoryName){
          index===0?state.tasks.shift():state.tasks.splice(index, 1)
        }
      })
      if(category && category !==0){
        state.categories.splice(category, 1)
      }else{
        state.categories.shift()
      }
    },
    createCatTask: (state, action: PayloadAction<CategoryTask>)=>{
      const { category, task } = action.payload
      const existingTask = state.tasks.find(userTask =>userTask.task.id === task.id)
      if (existingTask) {
          existingTask.task.text=task.text?existingTask.task.text=task.text: existingTask.task.text
          existingTask.task.backgroundColor=task.backgroundColor?existingTask.task.backgroundColor=task.backgroundColor: existingTask.task.backgroundColor
          existingTask.task.dateCreated=Date.now()
      }else{
        state.tasks.push(action.payload)
      }
    },
    deletetask:(state, action: PayloadAction<CategoryTask>)=>{
        const {category, task} = action.payload
        const existingTask = state.tasks.findIndex(note => note.task.id === task.id)
        if(existingTask && existingTask !==0){
          state.tasks.splice(existingTask, 1)
        }else{
          state.tasks.shift()
        }
    }
  }
})

export const { addCategory, removeCategory, deletetask, createCatTask } = noteSlice.actions

export const selectNote = (state: RootState) => state.todo

export default noteSlice.reducer