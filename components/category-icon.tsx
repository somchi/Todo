import WorkIcon from '@material-ui/icons/Work';
import SportsIcon from '@material-ui/icons/Sports';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import CallIcon from '@material-ui/icons/Call';

type Props={
    setCategoryICon: (icon: string)=>void,
    active: string
}

const CategoryIcon=(props: Props)=>{
    return(
        <div className='category-icons'>
             <p className={props.active==='work'?'icon-para active': 'icon-para'} onClick={()=>props.setCategoryICon('work')}><WorkIcon/></p>
             <p className={props.active==='sport'?'icon-para active': 'icon-para'} onClick={()=>props.setCategoryICon('sport')}><SportsIcon/></p>
             <p className={props.active==='home'?'icon-para active': 'icon-para'} onClick={()=>props.setCategoryICon('home')}><HomeIcon/></p>
             <p className={props.active==='travel'?'icon-para active': 'icon-para'} onClick={()=>props.setCategoryICon('travel')}><ExploreIcon/></p>
             <p className={props.active==='call'?'icon-para active': 'icon-para'} onClick={()=>props.setCategoryICon('call')}><CallIcon/></p>
             <style>{`
                .category-icons{
                    display: flex;
                    justify-content: flex-end
                }
                .icon-para{
                    font-size: 24px;
                    margin: 0 1.5em 1em 0;
                }
                .active{
                    border: 1px solid gray;
                    border-radius: 100%;
                    padding: 2px 7px;
                    align-content: center;
                }
             `}</style>
        </div>
    )
}

export default CategoryIcon