import { Link } from "react-router-dom";
import { errorNotLoggedInIcon } from "./Icons";

// eslint-disable-next-line react/prop-types
const UserNotLoggedIn = ({iconName}) => {
  return (
    <>
      <div className="h-full w-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-[1vmax] font-font1">
          <h1 className="font-bold text-[#282C3F] text-[20px]">
            PLEASE LOG IN
          </h1>
          <p className="text-[18px] text-[#CED0D3]">
            {iconName === "wishlist" ? "Login to view items in your wishlist." : "Login to view your profile."}
          </p>
          {errorNotLoggedInIcon}
          <Link to="/login">
            <button className="text-[#3466E8] border-2 rounded-sm py-[1vmax] px-[3vmax] text-[18px] font-semibold border-[#3466E8]">
              LOGIN
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserNotLoggedIn;
