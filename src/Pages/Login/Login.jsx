const Login = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">ZenChat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button>Login</button>
        </form>
        <p>Don&apos;t have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
