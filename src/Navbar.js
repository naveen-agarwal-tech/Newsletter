import{Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>DOjo Blog</h1>
            <div className="links">
                <Link to="/">home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;