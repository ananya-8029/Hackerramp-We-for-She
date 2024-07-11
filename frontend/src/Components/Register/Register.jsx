import { useState } from "react";
import Navbar from "../../Utils/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        { username, email, password }
      );
      if (response.statusText === "OK") {
        setUsername("");
        setEmail("");
        setPassword("");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="h-screen w-full bg-[#FDEFE8] flex justify-center items-center">
        <div className="flex flex-col h-[70vh] justify-start items-center font-font1">
          <img
            className="h-[40%] w-full"
            src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/1/25/f5e9a029-33c3-4a92-811b-ef7917fe6d441674670210687-offer-banner-300-600x240-code-_-MYNTRA300.jpg"
            alt=""
          />
          <div className="h-60% w-full bg-white p-[2vmax]">
            <h1 className="font-bold text-[20px] my-[1vmax]">
              Register <span className="font-normal">or</span> Sign in
            </h1>
            <form
              action=""
              className="flex justify-start items-center flex-col gap-[1vmax]"
            >
              <input
                type="text"
                placeholder="Username"
                required
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                className="border-[1px] w-full p-[0.5vmax] focus:outline-none"
              />
              <input
                type="text"
                placeholder="Email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="border-[1px] w-full p-[0.5vmax] focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="border-[1px] w-full p-[0.5vmax] focus:outline-none"
              />
            </form>

            <div>
              <button
                onClick={handleSubmit}
                className="text-[#fff] border-2 rounded-sm py-[0.5vmax] px-[3vmax] text-[15px] font-semibold bg-[#FF3F6C] w-full my-[1vmax]"
              >
                REGISTER
              </button>
            </div>

            <div className="flex justify-center items-center gap-2">
              <p className="font-medium">Already have an account!</p>
              <Link to="/register" className="text-[#FF3F6C] cursor-pointer">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
