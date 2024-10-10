import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Featured from "../components/Featured.jsx";
import { FaArrowRight } from "react-icons/fa";
import PopArtCard from "../components/PopArtCard.jsx";
import Footer from "../components/Footer.jsx";
import LandingFooter from "../components/LandingFooter.jsx";

function Landingpage() {
  return (
    <div className="flex flex-col">
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Featured />
      </div>
      <div className="flex flex-col mt-72 mx-72">
        <p>Popular Articles</p>
        <div>
          <p></p>
          <button>
            <span>View all</span>
            <FaArrowRight />
          </button>
        </div>
        <div>
          <div>
            <PopArtCard />
          </div>
          <div></div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div>
        <div>
          <div>
            <svg
              width="100%"
              height=""
              viewBox="0 0 2160 263"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Wave"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
                fill="#0D2436"
              />
            </svg>
          </div>
          <div className="bg-l_footer p-10">
            <LandingFooter />
          </div>
        </div>
        <div className="l-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
