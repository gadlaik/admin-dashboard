import "./Main.css";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import CallSplitOutlinedIcon from "@mui/icons-material/CallSplitOutlined";
import harambe from "../../assets/harambe.jpg";

function Main() {
  return (
    <div id="main">
      <h2 className="projects-title">Your Projects</h2>

      <div className="projects">
        <div className="project">
          <h3>Lorem, ipsum dolor.</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
            similique, impedit aut enim saepe natus?
          </p>
          <div className="icons">
            <StarBorderOutlinedIcon />
            <RemoveRedEyeOutlinedIcon />
            <CallSplitOutlinedIcon />
          </div>
        </div>
        <div className="project">
          <h3>Lorem, ipsum.</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            nihil eveniet voluptates!
          </p>
          <div className="icons">
            <StarBorderOutlinedIcon />
            <RemoveRedEyeOutlinedIcon />
            <CallSplitOutlinedIcon />
          </div>
        </div>
        <div className="project">
          <h3>Lorem, ad.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugiat
            dolore ab omnis, cupiditate est hic beatae molestias?
          </p>
          <div className="icons">
            <StarBorderOutlinedIcon />
            <RemoveRedEyeOutlinedIcon />
            <CallSplitOutlinedIcon />
          </div>
        </div>
        <div className="project">
          <h3>Lorem, ipsum dolor.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            illo tenetur, itaque voluptatem omnis tempore laborum sequi autem
            nisi ipsum suscipit beatae eius laudantium maiores!
          </p>
          <div className="icons">
            <StarBorderOutlinedIcon />
            <RemoveRedEyeOutlinedIcon />
            <CallSplitOutlinedIcon />
          </div>
        </div>
        <div className="project">
          <h3>Lorem, ipsum dolor.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem esse
            voluptas voluptatibus quaerat explicabo repellat ea commodi, ratione
            tempora sint non deleniti.
          </p>
          <div className="icons">
            <StarBorderOutlinedIcon />
            <RemoveRedEyeOutlinedIcon />
            <CallSplitOutlinedIcon />
          </div>
        </div>
        <div className="project">
          <h3>Lorem, ipsum.</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            magni aperiam quia optio ratione debitis iste dolore rem cumque
            fugiat.
          </p>
          <div className="icons">
            <StarBorderOutlinedIcon />
            <RemoveRedEyeOutlinedIcon />
            <CallSplitOutlinedIcon />
          </div>
        </div>
      </div>

      <h2 className="announcements-title">Announcements</h2>

      <div className="side-main">
        <div className="announcements">
          <div className="announcement">
            <h4>Site Maintence</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
              quasi a molestias beatae labore.
            </p>
          </div>
          <hr />
          <div className="announcement">
            <h4>Community Share Day</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              similique accusantium illo inventore.
            </p>
          </div>
          <hr />
          <div className="announcement">
            <h4>Uploaded Privacy Policy</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
              possimus magnam in quaerat recusandae ipsam.
            </p>
          </div>
        </div>

        <h2>Trending</h2>
        <div className="trending">
          <div className="trending-item">
            <img src={harambe} id={"avatar"} alt="img" />
            <div>
              <h4>@harambe99</h4>
              <p>World Peace Builder</p>
            </div>
          </div>
          <div className="trending-item">
            <img src={harambe} id={"avatar"} alt="img" />
            <div>
              <h4>@harambe99</h4>
              <p>Super Cool Project</p>
            </div>
          </div>
          <div className="trending-item">
            <img src={harambe} id={"avatar"} alt="img" />
            <div>
              <h4>@harambe99</h4>
              <p>Life Changing App</p>
            </div>
          </div>
          <div className="trending-item">
            <img src={harambe} id={"avatar"} alt="img" />
            <div>
              <h4>@harambe99</h4>
              <p>No Traffic Maker</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
