export const getHomePageFromServer = async () => {
  try {
    const response = await fetch("https://homebookingserver-1.onrender.com", {
      credentials: "include", // ⬅️ this is required for session/cookie support
    });

    if (!response.ok) {
      throw new Error("Failed to fetch items");
    }
    const data = await response.json();
    // console.log(mapServerItemsToClient(data));
    return mapServerItemsToClient(data);
  } catch (error) {
    alert("Please Login First");
    console.error("Error fetching items:", error);
  }
};
export const gethomelist = async () => {
  try {
    const response = await fetch("https://homebookingserver-1.onrender.com/homelist", {
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch home list");
    }
    const data = await response.json();
    // console.log("Home list data", data);
    return data;
  } catch (error) {
    console.error("Error fetching home list:", error);
  }
};

export const getfavlist = async () => {
  try {
    const response = await fetch("https://homebookingserver-1.onrender.com/favouritelist", {
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch home list");
    }
    const data = await response.json();
    // console.log("Favourite list data", data);
    return data;
  } catch (error) {
    console.error("Error fetching favourite list:", error);
  }
};

export const getBookings = async () => {
  try {
    const response = await fetch("https://homebookingserver-1.onrender.com/booking", {
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch booking list");
    }
    const data = await response.json();
    // console.log("Favourite list data", data);
    return data;
  } catch (error) {
    console.error("Error fetching favourite list:", error);
  }
};

export const gethomedetails = async (homeId) => {
  // console.log("Fetching home details for ID:", homeId);
  try {
    const response = await fetch(`https://homebookingserver-1.onrender.com/homelist/${homeId}`, {
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch home details");
    }
    const data = await response.json();
    // console.log("Home details data", data);
    return data;
  } catch (error) {
    console.error("Error fetching home details:", error);
  }
};

export const addToFav = async (homeId) => {
  console.log("Adding to favourites for home ID:", homeId);
  try {
    const response = await fetch("https://homebookingserver-1.onrender.com/fav", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ id: homeId }),
    });

    if (!response.ok) {
      throw new Error("Failed to add to favourites");
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding to favourites:", error);
  }
};

export const removeFromFav = async (homeId) => {
  // console.log("removing from Fav for home ID:", homeId);
  try {
    const response = await fetch("https://homebookingserver-1.onrender.com/fav-remove", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ id: homeId }),
    });

    if (!response.ok) {
      throw new Error("Failed to add to favourites");
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding to favourites:", error);
  }
};

export const getaddHome = async () => {
  try {
    const response = await fetch("https://homebookingserver-1.onrender.com/host/add-home", {
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch add home page");
    }
    const data = await response.json();
    // console.log("data",data);
    return data;
  } catch (error) {
    console.error("Error fetching add home page:", error);
  }
};
export const getEditHome = async (homeId) => {
  try {
    const response = await fetch(`https://homebookingserver-1.onrender.com/host/editHome/${homeId}`, {
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch add home page");
    }
    const data = await response.json();
    // console.log("data",data);
    return data;
  } catch (error) {
    console.error("Error fetching add home page:", error);
  }
};


export const submitHome = async (formData, editing) => {
  // console.log(
  //   "Form data as object:",
  //   Object.fromEntries(formData.entries())
  // );
  const BACKEND_URL = "https://homebookingserver-1.onrender.com";
  const url = editing
    ? `${BACKEND_URL}/host/editHome`
    : `${BACKEND_URL}/host/add-home`;
  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("Failed to submit home");
    }
    const data = await response.json();
    // console.log("data is here",data);
    return data;
  } catch (error) {
    console.error("Error in submitHome:", error);
    throw error;
  }
};

export const getHostHomes = async () => {
  try {
    const response = await fetch(`https://homebookingserver-1.onrender.com/host/hosthomelist`, {
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch home details");
    }
    const data = await response.json();
    // console.log("Home details data", data);
    return data;
  } catch (error) {
    console.error("Error fetching home details:", error);
  }
};
export const removeFromHost = async (homeId) => {
  // console.log("removing from host for home ID:", homeId);
  try {
    const response = await fetch("https://homebookingserver-1.onrender.com/host/removefromhost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ id: homeId }),
    });

    if (!response.ok) {
      throw new Error("Failed to add to favourites");
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding to favourites:", error);
  }
};

export const UserLogin = async (formData) => {
  // console.log("Form data as object 2:", Object.fromEntries(formData.entries()));
  try {
    const response = await fetch("https://homebookingserver-1.onrender.com/login", {
      method: "POST",
      body: formData,
      credentials: "include",
    });
    if (!response.ok) {
      window.alert("invlid email or password"); 
      throw new Error(errorData.message);
    }
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    // console.error("Error in submitHome:", error);
    throw error;
  }
};
export const UserLogout = async () => {
  try {
    const response = await fetch("https://homebookingserver-1.onrender.com/logout", {
      method: "POST",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Logout failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Logout error:", error);
    throw error;
  }
};
export const UserSignUp = async (formData) => {
  // console.log("Form data as object 2:", Object.fromEntries(formData.entries()));
  try {
    const response = await fetch("https://homebookingserver-1.onrender.com/signup", {
      method: "POST",
      body: formData,
      credentials: "include",
    });
    if (!response.ok) {
      // window.alert("invlid email or password"); 
      throw new Error(errorData.message);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in submitHome:", error);
    throw error;
  }
};

const mapServerItemsToClient = (serverItems) => {
  return {
    homePage: serverItems.homePage,
    userId: serverItems.user?._id,
    pageTitle: serverItems.pageTitle,
    currentPage: serverItems.currentPage,
    isLoggedIn: serverItems.isLoggedIn,
    user: serverItems.user,
  };
};
