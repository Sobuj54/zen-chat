import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">ZenChat</span>
      <div className="user">
        <img
          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1702737159~exp=1702737759~hmac=9a38926fdab6903b2d40187c5165bf20b2458cc1db64ce5d5d9442882bd044ec"
          alt=""
        />
        <span>john</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
