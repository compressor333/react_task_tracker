import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'



const Navbar = ({ onAdd, showAdd }) => {

    const location = useLocation()
    const color =  showAdd ? 'black' : 'white'
    
    const text = showAdd ? 'Close' : 'Add Task'
    

    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <div className="logo">Task Tracker</div>
                    <ul className="nav">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/tasks">Tasks</Link>
                        </li>
                        <li>
                            {location.pathname === '/tasks' && <a href="#" onClick={onAdd} style={{color: color}}>{text}</a>}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}



export default Navbar