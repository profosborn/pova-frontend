import Menubar from "../components/Menubar";
import { HiMiniCpuChip } from "react-icons/hi2";
import { GiLargeDress } from "react-icons/gi";
import { FaCamera } from "react-icons/fa";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { MdFastfood } from "react-icons/md";
import { FaHeartPulse } from "react-icons/fa6";
import Footer from "../components/Footer";
import { FaHandHolding } from "react-icons/fa";
import { RiSeedlingFill } from "react-icons/ri";

function Categories() {
  return (
    <div className="font-prime_font">
      <div>
        <Menubar />
      </div>
      <div className="bg-custom_blue_sec flex flex-col justify-center items-center mb-40">
        <p className="my-24 text-3xl font-semibold">Categories</p>
        <div className=" mb-28 flex flex-wrap w-4/6 gap-8 font-semibold">
          <div className="catcard">
            <div className="h-1">
           <RiSeedlingFill size={50}/>
            </div>
          <FaHandHolding size={50}/>
            <p className="text-lg my-5">Environment & Nature</p>
          </div>
          <div className="catcard">
            <HiMiniCpuChip size={50} />
            <p className="text-xl my-5">Technology</p>
          </div>
          <div className="catcard">
            <GiLargeDress size={50} />
            <p className="text-xl my-5">Lifestyle & Fashion</p>
          </div>
          <div className="catcard">
            <FaCamera size={50} />
            <p className="text-xl my-5">Photography</p>
          </div>
          <div className="catcard">
            <MdFastfood size={50}/>
            <p className="text-xl my-5">Food</p>
          </div>
          <div className="catcard">
            <BiSolidPlaneAlt size={50} />
            <p className="text-xl my-5">Holiday & Travel</p>
          </div>
          <div className="catcard">
            <FaHeartPulse size={50}/>
            <p className="text-xl my-5">Healthcare</p>
          </div>
        </div>
      </div>
      <div className="general-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Categories;
