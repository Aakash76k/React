import React from 'react';

function Navbar(props) {
  return (
    <>
    <nav className="bg-blue-600 text-white flex justify-between items-center px-8 py-4">
        <h1 claassName="text-2xl font-bold">{props.logo}</h1>
        <ul className="flex gap-6">
            <li>{props.home}</li>
            <li>{props.about}</li>
            <li>{props.services}</li>
            <li>{props.client}</li>
            <li>{props.contactUs}</li>
            
        </ul>
    
    </nav>    
    </>
  );
}

export default Navbar;
