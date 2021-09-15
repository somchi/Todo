import style from './layout.module.scss'

type Props={
    children: JSX.Element,
    visibility: boolean
}

const CategoriesLayout=(props: Props)=>{
    return(
        <div className={style['main-categories-input']} style={{display: props.visibility?'flex': 'none'}}>
            {props.children}
        </div>
    )
}

export default CategoriesLayout