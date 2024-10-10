import sigupImage from "../assets/images/signup_image.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [ fullName, setFullName] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confirmPaswword, setConfirmPaswword ] = useState("");
  const navigate = useNavigate();
  const [ error, setError ] = useState("");

  async function handleSignUp(e) {
    e.preventDefault();
    if (confirmPaswword !== password){
      setError("Passwords do not match");
      return;
    }
    try{
      const response = await axios.post('https://pova-blog.onrender.com/api/v1/auth/register', 
        {
          fullName, email, password
        }
      );

      if (response.status == 201)
        navigate('/signin');

    } catch(err) {
      console.log(err);
      setError('Registration failed!');
    }
  }

  return (
    <div className="flex w-3/4 my-96 mx-auto font-prime_font">
      <div className="">
        <img src={sigupImage} alt="pic" />
      </div>
      <div className="w-2/3 bg-custom_gray">
        <div className="flex m-14 justify-end">
          <p className="text-lg">
           Have an account?{" "}
            <a href="/signin" className="text-orange_primary">Sign in!</a>
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-2xl mb-2 font-semibold">Get Started With Pova</p>
            <p className="font-semibold text-xl text-gray-400">Get started is easy</p>
          </div>
          <form onSubmit={handleSignUp}>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Full Name"
                className="font-medium w-96 p-5 my-5 rounded-lg border-gray-300 border-2"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
              <input
                type="email"
                placeholder="Email"
                className="font-medium w-96 p-5 my-5 rounded-lg border-gray-300 border-2"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
              <input
                type="password"
                placeholder="Password"
                className="font-medium w-96 p-5 my-5 rounded-lg border-gray-300 border-2"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="font-medium w-96 p-5 my-5 rounded-lg border-gray-300 border-2"
                value={confirmPaswword}
                onChange={(e) => {
                  setConfirmPaswword(e.target.value)
                }}
              />
            </div>
            {error && <p className="text-red-500">{error}</p>} {/* Display error */}
            <div>
              <button type="submit" className="text-center w-96 bg-orange_primary border-2 rounded-md p-3 my-9">
                Create Account
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="h-0.5 w-1/4 bg-gray-300"></div>
              <p>Or continue with</p>
              <div className="h-0.5 w-1/4 bg-gray-300"></div>
            </div>
            <div className="flex justify-center mb-14">
              <div className="soc-media-link">Google</div>
              <div className="soc-media-link">Facebook</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
