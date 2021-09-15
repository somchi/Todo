import style from './layout.module.scss'

type Props={
    children: JSX.Element,
    visibility: boolean
}

const CategoryLayout: React.FC<Props>=({children, visibility})=>{
    return(
        <div className={style['main-category-input']} style={{display: visibility?'flex': 'none'}}>
            {children}
        </div>
    )
}

export default CategoryLayout