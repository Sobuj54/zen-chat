import Navbar from "./Navbar/Navbar";
import Search from "./Search/Search";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar></Navbar>
      <Search></Search>
    </div>
  );
};

export default Sidebar;
