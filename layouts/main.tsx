import style from './layout.module.scss'

const Main=({children})=>{
    return(
        <div className={'main-d ' + style['main']}>
            {children}
        </div>
    )
}

export default Main