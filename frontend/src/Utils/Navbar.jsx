import { profileIcon, shoppingBagIcon, wishlistIcon } from "./Icons";
const Navbar = () => {
  return (
    <>
      <div className="w-full fixed h-[6vmax]">
        <div
          className="flex justify-center gap-[3vmax] items-center w-full h-full bg-[#FFFFFF] text-[
#282C3F] font-font1 text-[14px] font-bold shadow-[2px_4px_9px_0_#d8d8d88a]"
        >
          <img
            src="../assets/images/myntralogo.png"
            alt="not available"
            className="h-[50%]"
          />
          <div className="flex gap-[3vmax]">
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
              <p>HOME & LIVING</p>
            </div>
            <div>
              <p>BEAUTY</p>
            </div>
            <div>
              <p>STUDIO</p>
            </div>
          </div>

          <div>
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="rounded-sm border-[1px] focus:outline-none font-normal w-[30vmax] px-[1vmax] py-[0.5vmax] bg-[#F5F5F6]"
            />
          </div>

          <div className="flex gap-[2vmax]">
            <div className="flex flex-col justify-center items-center">
              {profileIcon}
              <h1>Profile</h1>
            </div>
            <div className="flex flex-col justify-center items-center cursor-pointer hover:scale-[0.9] transition-all hover:transition-all ">
              {wishlistIcon}
              <h1>Wishlist</h1>
            </div>
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
