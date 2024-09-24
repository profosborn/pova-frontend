import { FaCalendar, FaClock } from "react-icons/fa";

function BlogCard() {
  return (
    <div className="font-prime_font">
      <div className="bg-gray-300 w-96 h-96"></div>
      <div>
        <p>Travel</p>
        <div>
          <p className="Capitalize mb-5 font-semibold text-lg">Set video playback speed with javascript</p>
        </div>
        <div className="author-details mb-5 text-sm text-gray-400">
            <div className="flex items-center">
                <img src="" alt="pic" /><span className="">Author Name |</span>
            </div> 
            <div className="flex items-center ml-2">
                <FaCalendar/><span className="ml-1">Date |</span>
            </div> 
            <div className="flex items-center ml-2">
                <FaClock/><span className="ml-1">3 Min To Read</span>
            </div>
        </div>
        <p className="w-96 text-sm text-gray-400">
          Did you come here for something in particular or just general
          Riker-bashing
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
