import WorkIcon from '@material-ui/icons/Work';
import SportsIcon from '@material-ui/icons/Sports';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import CallIcon from '@material-ui/icons/Call';
import AddIcon from '@material-ui/icons/Add';


export const CategoryIcons=(icon: string)=>{
    switch (icon) {
        case 'work':
            return <WorkIcon/>
        case 'sport': 
            return <SportsIcon/>
        case 'home':
            return <HomeIcon/>
        case 'travel':
            return <ExploreIcon/>
        case 'call':
            return <CallIcon/>
        default:
            return <AddIcon/>;
    }
}