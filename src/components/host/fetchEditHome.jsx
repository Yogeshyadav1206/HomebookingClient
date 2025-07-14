import React, { useEffect, useState } from "react";
import { getEditHome } from "../services/interaction";
import { useParams } from "react-router-dom";
import HomeForm from "./addHome";

const FetchEditHome = () => {
  const { id } = useParams();
  const [homePage, setHomePage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getEditHome(id);
        if (response?.home) {
          // console.log("response",response);
          setHomePage(response);
        }
      } catch (error) {
        console.error("Error fetching home list:", error);
      }
    };
    fetchData();
  }, [id]);
  if (!homePage) return <p className="text-center text-gray-500">Loading...</p>;
  return (
    <div className="container mx-auto p-4">
      <HomeForm editing={homePage.editing} home={homePage.home} />
    </div>
  );
};

export default FetchEditHome;
