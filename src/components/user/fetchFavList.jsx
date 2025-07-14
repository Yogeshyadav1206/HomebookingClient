import React, { useEffect, useState } from "react";
import { getfavlist } from "../services/interaction";
import FavouriteHomes from "./displayFavHomes"

const Favourites = () => {
  const [favouritesHomes, setFavouritesHomes] = useState({
    favourites: [], 
    isLoggedIn: false,
    user: {}, 
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getfavlist();
        if (response && response.favourites) {
          setFavouritesHomes(response); 
        }
      } catch (error) {
        console.error("Error fetching favourite list:", error);
      }
    }
    fetchData();
  }, []);
  
  return (
    <div className="container mx-auto p-4">
      <FavouriteHomes favourites={favouritesHomes.favourites || []} setFavouritesHomes={setFavouritesHomes} />
    </div>
  );
};

export default Favourites;