/* eslint-disable react/prop-types */
function FeaturedPostCard(props) {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {props.author.map((item, index) => {
        return (
          <div key={index} className="flex flex-col mx-16 lg:mx-2">
            <h1 className="text-2xl font-bold">{item.title}</h1>
            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
              <img
                src={item.imgsrc}
                alt="featured post"
                className="w-full h-96 object-cover"
              />
              <div className="flex flex-col p-4">
                <div className="flex items-center mt-2">
                  <div className="flex items-center">
                    <img
                      src={item.authorImg}
                      alt="author"
                      className="w-10 h-10 object-cover rounded-full"
                    />
                    <h1 className="text-sm ml-2">{item.authorName}</h1>
                  </div>
                  <h1 className="text-sm ml-4">{item.dateOfArticles}</h1>
                  <h1 className="text-sm ml-4">{item.timeToRead}</h1>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FeaturedPostCard;
