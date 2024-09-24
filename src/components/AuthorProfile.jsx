/* eslint-disable react/prop-types */
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function AuthorProfile(props) {
  return (
    <div className="my-4">
      {props.author.map((item, index) => {
        return (
          <div key={index} className="flex my-5">
            <div className="w-10 h-10">
              <img
                src={item.imgsrc}
                alt="img"
                className="w-10 h-10  object-cover rounded-full"
              />
            </div>
            <div className="">
              <div>
                <p>Jenny Kia</p>
              </div>
              <div>
                <p>Fashion designer, Blogger, activist</p>
              </div>
              <div className="flex">
                <FaFacebook />
                <FaTwitterSquare />
                <FaInstagram />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AuthorProfile;
