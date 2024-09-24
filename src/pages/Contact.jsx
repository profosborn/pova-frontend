
import Footer from "../components/Footer";
import Menubar from "../components/Menubar";
import SocialIcons from "../components/SocialIcons";

function Contactpage() {
  return (
    <div className="font-prime_font">
      <div>
        <Menubar />
      </div>
      <div className=" flex flex-col items-center gap-10 ">
        <div className="mt-20">
          <p className="font-semibold text-4xl">
            <span className="bg-orange_primary px-2 text-white">Contact</span>{" "}
            Us
          </p>
        </div>
        <div className="lg:flex mb-28 lg:flex-row flex flex-col items-center justify-center">
          <div className="lg:mx-20 my-10">
            <form action="">
              <div className="flex flex-col lg:flex-row lg:justify-center items-center lg:items-center">
                <input
                  type="text"
                  placeholder="Name"
                  className="contact-input"
                />
                <input
                  type="Email"
                  placeholder="Email"
                  className="border-contact_input py-2 px-7 w-72 md:py-4 md:px-8 border-2 rounded-md mb-7"
                />
              </div>
              <div className="my-5 flex justify-center">
                <input
                  type="text"
                  className="subject-input md:pl-2"
                  placeholder="Subject"
                />
              </div>
              <div className="flex justify-center">
                <input
                  type="text"
                  placeholder="Type Your Message"
                  className="border-contact_input py-4 px-7 border-2 rounded-md h-32 w-72 lg:w-full"
                />
              </div>
              <button className="contact-btn">Send message</button>
            </form>
          </div>
          <div className="w-3/4 text-center lg:text-left md:flex md:flex-col ">
            <p className="mb-8 md:mb-10">
              Dynamically underwhelm integrated outsourcing via timely models.
              Rapidiously reconceptualize visionary imperatives without.
            </p>
            <div className="text-center lg:text-left md:flex md:justify-center md:flex-col ">
              <div>
                <p className="mb-3">info.@pova.com</p>
                <p className="mb-3">+233000000000</p>
                <p className="mb-9">Accra, Ghana</p>
              </div>
              <div className="flex justify-center md:text-left">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="general-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Contactpage;
