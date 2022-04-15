import "./Header.css";
import userAvatar from "../../assets/harambe.jpg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

function Header() {
  return (
    <div id="header">
      <div className="wrapper">
        <div className="header-search">
          <SearchIcon /> <input type="search" />
        </div>
      </div>

      <div className="wrapper">
        <div className="user-menu">
          <NotificationsActiveOutlinedIcon />
          <img id="avatar" src={userAvatar} alt="avatar" />
          <p className="user-name">Harambe</p>
        </div>
      </div>

      <div className="welcome-user">
        <img src={userAvatar} alt="avatar" id="larger-avatar" />
        <div className="welcome-msg">
          <p>Hi there, </p>
          <h2>Harambe (@harambe99)</h2>
        </div>
      </div>

      <div className="user-options">
        <button>New</button>
        <button>Upload</button>
        <button>Share</button>
      </div>
    </div>
  );
}

export default Header;
