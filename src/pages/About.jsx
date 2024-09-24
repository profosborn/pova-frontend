import { FaEdit } from "react-icons/fa";
import Menubar from "../components/Menubar";
import Footer from "../components/Footer";
import {
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";

import gmlogo from '../assets/images/grammaly.png'
import unsplogo from '../assets/images/Unsplash.png'
import wplogo from '../assets/images/WordPress-logo.png'
import medlogo from '../assets/images/Medium-logo.png'
import blogo from '../assets/images/blogger-logo.png'
import AboutCard from "../components/AboutCard";
import { useState } from "react";

function About() {

  const [author, setAuthor] = useState('')
  const [nofpost, setNofpost] = useState('')



  return (
    <div className="font-prime_font">
      <div>
        <div>
          <Menubar />
        </div>
        <div className="bg-custom_blue_sec flex flex-col justify-center items-center p-20">
          <div className="font-semibold flex items-center mb-2 text-2xl bg-orange_primary py-2 px-5 text-white">
            <span className="">PovaNote Is A Place Where You Can Find</span>
          </div>
          <p className="font-semibold text-2xl mb-10">Your Perfect Blogs</p>
          <div className="flex flex-col items-center justify-center w-1/3 text-center">
            <p className=" mb-5">
              Dynamically underwhelm integrated outsourcing via timely models.
              Rapidiously reconceptualize visionary imperatives without 24/365
              catalysts for change. Completely streamline functionalized models
              and out-of-the-box functionalities. Authoritatively target
              proactive vortals vis-a-vis exceptional results. Compellingly
              brand emerging sources and compelling materials. Globally iterate
              parallel content
            </p>
            <p className="font-semibold mb-5">
              The best ideas can change who we are.
            </p>
            <p className="mb-5">
              Dynamically underwhelm integrated outsourcing via timely models.
              Rapidiously reconceptualize visionary imperatives without 24/365
              catalysts for
            </p>
            <p className="font-semibold mb-10 text-2xl bg-orange_primary p-2 text-center w-fit text-white">
              We are featured on
            </p>
          </div>
          <div className="flex gap-20">
            <div><img src={gmlogo} alt="" /></div>
            <div><img src={unsplogo} alt="" /></div>
            <div><img src={wplogo} alt="" /></div>
            <div><img src={medlogo} alt="" /></div>
            <div><img src={blogo} alt="" /></div>
          </div>
          <div className="flex gap-4 mt-14">
            <div className="w-10 h-1 bg-orange_primary"></div>
            <div className="w-10 h-1 bg-gray-200"></div>
            <div className="w-10 h-1 bg-gray-200"></div>
            <div className="w-10 h-1 bg-gray-200"></div>
            <div className="w-10 h-1 bg-gray-200"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-20">
        <div className="bg-orange_primary p-2 text-white text-2xl font-semibold">
          <p>Meet Our Authors</p>
        </div>
        <AboutCard author={author} nofpost={nofpost} />
        <div className="rounded-md my-20 text-center flex flex-col justify-center items-center bg-custom_blue_sec py-10 px-20">
          <p className="mb-5 font-semibold text-xl">Want To Write On Notebook?</p>
          <p>There have some simple steps, by following these steps you can be a regular author in notebook</p>
          <div className="flex items-center my-6 w-fit border-orange_primary border-2 rounded-md py-2 px-5 text-orange_primary">
            <FaEdit /> <span className="ml-2">Write on PovaNote</span>
          </div>
        </div>
      </div>
      <div className="general-footer">
        <Footer />
      </div>
    </div>
  );
}

export default About;
