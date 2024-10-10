import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import siginImage from "../assets/images/signin-vector.png";

function Signin() {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const navigate = useNavigate();
  const [ error, setError ] = useState("");

  async function handleLogin(e) {
    e.preventDefault(); // prevents reload

    if (!email){
      setError("Provide your email");
      return;
    } else if (!password){
      setError("Provide your password");
      return;
    }
    try{
      const response = await axios.post('https://pova-blog.onrender.com/api/v1/auth/login',
        {
          email,
          password
        }
      );

      if (response.data.accessToken){
        localStorage.setItem('accessToken', response.data.accessToken);
        navigate('/home');
      }
    } catch (err){
      if (err.response && err.response.status === 401){
        setError("Login failed! Incorrect password");
      } else if (err.response && err.response.status === 404){
        setError("Login failed! User account not found");
      } else {
        setError("Login Failed!");
        console.error(err)
      }
    }
  }

  return (
    <div className="flex w-3/4 p-0 static mx-auto font-prime_font">
      <div className="w-2/3 bg-custom_gray">
        <div className="flex justify-between m-14">
          <p className="text-xl font-semibold">POVA</p>
          <p className="text-lg">
            Don't have an account?{" "}
            <a href="/signup" className="text-orange_primary">Sign up!</a>
          </p>
        </div>
        <div className="flex flex-col items-center  h-60">
          <div className="text-center">
            <p className="text-4xl font-semibold">Welcome Back</p>
            <p className="font-medium my-1">Login into your acount</p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col">
              <input
                type="email"
                placeholder="Email"
                className="font-medium w-96 p-5 my-5 rounded-lg border-gray-300 border-2"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
              />
              <input
                type="password"
                placeholder="Password"
                className="font-medium w-96 p-5 my-5 rounded-lg border-gray-300 border-2"
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
              />
            </div>
            {error && <p className="text-red-500">{error}</p>} {/* Display error */}
            <div className="flex justify-between">
              <p>Remember me</p>
              <p className="text-orange_primary">Forgot Password?</p>
            </div>
            <div>
              <button type="submit" className="text-center w-96 border-gray-500 border-2 rounded-md p-3 my-9">
                Log In
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="h-0.5 w-1/4 bg-gray-300"></div>
              <p>Or continue with</p>
              <div className="h-0.5 w-1/4 bg-gray-300"></div>
            </div>
            <div className="flex justify-center">
              <div className="soc-media-link">Google</div>
              <div className="soc-media-link">Facebook</div>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-orange_primary">
        <img src={siginImage} alt="pic" />
      </div>
    </div>
  );
}

export default Signin;
