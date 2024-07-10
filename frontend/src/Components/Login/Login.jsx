import Navbar from "../../Utils/Navbar";

const Login = () => {
  return (
    <>
      <div className="h-screen w-full bg-[#FDEFE8]">
        <Navbar />
        <div className="flex min-[calc(100vh - 136px)] justify-center items-center bg-pink-400">
          <img
            className="h-[40%]"
            src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/1/25/f5e9a029-33c3-4a92-811b-ef7917fe6d441674670210687-offer-banner-300-600x240-code-_-MYNTRA300.jpg"
            alt=""
          />
          <div className="h-60% bg-red-200">
            <form action=""></form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
