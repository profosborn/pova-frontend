import sigupImage from "../assets/images/signup_image.png";

function SignUp() {
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
          <form action="">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Full Name"
                className="font-medium w-96 p-5 my-5 rounded-lg border-gray-300 border-2"
              />
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
              <input
                type="password"
                placeholder="Confirm Password"
                className="font-medium w-96 p-5 my-5 rounded-lg border-gray-300 border-2"
              />
            </div>
            <div>
              <button className="text-center w-96 bg-orange_primary border-2 rounded-md p-3 my-9">
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
