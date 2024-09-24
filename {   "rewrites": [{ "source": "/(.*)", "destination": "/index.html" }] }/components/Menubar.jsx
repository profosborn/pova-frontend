import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import Logo from "./Logo";
import {
  RiArrowDropDownLine,
  RiCloseLine,
} from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import MenuLogo from "../assets/images/menu_logo.png";
import { useState } from "react";

function Menubar() {
  const [show, setShow] = useState("invisible");
  return (
    <div className="md:flex bg-custom_blue p-6 h-24 lg:items-center lg:gap-20">
      <div className="flex justify-between">
        <div>
          <img src={MenuLogo} alt="" width={40} />
        </div>
        <div className="lg:invisible">
          <AiOutlineMenu size={50} onClick={() => setShow("show")} />
        </div>
      </div>
      <div className={show}>
        <div className="flex flex-col gap-4 my-5">
          <div className="flex justify-end mx-4">
            <RiCloseLine onClick={() => setShow("invisible")} />
          </div>
          <div>
            <a href="/home">Homepage</a>
          </div>
          <div>
            <a href="/about">About</a>
          </div>
          <div className="flex my-3 items-center">
            <a href="/categories">Categories</a>
            <RiArrowDropDownLine />
          </div>
          <div className="flex items-center">
            <a href="">Pages</a>
            <RiArrowDropDownLine />
          </div>
        </div>
        <div className="my-4">
          <Logo />
        </div>
        <div className=" flex flex-col gap-5 my-5">
          <div>
            <AiOutlineSearch />
          </div>
          <div>
            <FaEdit />
          </div>
          <a href="/contact">Contact</a>
          <div className="flex items-center">
            <p>En</p>
            <RiArrowDropDownLine />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-8 invisible lg:visible">
        <div>
          <a href="/home">Homepage</a>
        </div>
        <div>
          <a href="/about">About</a>
        </div>
        <div className="flex items-center">
          <a href="/categories">Categories</a>
          <RiArrowDropDownLine />
        </div>
        <div className="flex items-center">
          <a href="">Pages</a>
          <RiArrowDropDownLine />
        </div>
      </div>
      <div className="mx-2 invisible lg:mx-16 lg:visible">
        <Logo />
      </div>
      <div className="flex gap-5 items-center invisible lg:visible">
        <div>
          <AiOutlineSearch />
        </div>
        <div>
          <FaEdit />
        </div>
        <a href="/contact">Contact</a>
        <div className="flex items-center">
          <p>En</p>
          <RiArrowDropDownLine />
        </div>
      </div>
    </div>
  );
}

export default Menubar;
