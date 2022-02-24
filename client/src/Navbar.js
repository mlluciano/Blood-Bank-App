import { Link } from 'react-router-dom'


const Navbar = () => {//react router uses Link instead of a tags
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