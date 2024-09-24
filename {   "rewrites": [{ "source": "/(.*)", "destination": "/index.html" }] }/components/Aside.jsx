import AuthorProfile from "../components/AuthorProfile";
import FeatPostClone from "../components/FeatPostSubCard";


function Aside() {
    const author = [
        {
          title: "Travel To America And Asia On the Spot",
          imgsrc:
            "https://i.pinimg.com/236x/f1/13/df/f113df475d4566caa0075c6729960fa3.jpg",
          authorName: "John Doe",
          dateOfArticles: "2021-09-01",
          timeToRead: "5 min read",
        },
        {
          title: "Travel To America And Asia On the Spot",
          imgsrc:
            "https://i.pinimg.com/236x/f1/13/df/f113df475d4566caa0075c6729960fa3.jpg",
          authorName: "John Doe",
          dateOfArticles: "2021-09-01",
          timeToRead: "5 min read",
        },
        {
          title: "Travel To America And Asia On the Spot",
          imgsrc:
            "https://i.pinimg.com/236x/f1/13/df/f113df475d4566caa0075c6729960fa3.jpg",
          authorName: "John Doe",
          dateOfArticles: "2021-09-01",
          timeToRead: "5 min read",
        },
      ];


    return ( 
        <div className="lg:flex">
        <div className="my-32 lg:my-9 ml-7">
          <div className="">
            <h1 className="hm-heading">Top Authors</h1>
            <div>
              <AuthorProfile author={author} />
            </div>
          </div>
          <div className=" bg-orange_primary w-72 lg:w-96 my-20 text-white p-10">
            <div className="flex justify-end text-sm">
              <p>Ad</p>
            </div>
            <div className="font-semibold">
              <p>Want to travel sikkim by car?</p>
            </div>
            <div className="my-3">
              <p>
                Did you come here for something in particular or just general
                Riker-bashing? And blowing into
              </p>
            </div>
            <button className="bg-white text-orange_primary px-5">
              Visit Us
            </button>
          </div>
          <div>
            <p className="hm-heading">Categories</p>
            <div className="mt-6">
              <div className="flex justify-between border-b-2 border-dashed mb-3">
                <p>Lifestyle</p>
                <p>{"insert values from feed"}</p>
              </div>
              <div className="flex justify-between border-b-2 border-dashed mb-3">
                <p>Lifestyle</p>
                <p>{"insert values from feed"}</p>
              </div>
              <div className="flex justify-between border-b-2 border-dashed mb-3">
                <p>Lifestyle</p>
                <p>{"insert values from feed"}</p>
              </div>
              <div className="flex justify-between border-b-2 border-dashed mb-3">
                <p>Lifestyle</p>
                <p>{"insert values from feed"}</p>
              </div>
            </div>
          </div>
          <div className="mt-14 flex flex-col ">
            <p className="hm-heading">{"Today's Update"}</p>
            <div className="update-cards">
              <div className="update-card">
                <p>14</p>
                <p>New Posts</p>
              </div>
              <div className="update-card">
                <p>480</p>
                <p>Total Visitors</p>
              </div>
              <div className="update-card">
                <p>29</p>
                <p>New Subscribers</p>
              </div>
              <div className="update-card">
                <p>138</p>
                <p>Blog Read</p>
              </div>
            </div>
            <div className="mt-14 md:ml-0">
              <h1 className="hm-heading">Instagram Posts</h1>
              <div className="instagram-cards">
                <div className="bg-gray-300 w-28 h-28 rounded"></div>
                <div className="bg-gray-300 w-28 h-28 rounded">
                  <img src={""} alt="" />
                </div>
                <div className="bg-gray-300 w-28  h-28 rounded">
                  <img src={""} alt="" />
                </div>
                <div className="bg-gray-300 w-28  h-28 rounded">
                  <img src={""} alt="" />
                </div>
                <div className="bg-gray-300 w-28  h-28 rounded">
                  <img src={""} alt="" />
                </div>
                <div className="bg-gray-300 w-28  h-28 rounded">
                  <img src={""} alt="" />
                </div>
                <div className="bg-gray-300 w-28  h-28 rounded"></div>
                <div className="bg-gray-300 w-28 h-28 rounded"></div>
                <div className="bg-gray-300 w-28 h-28 rounded"></div>
              </div>
            </div>
            <div className="mt-14">
              <p className="hm-heading mb-4 ">{"Search With Tags"}</p>
              <div className="flex flex-wrap">
                <div className="border-2 w-fit px-2 mr-3 my-2">
                  <p>Travel</p>
                </div>
                <div className="border-2 w-fit px-2 mr-3 my-2">
                  <p>Lifestyle</p>
                </div>
                <div className="border-2 w-fit px-2 mr-3 my-2">
                  <p>Fashion</p>
                </div>
                <div className="border-2 w-fit px-2 mr-3 my-2">
                  <p>Technology</p>
                </div>
                <div className="border-2 w-fit px-2 mr-3 my-2">
                  <p>Business</p>
                </div>
                <div className="border-2 w-fit px-2 mr-3 my-2">
                  <p>Design</p>
                </div>
                <div className="border-2 w-fit px-2 mr-3 my-2">
                  <p>Health</p>
                </div>
                <div className="border-2 w-fit px-2 mr-3 my-2">
                  <p>Food</p>
                </div>
                <div className="border-2 w-fit px-2 mr-3 my-2">
                  <p>Art</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}

export default Aside;