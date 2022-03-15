import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>#todo</h1>
            <div className="navigation">
                <NavLink to="/" className={({isActive})=>((isActive)? 'active' : 'inactive')}>
                    All
                </NavLink>
                <NavLink to="/active" className={({isActive})=>((isActive)? 'active' : 'inactive')}>
                    Active
                </NavLink>
                <NavLink to="/completed" className={({isActive})=>((isActive)? 'active' : 'inactive')}>
                    Completed
                </NavLink>
            </div>
        </div>
     );
}
 
export default Navbar;