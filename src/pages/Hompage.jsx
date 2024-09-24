import FeaturedPostCard from "../components/FeaturedPostCard";
import Footer from "../components/Footer";
import Menubar from "../components/Menubar";

function Home() {
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
    <div>
      <Menubar />
      <div className="my-10">
        <FeaturedPostCard author={author} />
      </div>
      <div></div>
      <div></div>
      <Footer />
    </div>
  );
}

export default Home;
