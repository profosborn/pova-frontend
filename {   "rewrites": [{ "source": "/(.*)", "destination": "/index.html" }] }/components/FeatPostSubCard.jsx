/* eslint-disable react/prop-types */
function FeatPostClone(props) {
  return (
    <div className="flex flex-wrap">
      {props.author.map((item, index) => {
        return (
          <div key={index} className="flex my-10 lg:mx-2 w-full">
            <div className="w-60 h-40 mx-4">
              {" "}
              <img
                src={item.imgsrc}
                alt="featured post"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col h-20">
              <h1 className="text-sm font-medium">{item.title}</h1>
              <div className="flex flex-col p-4">
                <div className="flex items-center mt-2 w-72">
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

export default FeatPostClone;
