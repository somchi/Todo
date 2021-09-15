import { Delete } from "@material-ui/icons"
import { CategoryTask } from "../utils/types"
import style from './styles/task.module.scss'

type Props={
    tasks: CategoryTask[],
    category: string,
    openTask: (task: CategoryTask)=>void,
    deteleCatItem: (task: CategoryTask)=>void
}

const CategoriesInput=(props: Props)=>{
    const renderCatTasks=()=>{
        let tasks: JSX.Element[]=[]
        for(let i in props.tasks){
            let item = props.tasks[i]
            if(item.category === props.category){
                tasks.push(
                    <div key={i} className={style["category-tasks"]}>
                        <div className={style['category-tasks-delete']}>
                            <span onClick={()=>props.deteleCatItem(item)}><Delete/></span>
                        </div>
                        <span onClick={()=>props.openTask(item)}>{item.task.text}</span>
                    </div>
                )
            }
        }
        return tasks
    }
    return(
        <div className={style['categories-input']}>
            <div><h4>{renderCatTasks().length} TASK(S) IN {props.category.toUpperCase()}</h4></div>
            <div className={style['categories-input-item']}>
                {renderCatTasks()}
            </div>
        </div>
    )
}

export default CategoriesInput