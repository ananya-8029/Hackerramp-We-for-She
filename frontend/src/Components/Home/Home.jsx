import Footer from "../../Utils/Footer";
import Navbar from "../../Utils/Navbar";

const Home = () => {
  return (
    <>
      <div className="h-screen h-min-screen w-full bg-[#FAFBFC]">
        <Navbar />
        <div className="h-[6vmax] w-full"></div>
        <div className="my-[2vmax]">
          <img
            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/4/28338488-13a3-45ad-bbf2-80cbe60503241720096259004-FLAT-300-Off-on-1st-Purchase-Strip.jpg"
            alt=""
          />
        </div>
        <div className="my-[2vmax]">
          <img
            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/4/a8e5ca18-ead2-40bb-9f82-c14bbdfc6e831720089009539-DESKTOP-HP-BANNER_HP_1.jpg"
            alt=""
          />
        </div>
        <div className="my-[2vmax]">
          <img
            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/12/dde45ca3-3735-46e4-847e-815757c0c2d81718179286708-COUPONS-CORNER.jpg"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center my-[2vmax]">
          <img
            src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/4/e3ef7e96-9531-4500-b04d-7118a1d84e221720096258975-MYNTRA100.jpg"
            alt=""
            className="h-full w-[50%]"
          />
          <img
            src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/4/55cd31c7-3e6e-4c14-b401-215c0277a8b81720096258950-MYNTRA200.jpg"
            alt=""
            className="h-full w-[50%]"
          />
        </div>
        <div>
          <img
            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/12/204642d1-12af-4254-9457-f31230d7538b1718179286687-Crazy-Deals.jpg"
            alt=""
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
