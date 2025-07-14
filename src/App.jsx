import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/commonpage/nav";
import { getHomePageFromServer } from "./components/services/interaction";
import HomesPage from "./components/commonpage/homesPage";
import Login from "./components/auth/login"; 
import Signup from "./components/auth/signup";
import HomesList from "./components/user/homelist";
import Favourites from "./components/user/fetchFavList";
import Bookings from "./components/user/booking"
import FetchSingleHomeDetails from "./components/user/fetchHomeDetails"; 
import FetchAddHome from "./components/host/fetchAddhome";
import FetchEditHome from "./components/host/fetchEditHome"
import HostHomes from "./components/host/fetchHostHomeList";

function App() {
  const [items, setItems] = useState({
    homePage: [],
    isLoggedIn: false,
    user: {},
  });
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const homePage = await getHomePageFromServer();
      if (homePage) {
        setItems(homePage);
      }
    }
    fetchData();
  }, [refresh]);
  
  return (
    <Router>
      {/* Always show navigation */}
      <Navigation
        currentPage="Home"
        isLoggedIn={items.isLoggedIn}
        user={items.user}
        setItems={setItems}
        triggerRefresh={() => setRefresh(r => !r)}// this will help in refrsh the page when click on "/"
      />
      {/* Render routes based on URL */}
      <Routes>
        <Route path="/" element={<HomesPage registeredHomes={items.homePage} triggerRefresh={() => setRefresh(r => !r)}/>} />
         {/* setItems={setItems} it will chane irems hence ui repaint  */}
        <Route path="/login" element={<Login  setItems={setItems}/>} />
        <Route path="/signup" element={<Signup setItems={setItems} />}/>
        <Route path="/homelist" element={<HomesList/>} />
        <Route path="/favouritelist" element={<Favourites />} />
        <Route path="/booking" element={<Bookings />} />
        <Route path="/homelist/:id" element={<FetchSingleHomeDetails />} />
        <Route path="/host/add-home" element={<FetchAddHome />} />
        <Route path="/host/editHome/:id" element={<FetchEditHome />} />
        <Route path="/host/hosthomelist" element={<HostHomes />} />
      </Routes>
    </Router>
  );
};

export default App;
