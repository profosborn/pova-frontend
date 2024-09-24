import { useState } from "react";
import Author from "./Author";

function PopArtCard(props) {
    // api-call to populate authors
    const [authorName, setAuthorName] = useState('Viola Manisa')

  return (
    <div>
      <img src="" alt="" />
      <div>
        <p>FEATURED</p>
      </div>
      <div>
        <p>{props.title}</p>
      </div>
      <div>
        <Author authorName={authorName} />
      </div>
    </div>
  );
}

export default PopArtCard;
