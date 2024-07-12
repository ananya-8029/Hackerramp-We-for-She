import { useSelector } from "react-redux";
import {
  fashionMomentsIcon,
  postIcon,
  profileIcon,
  shoppingBagIcon,
  wishlistIcon,
} from "./Icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const userData = useSelector((state) => state.userReducer.user);
  const userId = userData ? userData._id : null;

  const profilePath = userData ? `/profile/${userId}` : "/profile";
  return (
    <>
      <div className="w-full fixed h-[6vmax]">
        <div
          className="flex justify-center gap-[3vmax] items-center w-full h-full bg-[#FFFFFF] text-[
#282C3F] font-font1 text-[14px] font-bold shadow-[2px_4px_9px_0_#d8d8d88a] px-[1vmax]"
        >
          <img
            src="../assets/images/myntralogo.png"
            alt="not available"
            className="h-[50%]"
          />
          <div className="flex gap-[3vmax] justify-center items-center">
            <div>
              <p>MEN</p>
            </div>
            <div>
              <p>WOMEN</p>
            </div>
            <div>
              <p>KIDS</p>
            </div>
            <div>
              <p>HOME</p>
            </div>
            <div>
              <p>BEAUTY</p>
            </div>
            <div>
              <p>STUDIO</p>
            </div>
            <div>
              <button className="group relative inline-flex items-center justify-center p-0.5 text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="relative px-[0.5vmax] py-[0.3vmax] transition-all ease-in duration-200 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  {postIcon}
                </span>
                <div className="ease-in duration-300 opacity-0 group-hover:block group-hover:opacity-100 transition-all">
                  <div className="ease-in-out duration-500 -translate-y-4 pointer-events-none transition-all group-hover:-translate-y-[45px] absolute left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-slate-300 before:-top-2">
                    <div className="rounded-sm bg-black py-1 px-2">
                      <p className="whitespace-nowrap">OOTD</p>
                    </div>
                    <div className="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-black"></div>
                  </div>
                </div>
              </button>
            </div>
            {/* OOTD
           SHOPPABLE POST
           GRWM */}
          </div>

          <div>
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="rounded-sm border-[1px] focus:outline-none font-normal w-[30vmax] px-[1vmax] py-[0.5vmax] bg-[#F5F5F6]"
            />
          </div>

          <div className="flex gap-[2vmax]">
            <div>
              <Link
                to="/fashionmoments"
                className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#ea4c89] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                href="/"
              >
                {fashionMomentsIcon}
                <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-9 duration-700">
                  Moments
                </span>
              </Link>
            </div>
            <Link
              to={profilePath}
              className="flex flex-col justify-center items-center cursor-pointer hover:scale-[0.9] transition-all hover:transition-all"
            >
              {profileIcon}
              <h1>Profile</h1>
            </Link>
            <Link
              to="/wishlist"
              className="flex flex-col justify-center items-center cursor-pointer hover:scale-[0.9] transition-all hover:transition-all "
            >
              {wishlistIcon}
              <h1>Wishlist</h1>
            </Link>
            <div className="flex flex-col justify-center items-center">
              {shoppingBagIcon}
              <h1>Bag</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
