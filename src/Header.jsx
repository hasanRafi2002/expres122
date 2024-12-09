import React from 'react';

import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='p-4 text-blue-500 '>
            <div className="flex gap-4">
            <a className=""><NavLink to="/" >Home</NavLink></a>
            <a className=""><NavLink to="/loginex" >Loginex</NavLink></a>
            </div>
        </div>
    );
};

export default Header;