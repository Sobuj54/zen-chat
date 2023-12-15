import "./Register.scss";
import logoImg from "../../assets/images/img-logo.png";

const Register = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">ZenChat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={logoImg} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Register</button>
        </form>
        <p>Already have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
