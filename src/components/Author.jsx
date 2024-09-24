function Author(props) {
    return ( 
        <div>
            <div className="w-52 h-52 rounded-2xl"></div>
            <div>
                <p>{props.authorName}</p>
                <p>Verified writer</p>
            </div>
        </div>
     );
}

export default Author;