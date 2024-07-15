import { useEffect, useState } from "react";
import Navbar from "../../Utils/Navbar";
import Scroller from "../../Utils/Scroller";
import axios from "axios";

const Moments = () => {
  const [moments, setMoments] = useState([]);
  // const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchAllMoments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/moments/getallmoments"
        );

        setMoments(response.data);
      } catch (error) {
        console.log("Error occuring while fetching all Moments", error);
      }
    };
    fetchAllMoments();
  });

  return (
    <>
      <div className="min-h-screen w-full">
        <Navbar />

        <div className="h-full w-full flex flex-col justify-center items-center">
          <div className="h-full w-[40%]">
            <div className="h-[6vmax] w-full"></div>
            <Scroller moments={moments} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Moments;
