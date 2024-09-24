import FeaturedPostCard from "../components/FeaturedPostCard";
import Footer from "../components/Footer";
import Menubar from "../components/Menubar";

function Home() {
    const author =[
        {"title": "Travel", "authorName": "John Doe", "dateOfArticles": "2021-09-01", "timeToRead": "5 min read"},
    ]
  return (
    <div>
      <Menubar />
      <div>
        <FeaturedPostCard
          title={author.title}
          imgSrc={author.imgsrc}
          authorImg={author.authorImg}
          authorName={author.authorName}
          dateOfArticles={author.dateOfArticles}
          timeToRead={author.timeToRead}
        />
      </div>
      <div></div>
      <div></div>
      <Footer />
    </div>
  );
}

export default Home;
