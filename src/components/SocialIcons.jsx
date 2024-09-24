import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillPinterest,
    AiFillTwitterCircle,
    AiFillTwitterSquare,
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlinePinterest,
    AiOutlineTwitter,
  } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { RiFacebookBoxLine } from "react-icons/ri";

function SocialIcons() {
  return (
    <div>
      <div>
        <p>Follow on:</p>
      </div>
      <div className="flex gap-3">
        <div className="social">
          <AiFillTwitterSquare />
        </div>
        <div className="social">
          <AiOutlineFacebook/>
        </div>
        <div className="social">
          <AiOutlinePinterest/>
        </div>
        <div className="social">
          <AiOutlineInstagram/>
        </div>
      </div>
    </div>
  );
}

export default SocialIcons;
