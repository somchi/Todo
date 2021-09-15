import React from "react"
import { StarBorder, Stars, Palette, Delete} from '@material-ui/icons';
import {TaskData, Data} from './../utils/types';
import moment from 'moment'
import { ActionType } from "../store/actions/actionTypes";
// import { EDITICON } from "../images";
import style from './styles/task.module.scss'

type Props ={
    saveTask?: (value: TaskData)=> void,
    deleteTask?: (value: TaskData)=> void,
    onChange:(value:  React.ChangeEvent<HTMLTextAreaElement>)=> void,
    changeBackgroundColor?: () =>void,
    data: TaskData,
    size?: number,
    action: ActionType,
    id?: string,
    handleBlur: ()=>void
}


const Task=(props: Props): JSX.Element=>{
    // const handleOnChange=(event: React.ChangeEvent<HTMLTextAreaElement>): void=>{
    //     if(props.onChange){
    //         props.onChange(event)
    //     }
    // }

    const handleDelete=(): void=>{
        if( props.deleteTask){
            props.deleteTask(props.data)
        }
    }

    const handleBackgroungColorChange=(): void=>{
        if(props.changeBackgroundColor){
            props.changeBackgroundColor()
        }
    }
    return(
        <div className={style['task-body']} style={{ backgroundColor: props.data.backgroundColor}}>
            <div>
                <div className={style['task-star']}>
                    <span><Delete onClick={handleDelete}/></span>
                    <span style={{ backgroundColor: props.data.backgroundColor}}>
                        <Palette onClick={handleBackgroungColorChange}/>
                    </span>
                </div>
                <div className={style['task-text']} style={{ backgroundColor: props.data.backgroundColor}}>
                    <textarea onBlur={props.handleBlur} disabled={props.action===ActionType.ADD?false:true} value={props.data.text} onChange={props.onChange} style={{ backgroundColor: props.data.backgroundColor}}/>
                </div>
                <div className={style['task-footer']}>
                    <p className='task-date'>{moment(props.data.dateCreated).format('ll')}</p>
                </div>
            </div>
        </div>        
    )
}
export default Task