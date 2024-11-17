import React from 'react';
import { Link } from 'react-router-dom';
const Nav = ()=>{
    return(
        <>
            <div className='navbar'>
                <div className='navbar-wrapper'>
                    <Link to="/">Home</Link>
                    <Link to="/demoform">Demo Form</Link>
                    <Link to="/advice">Advice</Link>
                </div>
            </div>
        </>
    )
}

export default Nav;