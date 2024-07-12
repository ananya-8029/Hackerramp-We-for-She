import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Utils/Navbar";

const SharedWishList = () => {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState({});
  const { wishlistId, userId } = useParams();
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/wishlists/${wishlistId}/${userId}/share`
        );
        console.log(response.data);
        setItems(response.data.items);
        setUser(response.data.user);
      } catch (error) {
        console.error("Failed to fetch wishlist:", error);
      }
    };

    fetchWishlist();
  }, [wishlistId, userId]);

  return (
    <>
      <div className="h-screen w-full bg-[#F5F5F6]">
        <Navbar />
        <div className="h-[6vmax] w-full"></div>
        <div className="h-[80vh] w-full bg-white mt-[2vmax] py-[2vmax] px-[2vmax]">
          <h1 className="font-font1 text-[#252525] font-semibold text-[1.5vmax]">
            Hey, Your friend <span className="font-bold">{user.username}</span>{" "}
            shared his wishlist with you
          </h1>

          <div className="py-[2vmax] flex justify-between items-center">
            {items.map((item) => {
              return (
                <div
                  className="font-font1 flex flex-col justify-center items-center gap-2"
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
                    <h1 className="font-bold text-[20px]">{item.itemName}</h1>
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
    </>
  );
};

export default SharedWishList;
