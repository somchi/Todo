import Head from 'next/head'
import dynamic from "next/dynamic";
import SideBar from '../layouts/sibebar';
import Main from '../layouts/main';
import UserCategory from '../components/category';
import Menu from '../components/menu';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import React, { useEffect, useState } from 'react';
import { CategoryInput } from '../components/category-input';
import Script from 'next/script';
import Task from '../components/task';
import CategoryLayout from '../layouts/category-layout';
import TaskLayout from '../layouts/task-layout';
import { ActionType } from '../store/actions/actionTypes';
import { Category, CategoryTask, Colors, TaskData } from '../utils/types';
import { addCategory, createCatTask, deletetask, removeCategory } from '../store/reducers/reducer';
import CategoriesLayout from '../layouts/categories-layout';
import CategoriesInput from '../components/categories-input';


const AppLayout = dynamic(() => import("../layouts/app-layout"));

export default function Home() {
  const selector = useAppSelector(state=>state.todo)
  const dispatch = useAppDispatch()

  const [visibility, setVisibility]= useState<boolean>(false)
  const [taskVisibility, setTaskVisibility] = useState<boolean>(false)
  const [taskVisibileMenu, setVisibleMenu] = useState<boolean>(false)
  const [paletteVisibility, setPVisibility] = useState<boolean>(false)
  const [data, setData] = useState<TaskData>({id:0, backgroundColor: '#fff', text: ''})
  const [category, setCategory]= useState<Category>({name: '', icon: ''})
  const [error, setError]=useState<string>('')
  const [categoriesVisibility, setCatVisibility] = useState<boolean>(false)

  let timeoutId = null

  useEffect(() => {
    // action on update of movies
}, [category]);

  const createCategory=()=>{
    setVisibility(true)
    setCatVisibility(false)
    setVisibleMenu(false)
    setCategory({name: '', icon: ''})
    setData({id:0, backgroundColor: '#fff', text: ''})
    if(taskVisibility === true){
      setTaskVisibility(false)
      setPVisibility(false)
    }
  }

  const createTask=(from: string)=>{
    if(from === 'category'){
      if(category.name===''){
        setError('provide a category name to proceed')
      }else{
        setVisibility(false)
        setTaskVisibility(true)
        dispatch(addCategory(category))
        const taskData: CategoryTask ={category: category.name, task: data} 
        if(data.text !== ''){
          dispatch(createCatTask(taskData))
        }
        // setCategory({name: '', icon: ''})
        setError('')
        setData({id:0, backgroundColor: '#fff', text: ''})
      }
    }else{
      setVisibility(false)
      setTaskVisibility(true)
      // timeoutId= setInterval(() => saveTask(), 5000);
    }
  }

  const saveCategory=()=>{
    if(category.name===''){
      setError('provide a category name')
    }else{
      setVisibility(false)
      const result: Category = {name: '', icon: ''}
      setCategory((prevCat):Category=>({...prevCat, ...result}))
      setError('')
      dispatch(addCategory(category))
    }
  }

  const saveTask=()=>{
    let taskData:CategoryTask ={category: category.name, task: data} 
    if(data.text !==''){
      if(data.id === 0){
          dispatch(createCatTask(taskData))
      }
      else{
          dispatch(createCatTask(taskData)) 
      }

  }else{
    dispatch(createCatTask(taskData))
  }
}

const colors=(): JSX.Element[]=>{
    let colors:Array<JSX.Element> = []
    for(let color of Colors){
        colors.push(
            <div key={color} onClick={()=>handleColorSelection(color)} style={{backgroundColor: color}}></div>
        )
    }
    return colors
}
  const handleColorSelection=(color: string): void=>{
    const colorUpdate:TaskData = {...data, backgroundColor: color}
    setData(colorUpdate)
    const taskData:CategoryTask = {category: category.name, task: colorUpdate}
    dispatch(createCatTask(taskData))
    setPVisibility(paletteVisibility=>!paletteVisibility)
  }

  const handleOnChange=(event: React.ChangeEvent<HTMLTextAreaElement>): void=>{
    let userText: string = event.target.value
    setData({...data, text: userText})
  }

  const handleCategryChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    const value = e.currentTarget.value
    setCategory({...category, name: value})
  }

  const categoryVisibility=()=>{
    setVisibility(false)
    setCategory({name: '', icon: ''})
    if(taskVisibility === true){
      setTaskVisibility(false)
      setPVisibility(false)
    }
  }
  const deleteCategory=(e: React.MouseEvent, name: string)=>{
    dispatch(removeCategory(name))
    setData({id:0, backgroundColor: '#fff', text: ''})
    setCategory({name: '', icon: ''})
  }

  const addTaskFromTask=(e:React.MouseEvent, categoryData: Category)=>{
    const date: number = Date.now()
    setData({...data, dateCreated: date, id: date})
    setVisibleMenu(true)
    setCategory({name: categoryData.name, icon: categoryData.icon})
    setCatVisibility(false)
    setTaskVisibility(true)
    if(data.text !==''){
      dispatch(createCatTask({task:data, category: categoryData.name}))
      setData({...data, text: '', dateCreated: date, id: date})
    }
  }

  const handleDelete=(value: TaskData): void=>{
    const deleteTask:CategoryTask = {category: category.name, task: value}
    dispatch(deletetask(deleteTask))
    setData({id:0, backgroundColor: '#fff', text: ''})
    setCategory({name: '', icon: ''})
    setTaskVisibility(false)
    setVisibleMenu(false)
}

  const addTaskFromMenu=()=>{
    const date: number = Date.now()
    if(data.text !== ''){
      let taskData:CategoryTask ={category: category.name, task: data} 
      dispatch(createCatTask(taskData))
      setData({id:date, dateCreated: date, backgroundColor: '#fff', text: ''})
    }else{
      setData({...data, dateCreated: date, id: date})
      setTaskVisibility(true)
      setCatVisibility(false)
    }
  }

  const handleCatForward=(e: React.MouseEvent, categoryName: Category)=>{
    setCatVisibility(true)
    setTaskVisibility(false)
    setPVisibility(false)
    setVisibility(false)
    setVisibleMenu(true)
    setCategory({...categoryName})
  }

  const openTask=(task: CategoryTask)=>{
    setVisibility(false)
    setTaskVisibility(true)
    setPVisibility(false)
    setCatVisibility(false)
    setData(task.task)
    setCategory({...category, name: task.category})
  }

  const deleteCatItem=(task: CategoryTask)=>{
    dispatch(deletetask(task))
  }
  return (
    <>
      <Head>
        <title>Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src='https://kit.fontawesome.com/a076d05399.js' crossOrigin='anonymous' />
      <Menu addCategory={createCategory} addTask={()=>addTaskFromMenu()} visibility={taskVisibileMenu}/>
      <AppLayout>
          <SideBar>
            <aside>
              <UserCategory 
                categories={selector.categories} 
                createCategory={createCategory}
                deleteCategory={deleteCategory}
                addTask={addTaskFromTask}
                categoryTasks={selector.tasks}
                forwardCagtegory={handleCatForward}
                activeCategory={category.name}
              />
            </aside>
          </SideBar>
          <Main>
            <main>
              <CategoryLayout visibility={visibility}>
                <CategoryInput 
                  cancleCreation={()=>categoryVisibility()} 
                  saveCategory={saveCategory}
                  createTask={()=>createTask('category')}
                  handleChange={handleCategryChange}
                  setCategoryICon={(icon)=>setCategory({...category, icon: icon})}
                  active={category.icon}
                  error={error}
                  category={category}
                />
              </CategoryLayout>
              {paletteVisibility?
                <div className='color-palette'>
                  <div className='color-pallete-body'>
                    {colors()}
                  </div>
                </div>:<div></div>
              }
              <CategoriesLayout visibility={categoriesVisibility}>
                <CategoriesInput
                  category={category.name}
                  tasks={selector.tasks}
                  openTask={openTask}
                  deteleCatItem={deleteCatItem}
                />
              </CategoriesLayout>
              <TaskLayout visibility={taskVisibility}>
                <Task 
                    saveTask={saveTask} 
                    data={data} 
                    deleteTask={handleDelete}
                    action={ActionType.ADD} 
                    changeBackgroundColor={()=>setPVisibility(!paletteVisibility)}
                    onChange={handleOnChange}
                    handleBlur={saveTask}
                  />
              </TaskLayout>
            </main>
          </Main>
      </AppLayout>
    </>
  )
}
