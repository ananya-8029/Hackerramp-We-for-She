import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../Utils/Navbar";
import UserNotLoggedIn from "../../Utils/UserNotLoggedIn";
import Followers from "../../Utils/Followers";
import Followings from "../../Utils/Followings";

const Community = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const userData = useSelector((state) => state.userReducer.user);
  
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    const expirationTime = localStorage.getItem("authTokenExpiration");

    if (!authToken) {
      setIsUserLoggedIn(false);
    } else {
      if (new Date().getTime() > parseInt(expirationTime, 10)) {
        localStorage.removeItem("authTokenExpiration");
        localStorage.removeItem("authToken");
        setIsUserLoggedIn(false);
      } else {
        setIsUserLoggedIn(true);
      }
    }
  }, [setIsUserLoggedIn]);
  return (
    <>
      <div className="h-screen w-full">
        <Navbar />
        {isUserLoggedIn ? (
          <div className="w-full h-screen min-h-screen flex flex-col justify-center items-center">
            <div className="w-full h-[6vmax]"></div>
            <div className="h-screen mt-[2vmax] w-[70%] px-[2vmax] pt-[2vmax]">
              <div className="h-[15%] w-full border-b-2 flex justify-start items-center gap-2">
                <div className="h-[4vmax] w-[4vmax] rounded-full overflow-hidden">
                  <img
                    src={userData ? userData.profilePicture : ""}
                    className="object-cover h-full w-full"
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="font-font1 font-bold">
                    {userData ? userData.username : ""}
                  </h1>
                  <p className="font-font1 font-light">
                    {userData ? userData.bio : ""}
                  </p>
                </div>
              </div>
              <div className="h-[85%] w-full flex">
                <div className="border-r-2 h-full w-[20%]">
                  <div className=" w-full flex justify-start items-center h-[6vmax] px-[1vmax] border-b-2">
                    <h1 className="font-font1 font-light text-[1vmax]">
                      Overview
                    </h1>
                  </div>

                  <div className=" w-full flex justify-start items-center h-[6vmax] px-[1vmax] border-b-2">
                    <h1 className="font-font1 font-light text-[1vmax] cursor-pointer">
                      Following & Followers
                    </h1>
                  </div>
                </div>
                <div className="h-full w-[70%] m-[1vmax] border-2 flex">
                  <Followings />
                  <Followers />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <UserNotLoggedIn iconName="Profile" />
        )}
      </div>
    </>
  );
};

export default Community;
