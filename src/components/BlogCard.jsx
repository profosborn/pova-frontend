import { FaCalendar, FaClock } from "react-icons/fa";

function BlogCard() {
  return (
    <div>
      <div className="bg-gray-300 w-96 h-96"></div>
      <div>
        <p>Travel</p>
        <div>
          <p className="Capitalize">set video playback speed with javascript</p>
        </div>
        <div>
            <div>
                <img src="" alt="pic" /> <span>Author Name</span>
            </div>
            <div>
                <FaCalendar/><span>Date</span>
            </div>
            <div>
                <FaClock/><span>3 Min To Read</span>
            </div>
        </div>
        <p>
          Did you come here for something in particular or just general
          Riker-bashing
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
