import { useState } from "react";
import Link from "../Link/Link";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const NavBar = () => {
    const [open, setOPen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home', },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/service', name: 'Service' },        
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
      ];
      
      

    return (
        <nav className="text-black p-6 bg-yellow-200">
            <div className=" md:hidden text-2xl" onClick={() => setOPen(!open)}>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> :  <AiOutlineMenu className=""></AiOutlineMenu>
                }
               </div>
            <ul className={`md:flex absolute md:static duration-1000 px-6 ${open? 'top-16':'-top-60'} bg-yellow-200`}>
                {
                    routes.map(route => <Link key={route.id} route = {route}></Link>)
                }   
            </ul>
        </nav>
    );
};

export default NavBar;