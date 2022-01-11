import { Link } from 'react-router-dom'


const Navbar = () => {
    return ( 
        <nav className="nav">
        <Link to='/'>Home</Link>
        <Link to='/register'>Register</Link>
        <Link to='#'>Lookup</Link>
        <Link to='#'>Orders</Link>
        <Link to='#'>Inventory</Link>
        </nav>
     );
}
 
export default Navbar;