
import Logo from "./Logo";
import SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <div className="">
      <div className="pl-16 md:pl-12 md:text-left flex flex-col md:flex-row md:justify-evenly  md:items-center md:gap-14">
        <div className="w-52">
          <Logo />
          <p className="my-4">
            Did you come here for something in particular or just general Riker
          </p>
        </div>
        <div className="my-4 md:my-0">
          <h4 className="font-semibold">Blogs</h4>
          <div className="text-gray-400 flex flex-col">
            <a href="" className="my-1">
              Travel
            </a>
            <a href="" className="my-1">
              Technology
            </a>
            <a href="" className="my-1">
              Lifestyle
            </a>
            <a href="" className="my-1">
              Fashion
            </a>
            <a href="" className="my-1">
              Business
            </a>
          </div>
        </div>
        <div className="my-4 md:my-0">
          <h4 className="font-semibold">Quicks Links</h4>
          <div className="flex flex-col text-gray-400">
            <a href="" className="my-1">
              FAQ
            </a>
            <a href="" className="my-1">
              Terms & Conditions
            </a>
            <a href="" className="my-1">
              Support
            </a>
            <a href="" className="my-1">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="flex flex-col md:mx-4">
          <h4 className="font-semibold">Subscribe For Newsletter</h4>
          <div className="mt-4 lg:flex">
            <form action="">
              <input type="email" placeholder="Your Email" className="bg-cyan-100 rounded lg:rounded-l p-2 lg:w-40" />
              <button className="subscribe-btn">
                Subscribe
              </button>
            </form>
          </div>
          <div className="my-5 flex md:items-start md:justify-start">
            <div className="">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-24">
        <div className="w-3/4 h-1 bg-gray-200 my-5"></div>
        <div className="font-semibold text-gray-400">
          Designed & Developed by Team POVA
        </div>
      </div>
    </div>
  );
}

export default Footer;
