import React, { useEffect, useState } from "react";
import { gethomelist } from "../services/interaction";
import RegisteredHomes from "./registeredHomes.jsx";

const HomesList = () => {
  const [homes, setHomes] = useState({
    homelist: [], 
    isLoggedIn: false,
    user: {}, 
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await gethomelist();
        if (response && response.homelist) {
          setHomes(response); 
        }
      } catch (error) {
        console.error("Error fetching home list:", error);
      }
    }
    fetchData();
  }, []);

// console.log(homes.homelist.map(home => home._id));
  
  return (
    <div className="container mx-auto p-4">
      <RegisteredHomes registeredHomes={homes.homelist || []} />
    </div>
  );
};

export default HomesList;