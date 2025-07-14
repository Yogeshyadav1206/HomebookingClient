import React, { useEffect, useState } from "react";
import { gethomedetails } from "../services/interaction";
import { useParams } from "react-router-dom";
import HomeDetails from  "./displayHomedetails"
const FetchSingleHomeDetails = () => {
  const [homeDetails, setHomeDetails] = useState({
    home: {}, 
    isLoggedIn: false,  
    user: {}, 
  });

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await gethomedetails(id);
        if (response) {
          setHomeDetails(response);
          console.log("Home details fetched:", response);
        }
      } catch (error) {
        console.error("Error fetching home detail:", error);
      }
    }
    fetchData();
  }, []);
  
  return (
    <div className="container mx-auto p-4">
      <HomeDetails home={homeDetails.home|| {}} />
    </div>
  );
};

export default FetchSingleHomeDetails;