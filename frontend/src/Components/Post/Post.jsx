import { useEffect, useState } from "react";
import Navbar from "../../Utils/Navbar";
import axios from "axios";

const Post = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/posts/getallPost"
      );

      const post = response.data;
      const updatedPosts = await Promise.all(
        post.map(async (post) => {
          const userResponse = await axios.get(
            `http://localhost:5000/api/auth/getUser/${post.userId}`
          );
          return { ...post, user: userResponse.data };
        })
      );

      setAllPosts(updatedPosts);
    };

    fetchAllPosts();
  });

  // console.log(allPosts);
  return (
    <>
      <div className="min-h-screen h-screen w-full">
        <Navbar />
        <div className="h-full w-full flex flex-col justify-center items-center">
          <div className="h-[6vmax] w-full"></div>
          <div className="w-full h-[70%] bg-[#f8f8f8] flex justify-center items-center px-[1vmax]">
            <div className="flex w-full h-[90%] justify-around items-center gap-7">
              {allPosts.map((post) => {
                return (
                  <div
                    key={post._id}
                    className="flex bg-white flex-col justify-center items-center h-full w-[30%]"
                  >
                    <div className="flex justify-center items-center w-full h-[70%]">
                      <a target="_blank" className="h-full w-full" href={post.productLink}>
                        <img
                          src={post.imageUrl}
                          alt=""
                          className="overflow-hidden
                       object-fit h-full w-full"
                        />
                      </a>
                    </div>

                    <div className="h-[30%] w-full flex flex-col justify-center items-start">
                      <p className=" w-full flex justify-center items-center h-[40%] font-font1 text-[14px] px-5">
                        {post.caption}
                      </p>
                      <div className="flex justify-between items-center w-full px-2">
                        <div className="flex h-[60%] w-full px-2 justify-start items-center gap-4">
                          <div className="h-[3vmax] w-[3vmax] bg-blue-500 rounded-full overflow-hidden">
                            <img src={post.user.user.profilePicture} alt="" />
                          </div>
                          <div className="font-font1 font-bold">
                            {post.user.user.username}
                          </div>
                        </div>
                        <button className="cursor-pointer transition-all bg-transparent px-4 py-1 rounded-lg border-red-500 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]active:border-b-[2px] active:brightness-90 active:translate-y[2px] hover:shadow-xl hover:shadow-red-800 shadow-red-500/50 active:shadow-none">
                          Follow
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
