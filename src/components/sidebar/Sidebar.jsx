import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';


function Sidebar() {
    // const {darkMode} = useContext(DarkModeContext)
    const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
        <div className="top">
           <Link to="/" style={{textDecoration:"none"}}>
           <span className='logo'>Achille</span>
           </Link>
         </div>
         <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className='icon'/>
                    <Link to="/" style={{textDecoration:"none"}}>
                    <span>Dashboard</span>
                    </Link>
                </li>
                <p className="title">LISTS</p>
                <li>
                    <PersonOutlineOutlinedIcon className='icon' />
                    <Link to="/users" style={{textDecoration:"none"}}>
                    <span>Users</span>
                    </Link>
                </li>
                <li>
                    <Inventory2OutlinedIcon className='icon' />
                    <Link to="/products" style={{textDecoration:"none"}}>
                    <span>Products</span>
                    </Link>
                </li>
                <li>
                    <ViewStreamOutlinedIcon  className='icon' />
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingOutlinedIcon className='icon' />
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <PollOutlinedIcon className='icon' />
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneOutlinedIcon className='icon' />
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <MonitorHeartOutlinedIcon  className='icon'/>
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyOutlinedIcon className='icon' />
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsOutlinedIcon className='icon' />
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountBoxOutlinedIcon className='icon' />
                    <span>Profile</span>
                </li>
                <li>
                    <ExitToAppOutlinedIcon className='icon' />
                    <span>Logout</span>
                </li>

            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
            <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
        </div>
    </div>
  )
}

export default Sidebar