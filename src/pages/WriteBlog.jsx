import { FaEdit } from "react-icons/fa";
import Menubar from "../components/Menubar";
import Footer from "../components/Footer";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

function WriteBlog() {
  const [read, setRead] = useState("read-more");
  const [readTwo, setReadTwo] = useState("read-more");
  const [btnTxt, setBtnTxt] = useState("Read more");
  const [btnTxtTwo, setBtnTxtTwo] = useState("Read more");
  const [clickCount, setClickCount] = useState(0);

  const handleClick = (e) => {
    setClickCount((prevCount) => prevCount + 1);

    if ((clickCount % 2 === 0) & (e.target.name === "btn-one")) {
      setRead("") & setBtnTxt("close");
    } else if ((clickCount % 2 === 0) & (e.target.name === "btn-two")) {
      setReadTwo("") & setBtnTxtTwo("close");
    } else {
      e.target.name === "btn-one"
        ? setRead("read-more") & setBtnTxt("Read more")
        : setReadTwo("read-more") & setBtnTxtTwo("Read more");
    }
  };

  return (
    <div className="font-prime_font">
      <div>
        <div>
          <Menubar />
        </div>
        <div className="bg-custom_blue_sec flex flex-col justify-center items-center p-20">
          <div className="flex items-center mb-8 text-2xl bg-orange_primary py-2 px-5 text-white">
            <FaEdit /> <span className="ml-2">Write on PovaNote</span>
          </div>
          <div className="text-center">
            <p className="font-semibold mb-5">
              Write on PovaNote is very simple
            </p>
            <p>Go to your mail and start typing your article with title &</p>
            <p className="mb-5">
              categories, attached your image/video file (if have).
            </p>
            <p className="font-semibold">Type your personal information.</p>
            <p className="mb-5">
              (Name, Occupation, Address, Social media links)
            </p>
            <p>
              Send it on:{" "}
              <span className="ml-1 font-semibold">
                blog.notebook@gmail.com
              </span>
            </p>
          </div>
          <div>
            <button className="border-orange_primary border-2 p-2 rounded-md mt-8">
              Go To Your Mail
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-20">
        <div className="bg-orange_primary mx-5 p-2 text-white text-2xl font-semibold">
          <p>How Can You Earn By Writing On Medium</p>
        </div>
        <div className="md:flex w-3/4 text-center mt-10">
          <div className="mb-8">
            <p className="font-semibold my-5">By Ad Revenue</p>
            <p className={read}>
              Dynamically underwhelm integrated outsourcing via timely models.
              Rapidiously reconceptualize visionary imperatives without 24/365
              catalysts for change. Completely streamline functionalized models
              and out-of-the-box functionalities.
            </p>
            <button
              name="btn-one"
              onClick={handleClick}
              className="border-orange_primary border-2 text-orange_primary p-2 rounded-lg"
            >
              {btnTxt}
            </button>
          </div>
          <div className="mx-5">
            <p className="font-semibold my-5">By Affiliate Programme</p>
            <p className={readTwo}>
              Dynamically underwhelm integrated outsourcing via timely models.
              Rapidiously reconceptualize visionary imperatives without 24/365
              catalysts for change. Completely streamline functionalized models
              and out-of-the-box functionalities. Authoritatively target
              proactive vortals vis-a-vis exceptional results. Compellingly
              brand.
            </p>
            <button
              name="btn-two"
              onClick={handleClick}
              className="border-orange_primary border-2 text-orange_primary p-2 rounded-lg"
            >
              {btnTxtTwo}
            </button>
          </div>
        </div>
        <div className="my-20 text-center">
          <p className="mb-4 font-semibold text-xl">Want To Know More?</p>
          <div className="flex items-center justify-center text-orange_primary">
            <Link to="/faq">Go To FAQ Page</Link>
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
      <div className="general-footer">
        <Footer />
      </div>
    </div>
  );
}

export default WriteBlog;
