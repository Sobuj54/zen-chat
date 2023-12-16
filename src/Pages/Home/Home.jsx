import Chat from "../../components/Chat/Chat";
import Sidebar from "../../components/Sidebar";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar></Sidebar>
        <Chat></Chat>
      </div>
    </div>
  );
};

export default Home;
