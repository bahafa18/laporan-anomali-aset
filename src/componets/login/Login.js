import "./Login.css";

export const Login = () => {
  return (
    <div className="loginPage">
      <div className="cardLogin">
        {/* <div className="leftLogin">
          <h1>Laporan Anomali Switching</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            illo beatae sequi possimus magni, veniam est delectus labore sed
            nulla amet vitae nam ratione consectetur a aperiam dolor tenetur
            fuga.
          </p>
          <span>Belum punya akun ?</span>
          <button>Register</button>
        </div> */}

        <h1>Laporan Anomali Switching</h1>
        <form>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
