import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiPinterestFill,
  RiTwitterFill,
} from "react-icons/ri";
import Footer from "../components/Footer";
import Menubar from "../components/Menubar";
import BlogCard from "../components/BlogCard";

function AboutAuthor() {
  return (
    <div className="about-author">
      <div>
        <div>
          <Menubar />
        </div>
        <div className="about-cont">
          <div className="author-img"></div>
          <div className="about-author-text">
            <p className="author-heading">Hi! i’m Saimon D’silva</p>
            <p className="about-p-text">
              Dynamically underwhelm integrated outsourcing via timely models.
              Rapidiously reconceptualize visionary imperatives without 24/365
              catalysts for change. Completely streamline functionalized models
              and out-of-the-box functionalities. Authoritatively target
              proactive vortals vis-a-vis exceptional results. Compellingly
              brand emerging sources and compelling materials. Globally iterate
              parallel content
            </p>
            <p className="author-heading">
              The best ideas can change who we are.
            </p>
            <p className="about-p-text">
              Dynamically underwhelm integrated outsourcing via timely models.
              Rapidiously reconceptualize visionary imperatives without 24/365
              catalysts for
            </p>
            <div className="about-social">
              <p>Follow on social media:</p>
              <div className="about-social-icons">
                <RiFacebookCircleFill />
                <RiTwitterFill />
                <RiInstagramFill />
                <RiPinterestFill />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blogs-cards">
        <div className="bg-orange_primary p-2 text-white text-2xl w-fit my-5">
          <p className="">Read Author Blogs</p>
        </div>
        <div>
          <BlogCard />
        </div>
      </div>
      <div className="general-footer">
        <Footer />
      </div>
    </div>
  );
}

export default AboutAuthor;
