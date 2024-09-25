import { AiOutlineSearch } from "react-icons/ai";
import bgimage from "../assets/images/hero-bg.png";
import Stats from './Stats.jsx'
function Hero() {
  return (
    <div className="">
      <div className="lg:w-full">
        <img src={bgimage} alt="" className="w-full"/>
      </div>
      <div className="hero">
        <div className="flex">
          <h3 className="font-bold text-3xl mb-8">Our Newsroom</h3>
        </div>
        <div className="flex bg-white px-4 py-2 items-center rounded-md w-4/5 h-14 justify-between">
          <AiOutlineSearch color="gray" size={30}/>
          <form action="" className="w-full ml-4 h-full">
            <input type="text" placeholder="Search article" className="outline-none px-4 py-2 w-full font-bold text-base text-black"/>
          </form>
          <button className="bg-orange-400 px-4 py-2 rounded-md font-semibold text-lg">Search</button>
        </div>
        <div className="my-10">
          <span className="font-medium">Popular Tags:</span>
          <a href="" className="tags">Design</a>
          <a href="" className="tags">User Exeprience</a>
          <a href="" className="tags">User Interfaces</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
