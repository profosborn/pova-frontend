

function FeaturedPostCard(props) {
    return ( 
        <div>
            <div>
                <p>Travel</p>
            </div>
            <div>
                <p>{props.title}</p>
            </div>
            <div>
                <img src={props.imgsrc} alt="" />
            </div>
            <div>
                <div>
                    <div>
                        <img src={props.authorImg} alt="" />
                    </div>
                    <div>{props.authorName}</div>
                </div>
                <div>{props.dateOfArticles}</div>
                <div>{props.timeToRead}</div>
            </div>
            <div>
                <p>{props.article}</p>
            </div>
        </div>
     );
}

export default FeaturedPostCard;