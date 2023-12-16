import addFriend from "../../assets/icons/addFriend.png";
import videoCall from "../../assets/icons/videoCall.png";
import more from "../../assets/icons/more.png";
import "./Chat.scss";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>john</span>
        <div className="chatIcons">
          <img src={videoCall} alt="" />
          <img src={addFriend} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
