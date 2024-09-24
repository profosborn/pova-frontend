import { FaArrowRight } from "react-icons/fa";
import Footer from "../components/Footer";
import Menubar from "../components/Menubar";
import { useState } from "react";
import { Link } from "react-router-dom";

function FAQPage() {
  const [faqIcon, setFaqIcon] = useState("faq-icon");
  const [show, setShow] = useState("");
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);

    if (clickCount % 2 === 0) {
      setFaqIcon("faq-icon-b") & setShow("faq-drop-show");
    } else {
      setFaqIcon("faq-icon") & setShow("overflow-hidden h-1");
    }
  };
  return (
    <div className="font-prime_font">
      <div>
        <Menubar />
      </div>
      <div>
        <div>
          <div className="faq-heading">
            <p>Frequently Asked Questions</p>
          </div>
          <div className="mx-4 mb-4 text-justify">
            <p className="text-sm">
              Did you come here for something in particular or just general
              Riker-bashing? And blowing
            </p>
          </div>
        </div>
        <div>
          <div className="my-4">
            <div className="flex bg-custom_blue  py-1 px-4">
              <p className="mr-8">is there have any option for write blog?</p>
              <div
                onClick={handleClick}
                className="flex justify-center items-center w-fit"
              >
                <div className={faqIcon}></div>
                <div className="faq-icon-two"></div>
              </div>
            </div>
            <div className={show}>
              <p>
                Did you come here for something in particular or just general
                Riker-bashing? And blowing into maximum warp speed, you appeared
                for an instant to be in two places at once. We have a saboteur
                aboard. We know you’re dealing in stolen ore. But I wanna talk
                about
              </p>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex bg-custom_blue  py-1 px-4">
              <p className="mr-28">Can I change my plan later?</p>
              <div
                onClick={handleClick}
                className="flex justify-center items-center w-fit"
              >
                <div className={faqIcon}></div>
                <div className="faq-icon-two"></div>
              </div>
            </div>
            <div className={show}>
              <p>
                Did you come here for something in particular or just general
                Riker-bashing? And blowing into maximum warp speed, you appeared
                for an instant to be in two places at once. We have a saboteur
                aboard. We know you’re dealing in stolen ore. But I wanna talk
                about
              </p>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex bg-custom_blue  py-1 px-4">
              <p className="">Did you come here for something in particular?</p>
              <div
                onClick={handleClick}
                className="flex justify-center items-center w-fit"
              >
                <div className={faqIcon}></div>
                <div className="faq-icon-two"></div>
              </div>
            </div>
            <div className={show}>
              <p>
                Did you come here for something in particular or just general
                Riker-bashing? And blowing into maximum warp speed, you appeared
                for an instant to be in two places at once. We have a saboteur
                aboard. We know you’re dealing in stolen ore. But I wanna talk
                about
              </p>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex bg-custom_blue  py-1 px-4">
              <p className="mr-10">Is there have any option for write blog?</p>
              <div
                onClick={handleClick}
                className="flex justify-center items-center w-fit"
              >
                <div className={faqIcon}></div>
                <div className="faq-icon-two"></div>
              </div>
            </div>
            <div className={show}>
              <p>
                Did you come here for something in particular or just general
                Riker-bashing? And blowing into maximum warp speed, you appeared
                for an instant to be in two places at once. We have a saboteur
                aboard. We know you’re dealing in stolen ore. But I wanna talk
                about
              </p>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex bg-custom_blue  py-1 px-4">
              <p className="mr-8">
                Something in particular or just general Riker-bashing?
              </p>
              <div
                onClick={handleClick}
                className="flex justify-center items-center w-fit"
              >
                <div className={faqIcon}></div>
                <div className="faq-icon-two"></div>
              </div>
            </div>
            <div className={show}>
              <p>
                Did you come here for something in particular or just general
                Riker-bashing? And blowing into maximum warp speed, you appeared
                for an instant to be in two places at once. We have a saboteur
                aboard. We know you’re dealing in stolen ore. But I wanna talk
                about
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p>Can't Find An Answer To Your Question?</p>
          <Link to={'/contact'}>
            <div className="flex items-center my-6 w-fit border-orange_primary border-2 rounded-md py-2 px-5 text-orange_primary">
              <span className="ml-2">Contact Us</span> <FaArrowRight />
            </div>
          </Link>
        </div>
      </div>
      <div className="general-footer">
        <Footer />
      </div>
    </div>
  );
}

export default FAQPage;
