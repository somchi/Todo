import React from "react"
import { Category } from "../utils/types";
import CategoryIcon from "./category-icon";
import style from './styles/task.module.scss'

type Props={
    cancleCreation:()=>void,
    saveCategory:()=>void,
    createTask: ()=>void,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>)=>void,
    setCategoryICon: (icon: string)=>void,
    active:string,
    error: string,
    category: Category
}

export const CategoryInput=(props: Props)=>{
    return(
        <div className='category-input'>
            <CategoryIcon setCategoryICon={props.setCategoryICon} active={props.active}/>
            {props.error!==''?
                <p className={style.error}>{props.error}</p>:<span></span>
            }
            <input placeholder='Category name' value={props.category.name} className='input-text' onChange={props.handleChange}/>
            <div className='input-actions'>
                <div className='input-action-positive'>
                    <button onClick={props.createTask}>Add Task</button>
                    <button onClick={props.saveCategory}> Save Category</button>
                </div>
                <button className='input-cancel' onClick={props.cancleCreation}>Cancel</button>
            </div>
            <style>{`
                .category-input{
                    display: grid;
                    align-self: center;
                    background-color: #fff;
                    height: auto;
                    width: 50%;
                    padding: 2em 2em;
                    border-radius: 5px;
                }
                .input-text{
                    border-radius: 10px;
                    padding: 0 5px;
                    border: 1px solid gray;
                    height: 50px;
                    justify-align: center;
                }
                .input-actions{
                    display: flex;
                    justify-content: space-between;
                }
                .input-action-positive{
                    display: flex;
                }
                .input-cancel{
                    background-color: transparent;
                    border-radius: 10px;
                    border: 1px solid gray;
                    color: #000;
                }
                button{
                    background-color: #1E90FF;
                    border-radius: 10px;
                    border: 1px solid transparent;
                    padding: 10px;
                    margin: 10px 10px 10px 0px;
                    color: #fff
                }
            `}</style>
        </div>
    )
}