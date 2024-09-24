function FeaturedPost(props) {
    return ( 
        <div className="flex flex-col">
        {props.author.map((item, index) => {
          return (
            <div key={index} className="flex flex-col mx-16 text-sm">
              <h1 className="font-bold">{item.title}</h1>
              <div className="flex flex-col w-2/3">
                <div className="flex flex-col p-4">
                  <div className="flex items-center mt-2">
                    <div className="flex items-center">
                      <img
                        src={item.authorImg}
                        alt="author"
                        className="w-5 h-5 object-cover rounded-full"
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

export default FeaturedPost;