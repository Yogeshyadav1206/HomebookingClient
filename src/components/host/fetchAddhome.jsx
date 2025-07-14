import React, { useEffect, useState } from "react";
import {getaddHome}from "../services/interaction";
import HomeForm from "./addHome"; 
const FetchAddHome = () => {
  const [homePage, setHomePage] = useState({
    editing: true,
    isLoggedIn: false,
    user: {}, 
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getaddHome();
        if (response ) {
          // console.log("res ",response);
          setHomePage(response);
        }
      } catch (error) {
        console.error("Error fetching home list:", error);
      }
    }
    fetchData();
  }, []);
  
  return (
    <div className="container mx-auto p-4">
      <HomeForm homePage={homePage} />
    </div>
  );
};

export default FetchAddHome;