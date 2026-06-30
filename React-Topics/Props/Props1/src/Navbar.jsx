import React from "react";

// using props
// function Navbar(props) {
//   return (
//     <>
//     <nav className="bg-white-600 text-black flex justify-between items-center px-8 py-4">
//         <h1 className="text-2xl font-bold">{props.logo}</h1>
//         <ul className="flex gap-6">
//             <li>{props.home}</li>
//             <li>{props.about}</li>
//             <li>{props.services}</li>
//             <li>{props.client}</li>
//             <li>{props.contactUs}</li>

//         </ul>

//     </nav>
//     </>
//   );
// }

// using destructuring props

function Navbar({
  logo,
  home,
  about,
  services,
  client,
  contact,
  img,
  search,
  call,
}) {
  return (
    <>
      <nav className="bg-white-600 text-black flex justify-between items-center px-8 py-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between md:items-center">
          <h1 className="text-2xl font-bold">{logo}</h1>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
            <li className="hover:text-yellow-300 cursor-pointer">{home}</li>
            <li className="hover:text-yellow-300 cursor-pointer">{about}</li>
            <li className="hover:text-yellow-300 cursor-pointer">{services}</li>
            <li className="hover:text-yellow-300 cursor-pointer">{client}</li>
            <li className="hover:text-yellow-300 cursor-pointer">{contact}</li>
            <li className="hover:text-yellow-300 cursor-pointer">{img}</li>
            <li className="hover:text-yellow-300 cursor-pointer">{search}</li>
            <li className="hover:text-yellow-300 cursor-pointer">{call}</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
