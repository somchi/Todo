import { Category, CategoryTask } from "../utils/types"
import AddIcon from '@material-ui/icons/Add';
import { Delete } from "@material-ui/icons";
import React, { useState } from "react";
import { CategoryIcons } from "../utils/helper";
import style from './styles/task.module.scss';

type Props={
    categories: Category[]
    createCategory:(e: React.MouseEvent)=>void,
    deleteCategory:(e: React.MouseEvent, name: string)=>void,
    addTask: (e: React.MouseEvent, data: Category)=>void,
    categoryTasks: CategoryTask[],
    forwardCagtegory: (e: React.MouseEvent, category: Category)=>void,
    activeCategory: string
}

const UserCategory=(props: Props)=>{
    const [visibility, setVisility]= useState<boolean>(false)
    const [categoryName, setName] = useState<string>('')
    const renderCategories=()=>{
        let category: JSX.Element[] = []
        for(let i in props.categories){
            let item = props.categories[i]
            let numTask = props.categoryTasks.filter(data=> data.category===item.name)
            let icon = CategoryIcons(item.icon)
            category.push(
                <div className={props.activeCategory===item.name?"categories-item active-category": "categories-item"}  key={i}>
                    <div className='categories-item-details'>
                        <p onClick={(e)=>props.addTask(e, item)}><i style={{ cursor: 'pointer'}}>{icon}</i></p>
                        <p className='category-name' onClick={(e)=>props.forwardCagtegory(e, item)}>{item.name.toUpperCase()}&nbsp;<span>{'('+ numTask.length + ')'}</span></p>
                    </div>
                    <p style={{ marginRight: 30, cursor: "pointer"}} onClick={()=>deleteAction(item.name)}><i><Delete/></i></p>
                </div>
            )
        }
        return category
    }

    const deleteAction=(name: string)=>{
        setVisility(true)
        setName(name)
    }

    const handelDelete=(e: React.MouseEvent)=>{
        setVisility(false)
        props.deleteCategory(e, categoryName)
    }
    return(
        <div className={style['category']}>
            <div className="category-scroll">
            <h3>Todo Application</h3>
            <hr></hr>
            <h3 className='category-heading'>Category</h3>
            {visibility?
            <div className='delete-action'>
                <button className='delete-action-delete' onClick={(e)=>handelDelete(e)}>Delete</button>
                <button className='delete-action-cancel' onClick={()=>setVisility(false)} style={{ fontSize: '1em'}}>Cancel</button>
            </div>:<span></span>}
            <div className="categories">
                {renderCategories()}
            </div>
            <h3 className='category-heading' style={{cursor: 'pointer'}} onClick={(e)=>props.createCategory(e)}><span>+</span>Add Category</h3>
            </div>
            <style>{`                
                h3{
                    font-weight: 400
                }
                hr{
                    margin-right: 2em
                }
                .category-heading{
                    color: gray;
                    // margin: 2em 0em 1em 0em;
                    width: 300px;
                }
                .categories-item{
                    display: flex;
                    justify-content: space-between;
                    // margin: 1.5em 0;
                }
                .categories-item-details{
                    display: flex
                }
                .category-name{
                    font-size: 1.3em;
                    font-style: italic;
                    font-weight: 500;
                    color: #1E90FF;
                    margin-left: 10px;
                    margin-top: 0.6em;
                    cursor: pointer
                }
                .delete-action{
                    display: flex;
                    position: absolute;
                    right:0;
                    background-color: #f5f5f5;
                    z-index: 11;
                    justify-content: center;
                    padding: 1em
                }
                .delete-action-delete{
                    background-color: red;
                    padding: 1em 1.3em;
                    font-size: 1em
                }
                .active-category{
                    border: 1px solid #e6e6e6;
                    padding: 2px 7px;
                    align-content: center;
                }
            `}</style>
        </div>
    )
}

export default UserCategory