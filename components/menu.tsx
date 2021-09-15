import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import React, { useState } from 'react';
import style from './styles/task.module.scss'

type Props={
    addCategory:()=>void,
    visibility: boolean,
    addTask: ()=>void
}

const Menu=(props: Props)=>{
    const [toggle, setToggle] = useState<boolean>(false)
    const hamburger=(e: React.MouseEvent<HTMLButtonElement>)=>{
        setToggle(toggle=>!toggle)
    }

    const toggleSideBar=(e:React.MouseEvent<HTMLDivElement>)=>{
        const drawer = document.getElementsByClassName("sidebar")[0];
        if(drawer!== null)
        drawer.classList.toggle("open");
        e.stopPropagation()
    }

    return(
        <div className='menu'>
            <div className="menu-action">
                <div className={style['menu-action-menu']} onClick={(e)=>toggleSideBar(e)}>
                    {toggle?
                        <span id='close' className={style['toggle-hamburger']} onClick={hamburger}><CloseIcon fontSize='large' htmlColor='#fff'/></span>:
                        <span id='open' className={style['toggle-hamburger']} onClick={hamburger}><MenuIcon fontSize='large' htmlColor='#fff'/></span>
                    }
                </div>
                <button className='menu-action-btn' onClick={props.addCategory}>Add Category</button>
                {props.visibility?
                    <button className='menu-action-btn' onClick={props.addTask}>Add Task</button>:<span></span>
                }
                
            </div>
            <style>{`
                .menu{
                    background-image: linear-gradient(45deg, #262F47, #262F47);
                    border-bottom: 1px solid #f5f5f5;
                    postion: sticky;
                }
                .menu-action{
                    display: flex;
                    padding: 1.3em
                }
                .menu-action-btn{
                    font-weight: 500;
                    font-size: 1em;
                    padding: .9em;
                    margin-right: 2em
                }
            `}</style>
        </div>
    )
}

export default Menu