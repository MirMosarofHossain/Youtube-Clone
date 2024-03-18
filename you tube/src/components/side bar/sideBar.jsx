import './sideBar.css'
import auth from '../../firebase'
import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied,
} from "react-icons/md"
import { useDispatch } from 'react-redux'
import { authAction } from '../../redux/store'

export default function SideBar({sidebar,handleToggleSidebar}) {
const dispatch = useDispatch()
const logOut = async ()=>{
    await auth.signOut()
    dispatch(authAction.logOutFromApp())
}

    return (
        <>
            <nav onClick={()=>{handleToggleSidebar(false)}} className={sidebar?"sidebar open":"sidebar"}>
                <li>
                    <MdHome size={23}></MdHome>
                    <span>Home</span>
                </li>
                <li>
                    <MdSubscriptions size={23} />
                    <span>Subscriptions</span>
                </li>

                <li>
                    <MdThumbUp size={23} />
                    <span>Liked Video</span>
                </li>

                <li>
                    <MdHistory size={23} />
                    <span>History</span>
                </li>

                <li>
                    <MdLibraryBooks size={23} />
                    <span>Library</span>
                </li>
                <li>
                    <MdSentimentDissatisfied size={23} />
                    <span>I don't Know</span>
                </li>

                <hr />

                <li onClick={logOut}>
                    <MdExitToApp size={23} />
                    <span>Log Out</span>
                </li>

                <hr />
            </nav>
        </>
    )
}