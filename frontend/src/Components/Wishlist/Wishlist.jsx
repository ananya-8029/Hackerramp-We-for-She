import { useEffect, useState } from "react";
import Navbar from "../../Utils/Navbar";
import UserNotLoggedIn from "../../Utils/UserNotLoggedIn";
import Footer from "../../Utils/Footer";
import { useSelector } from "react-redux";
import { shareIcon } from "../../Utils/Icons";

const Wishlist = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const allItems = useSelector((state) => state.wishListReducer.wishLists[0]);

  const handleShared = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(allItems.shareableLink)
        .then(() => {
          alert("Link copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    }
  };
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
          <div className="flex justify-center items-center h-screen w-full bg-[#F5F5F6] flex-col">
            <div className="h-[6vmax] w-full"></div>
            <div className="h-[80vh] min-h-[80vh] w-full bg-white px-[3vmax] pt-[3vmax]">
              <div className="flex justify-between">
                <h1 className="font-font1 font-bold text-[1.2vmax]">
                  My WishList &nbsp;
                  <span className="font-normal">
                    {allItems ? allItems.items.length : 0} items
                  </span>
                </h1>
                <div
                  className="hover:scale-110 transition-all hover:transition-all cursor-pointer"
                  onClick={handleShared}
                >
                  {shareIcon}
                </div>
              </div>

              <div className="w-full flex justify-between items-center my-[2vmax]">
                {allItems &&
                  allItems.items.map((item) => {
                    return (
                      <div
                        className=" font-font1 flex flex-col justify-center items-center gap-2"
                        key={item._id}
                      >
                        <div className="h-[20vmax] w-full">
                          <img
                            src={item.itemImage}
                            className="h-full w-full"
                            alt=""
                          />
                        </div>
                        <div className="">
                          <h1 className="font-bold text-[20px]">
                            {item.itemName}
                          </h1>
                          <p className="text-[18px]">{item.itemDescription}</p>
                        </div>
                        <button
                          className="font-semibold border-[1px] rounded-sm w-full border-[#ea6281] py-[0.2vmax]"
                          onClick={() => (window.location.href = item.itemLink)}
                        >
                          Know More
                        </button>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        ) : (
          <UserNotLoggedIn iconName="wishlist" />
        )}
        <Footer />
      </div>
    </>
  );
};

export default Wishlist;
