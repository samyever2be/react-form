import React from 'react';
import { Link } from 'react-router-dom';
const Nav = ()=>{
    return(
        <>
            <Link to="/">Home</Link>
            <Link to="/demoform">Demo Form</Link>
            <Link to="/advice">Advice</Link>
        </>
    )
}

export default Nav;