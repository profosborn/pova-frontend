import { AiOutlineMenu } from "react-icons/ai";
import Logo from "./Logo";

function Navbar() {
    return ( 
        <div className="navbar">
            <nav className="flex flex-row py-10 px-7 justify-between">
                <Logo/>
                <div className="lg:invisible">
                <AiOutlineMenu size={50}/>  
                </div>
                <div className="">
                   <ul className="flex flex-col invisible lg:flex-row lg:visible lg:items-center">
                    <li className="mx-8">
                        <a href="">Home</a>
                    </li>
                    <li className="mx-8">
                        <a href="">Pages</a>
                    </li>
                    <li className="mx-8">
                        <a href="">Docs</a>
                    </li>
                    <li className="mx-8">
                        <a href="">Help</a>
                    </li>
                    <li className="mx-8 px-8 py-3 rounded-lg border-white border-4">
                        <a href="/signup">Get it now</a>
                    </li>
                   </ul> 
                </div>
            </nav>
        </div>
     );
}

export default Navbar;