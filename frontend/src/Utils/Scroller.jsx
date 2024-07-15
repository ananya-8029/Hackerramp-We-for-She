/* eslint-disable react/prop-types */
import { useSpring, animated } from "@react-spring/web";
import "./Scroller.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Scroller = ({ moments }) => {
  return (
    <div className="scroller">
      {moments.map((moment, index) => (
        <ScrollerItem key={index} moment={moment} />
      ))}
    </div>
  );
};

const ScrollerItem = ({ moment }) => {
  const [user, setUser] = useState(null);
  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const getEmbedLink = (url) => {
    const match = url.match(/[-\w]{25,}/);
    return match ? `https://drive.google.com/file/d/${match[0]}/preview` : url;
  };
  // console.log(moment);
  const embedLink = getEmbedLink(moment.videoUrl);

  useEffect(() => {
    const fetchuserDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/auth/getUser/${moment.userId}`
        );
        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching followers details:", error);
      }
    };
    fetchuserDetails();
  });
  return (
    <animated.div
      style={springProps}
      className="bg-black scroller-item relative flex flex-col"
    >
      <div className="w-full h-[25%] flex justify-center items-center flex-col">
        <div className="flex w-[80%] justify-center items-center py-3 flex-col">
          <div className="flex justify-between px-[1vmax] items-center w-[70%]">
            <div className="flex justify-center items-center gap-4">
              <div className="h-[3vmax] w-[3vmax] overflow-hidden rounded-full">
                <img src={user ? user.profilePicture : ""} alt="" />
              </div>
              <p className="text-white font-font1 font-bold">
                {user ? user.username : ""}
              </p>
            </div>
            <button
              className="text-white cursor-pointer transition-all bg-transparent px-6 py-2 rounded-lg border-red-500 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]active:border-b-[2px] active:brightness-90 active:translate-y[2px] hover:shadow-xl hover:shadow-red-800 shadow-red-500/50 active:shadow-none"
            >
              Follow
            </button>
          </div>

          <p className="font-font1 font-bold text-white">{moment.caption}</p>
        </div>

        <div className="font-font1 h-[3vmax] w-[40%] flex items-center justify-center font-light tracking-wide text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
          <a target="_blank" href={moment.product.productLink}>
            Know about the product
          </a>
        </div>
      </div>
      <iframe
        src={embedLink}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        // allowFullScreen
        title="Embedded video"
        className="video-element h-[75%] w-full flex justify-end items-end"
      >
        Your browser does not support the video tag.
      </iframe>
    </animated.div>
  );
};

export default Scroller;
