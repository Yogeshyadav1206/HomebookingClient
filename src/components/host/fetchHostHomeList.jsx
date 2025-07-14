import React, { useEffect, useState } from "react";
import { getHostHomes } from "../services/interaction";
import HostHomeList from "./displayHostHomeList";

const HostHomes = () => {
  const [Hosthomes, setHosthomes] = useState({
    registeredHomes:[],
    isLoggedIn: false,
    user: {}, 
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getHostHomes();
        if (response) {
          setHosthomes(response); 
        }
      } catch (error) {
        console.error("Error fetching hostHomes list:", error);
      }
    }
    fetchData();
  }, []);
  
  return (
    <div className="container mx-auto p-4">
      <HostHomeList Hosthomes={Hosthomes} setHosthomes={setHosthomes}/>
    </div>
  );
};

export default HostHomes;