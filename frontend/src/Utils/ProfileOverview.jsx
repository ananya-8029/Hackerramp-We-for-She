import { useSelector } from "react-redux";

const ProfileOverview = () => {
  const userData = useSelector((state) => state.userReducer.user);
  return (
    <>
      <div className="h-full w-full flex justify-center items-center">
        <div className="h-full w-[80%]">
          <div className="h-[5vmax] w-full  flex justify-start items-end border-b-2 pb-1">
            <h1 className="pl-3 font-font1 font-semibold text-[20px]">
              Profile Details
            </h1>
          </div>
          <div className="flex flex-col gap-[2vmax] justify-start items-start pl-6 h-full pt-[2vmax]">
            <div className="flex gap-[6vmax]">
              <p className="font-font1 text-[15px]">Full Name </p>
              <p className="font-font1 text-[15px]">
                {userData ? userData.username : ""}
              </p>
            </div>

            <div className="flex gap-[7.8vmax]">
              <p className="font-font1 text-[15px]">Email</p>
              <p className="font-font1 text-[15px]">
                {userData ? userData.email : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileOverview;
