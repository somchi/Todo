import style from './layout.module.scss'

const SideBar=({children})=>{
    return(
        <div className={'sidebar'}>
            {children}
            <style scoped>{`
                .sidebar{
                    display: grid;
                    width: 30%;
                    margin: 2em 2em
                }
            `}</style>
        </div>
    )
}

export default SideBar