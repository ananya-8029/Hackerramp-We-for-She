import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Followings = () => {
  const followingsList = useSelector(
    (state) => state.followingsReducer.followings[0]
  );

  const [followingsDetails, setFollowingsDetails] = useState([]);

  useEffect(() => {
    const fetchFollowingsDetails = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        if (!authToken) {
          return;
        }
        if (followingsList) {
          const details = await Promise.all(
            followingsList.map(async (id) => {
              const response = await axios.get(
                `http://localhost:5000/api/auth/getUser/${id}`,
                {
                  headers: {
                    "auth-token": authToken,
                  },
                }
              );
              return response.data;
            })
          );
          setFollowingsDetails(details);
        }
      } catch (error) {
        console.error("Error fetching followers details:", error);
      }
    };

    fetchFollowingsDetails();
  });

  return (
    <>
      <div className="h-full w-[50%] flex justify-center items-center">
        <div className="h-full w-[90%] flex flex-col">
          <div className="h-[10%] w-full flex justify-start items-end border-b-2 pb-2">
            <h1 className="font-font1 text-20px font-semibold">Followings</h1>
          </div>
          <div className="flex flex-col justify-start items-start w-full">
            {followingsDetails.map((followings, index) => {
              return (
                <div key={index} className="w-full">
                  <div className="flex justify-start items-center gap-5 my-[1vmax] border-2 p-[1vmax] w-full">
                    <div className="h-[3vmax] w-[3vmax] rounded-full overflow-hidden">
                      <img src={followings.user.profilePicture} alt="Profile" />
                    </div>
                    <p className="font-font1">{followings.user.username}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Followings;
