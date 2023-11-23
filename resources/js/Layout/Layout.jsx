import React from 'react';
import Navbar from '../Shared/Navbar';

const Layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            <>
            {children}
            </>
        </div>
    );
};

export default Layout;