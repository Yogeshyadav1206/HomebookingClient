import React from 'react';
import { addToFav }  from "../services/interaction";
import { useNavigate } from 'react-router-dom';
const HomeDetails = ({ home }) => {
  const navigate = useNavigate()
  const handleAddToFav = async () => {
    try {
      const result = await addToFav(home._id);
      if (result) {
         navigate("/favouritelist");
      }
    } catch (err) {
      console.error("Error adding to fav:", err);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-4">
            Property Details
          </h1>
          <p className="text-lg text-slate-600">
            Discover every detail of this exceptional property
          </p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          <div className="relative">
            <img
              src={`https://homebookingserver-1.onrender.com/${home.photo}`}
              alt={home.houseName || 'Home Image'}
              className="w-full h-80 md:h-50 object-cover"
            />
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-amber-500 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-lg font-semibold text-slate-700">{home.rating}</span>
            </div>
          </div>
          <div className="p-1">
            <div className="mb-1">
              <h2 className="text-3xl font-bold text-slate-800 mb-1">{home.houseName}</h2>
              
              <div className="flex items-center text-slate-600 mb-3">
                <svg className="w-5 h-5 mr-3 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">{home.location}</span>
              </div>
              
              <div className="flex items-baseline mb-2">
                <span className="text-4xl font-bold text-cyan-600">₹{home.price}</span>
                <span className="text-slate-500 ml-2 text-lg">/ night</span>
              </div>
              
              {home.description && (
                <div className="mb-2">
                  <h3 className="text-xl font-semibold text-slate-700 mb-3">About this property</h3>
                  <p className="text-slate-600 leading-relaxed">{home.description}</p>
                </div>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToFav}
                className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                Add to Favorites
              </button>
              
              <button
                className="flex-1 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeDetails;
