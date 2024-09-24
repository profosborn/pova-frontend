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
    <div>
      <div>
        <div>
          <Menubar />
        </div>
        <div className="bg-custom_blue_sec flex p-20 items-center justify-center">
          <div className="bg-gray-200 w-96 h-96"></div>
          <div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <div>
              <p></p>
              <div>
                <RiFacebookCircleFill />
                <RiTwitterFill />
                <RiInstagramFill />
                <RiPinterestFill />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-center items-center my-20">
          <div className="bg-orange_primary p-2 text-white text-2xl">
            <p>Read Author Blogs</p>
          </div>
          <div>
            <BlogCard/>
          </div>
        </div>
      </div>
      <div className="general-footer">
        <Footer />
      </div>
    </div>
  );
}

export default AboutAuthor;
