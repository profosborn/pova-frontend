import {
  AiFillTwitterSquare,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlinePinterest,
} from "react-icons/ai";

function SocialIcons() {
  return (
    <div className="">
      <div>
        <p>Follow on:</p>
      </div>
      <div className="flex gap-3">
        <div className="social">
          <AiFillTwitterSquare />
        </div>
        <div className="social">
          <AiOutlineFacebook />
        </div>
        <div className="social">
          <AiOutlinePinterest />
        </div>
        <div className="social">
          <AiOutlineInstagram />
        </div>
      </div>
    </div>
  );
}

export default SocialIcons;
