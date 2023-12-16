import Navbar from "./Navbar/Navbar";
import People from "./People/People";
import Search from "./Search/Search";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar></Navbar>
      <Search></Search>
      <People></People>
    </div>
  );
};

export default Sidebar;
