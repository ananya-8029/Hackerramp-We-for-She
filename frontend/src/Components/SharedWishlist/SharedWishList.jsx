import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
        <h1 className="font-font1 font-medium text-[1.5vmax]">
          Hey, Your friend {user.username} shared his wishlist with You
        </h1>
        <div>
          {items.map((item) => {
            return <div key={item._id}></div>;
          })}
        </div>
      </div>
    </>
  );
};

export default SharedWishList;
