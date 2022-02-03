import { Link } from 'react-router-dom'


const Navbar = () => {
    return ( 
        <nav className="nav">
        <Link to='/'>Home</Link>
        <Link to='/register'>Register</Link>
        <Link to='/lookup'>Lookup</Link>
        <Link to='/orders'>Orders</Link>
        <Link to='/inventory'>Inventory</Link>
        </nav>
     );
}
 
export default Navbar;