import Navbar from "../../Utils/Navbar";
import UserNotLoggedIn from "../../Utils/UserNotLoggedIn";

const Wishlist = () => {
  return (
    <>
      <div className="h-screen w-full">
        <Navbar />
        <UserNotLoggedIn />
      </div>
    </>
  );
};

export default Wishlist;
