import logo from '../../logo.png'
import '../Home.scss'
import {Link} from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
function Header(){
    return(
       <nav className="header">
        <img src={logo} alt="logo" />

        <div>
            <Link to="/tvshows">TV shows</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/recent">Recently Added</Link>
            <Link to="/Mylist">My list</Link>
        </div>

        <BsSearch/>



       </nav>
    )
}
export default Header;