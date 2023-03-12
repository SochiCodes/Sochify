
import {BsClipboardPulse} from 'react-icons/bs'
import {BiCalendarEvent, BiAlbum} from 'react-icons/bi'
import {RiHeart2Line} from 'react-icons/ri'
import {IoIosPeople} from 'react-icons/io'
import {
    MdHomeFilled, 
    MdOutlineExplore, 
    MdOutlineDashboardCustomize,
} from 'react-icons/md'

export const MenuItems = [
    
    {
        id: 1,
        icon: <MdHomeFilled/>,
        name: "Home"
    },
    {
        id: 2,
        icon: <BsClipboardPulse/>,
        name: "Trends"
    },
    {
        id: 3,
        icon: <MdOutlineExplore/>,
        name: "Feeds"
    },
    //row2
    { 
        title: " Discover"
    },
    {
        id: 4,
        icon: <MdOutlineDashboardCustomize/>,
        name: "New and Notable"
    },
    {
        id: 6,
        icon: <BiCalendarEvent/>,
        name: "Events"
    },
    
    //row3
    { 
        title: "Your Collection "
    },
    {
        id: 7,
        icon: <RiHeart2Line/>,
        name: "Favorite Songs"
    },
    {
        id: 8,
        icon: <IoIosPeople/>,
        name: "Artists"
    },
    {
        id: 9,
        icon: <BiAlbum/>,
        name: "Albums"
    },
]
