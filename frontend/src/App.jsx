import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wishlist from "./Components/Wishlist/Wishlist";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import SharedWishList from "./Components/SharedWishlist/SharedWishList";
import Moments from "./Components/Moments/Moments";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/wishlists/:wishlistId/:userId/share"
            element={<SharedWishList />}
          />
          <Route path="/fashionmoments" element={<Moments />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
