import { useNavigate } from "react-router";
import siginImage from "../assets/images/signin-vector.png";

function Signin() {
  const navigate = useNavigate()
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
          <form action="">
            <div className="flex flex-col">
              <input
                type="email"
                placeholder="Email"
                className="font-medium w-96 p-5 my-5 rounded-lg border-gray-300 border-2"
              />
              <input
                type="password"
                placeholder="Password"
                className="font-medium w-96 p-5 my-5 rounded-lg border-gray-300 border-2"
              />
            </div>
            <div className="flex justify-between">
              <p>Remember me</p>
              <p className="text-orange_primary">Forgot Password?</p>
            </div>
            <div>
              <button onClick={()=>navigate('/home')} className="text-center w-96 border-gray-500 border-2 rounded-md p-3 my-9">
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
