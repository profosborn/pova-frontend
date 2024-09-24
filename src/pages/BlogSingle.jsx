import Aside from "../components/Aside";
import Menubar from "../components/Menubar";

function BlogSingle() {
  return (
    <div className="blog-view">
      <div>
        <Menubar />
      </div>
      <div>
        <div></div>
        <div className="blog-body">
          <div>
            <div className="blog-section">
              <p className="blog-categ">Travel</p>
              <p className="blog-heading-lg">
                I Created a Developer Rap Video - {"Here's"} What I Learned
              </p>
              <p></p>
              <div className="blog-img">
                <img
                  className="w-full"
                  src="https://i.pinimg.com/236x/f1/13/df/f113df475d4566caa0075c6729960fa3.jpg"
                  alt="image"
                />
              </div>

              <div>
                <p>
                  Did you come here for something in particular or just general
                  Riker-bashing? And blowing into maximum warp speed, you
                  appeared for an instant to be in two places at once. We have a
                  saboteur aboard. We know {"you’re"} dealing in stolen ore. But
                  I wanna talk about the assassination attempt on Lieutenant
                  Worf. Could someone survive inside a transporter buffer for 75
                  years? Fate. It protects fools, little children, and ships.
                </p>
              </div>
              <div className="blog-content">
                <p className="blog-heading-sm">
                  I Created a Developer Rap Video - {"Here's"} What I Learned
                </p>
                <p className="blog-p-sm">
                  Did you come here for something in particular or just general
                  Riker-bashing? And blowing into maximum warp speed, you
                  appeared for an instant to be in two places at once. We have a
                  saboteur aboard. We know {"you’re"} dealing in stolen ore. But
                  I wanna talk about the assassination attempt on Lieutenant
                  Worf. Could someone survive inside a transporter buffer for 75
                  years? Fate. It protects fools, little children, and ships.
                </p>
              </div>
            </div>
            <div></div>
          </div>
          <div>
            <Aside />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default BlogSingle;
