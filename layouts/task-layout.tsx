import React from "react"
import style from './layout.module.scss'

type Props={
    children: JSX.Element,
    visibility: boolean,
}

const TaskLayout:React.FC<Props>=({children, visibility})=>{
    return(
        <div  className={style['main-category-input']} style={{display: visibility?'flex': 'none'}}>
            {children}
        </div>
    )
}

export default TaskLayout