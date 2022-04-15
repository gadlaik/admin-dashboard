import "./Sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import NoteIcon from "@mui/icons-material/Note";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import GppGoodIcon from "@mui/icons-material/GppGood";

function Sidebar() {
  return (
    <div id="sidebar">
      <div className="logo">
        <DashboardIcon /> Dashboard
      </div>

      <ul className="sidebar-menu">
        <li>
          <HomeIcon /> <p>Home</p>
        </li>
        <li>
          <FolderSharedIcon /> <p>Profile</p>
        </li>
        <li>
          <ChatBubbleIcon /> <p>Messages</p>
        </li>
        <li>
          <WatchLaterIcon /> <p>History</p>
        </li>
        <li>
          <NoteIcon /> <p>Tasks</p>
        </li>
        <li>
          <PeopleIcon /> <p>Communities</p>
        </li>
      </ul>

      <ul className="sidebar-menu">
        <li>
          <SettingsIcon /> <p>Settings</p>
        </li>
        <li>
          <HelpCenterIcon /> <p>Support</p>
        </li>
        <li>
          <GppGoodIcon /> <p>Privacy</p>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
