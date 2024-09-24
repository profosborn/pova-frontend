import { AiOutlineMenu } from "react-icons/ai";
import Logo from "./Logo";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

function Navbar() {
  const [show, setShow] = useState("invisible");
  return (
    <div className="navbar">
      <nav className="flex flex-row py-10 px-7 justify-between">
        <Logo />
        <div className="lg:invisible">
          <AiOutlineMenu
            size={50}
            onClick={() =>
              setShow("visible absolute bg-cyan-500 py-5 left-0 top-0")
            }
          />
        </div>
        <div className={show}>
          <div className="text-white flex justify-end px-10">
            <RiCloseLine onClick={() => setShow("invisible")} />
          </div>
          <ul className="flex flex-col">
            <li className="mx-8">
              <a href="/home">Home</a>
            </li>
            <li className="mx-8 my-4">
              <a href="">Pages</a>
            </li>
            <li className="mx-8 my-4">
              <a href="">Docs</a>
            </li>
            <li className="mx-8 ">
              <a href="">Help</a>
            </li>
            <li className="mx-8 my-6 px-8 py-3 rounded-lg border-white border-4">
              <a href="/signup">Get it now</a>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex flex-col invisible lg:flex-row lg:visible lg:items-center">
            <li className="mx-8">
              <a href="/home">Home</a>
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
