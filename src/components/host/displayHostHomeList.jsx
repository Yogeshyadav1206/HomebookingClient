import React from "react";
import { Link } from "react-router-dom";
import {removeFromHost} from "../services/interaction"

const HostHomeList = ({ Hosthomes,setHosthomes }) => {
  const { registeredHomes = [] } = Hosthomes;
  const handleRemove = async (homeId) => {
    try {
      const result = await removeFromHost(homeId);
      if (result && result.success) {
        // update homes list locally
        const updatedHomes = registeredHomes.filter(home => home._id !== homeId);
        // setHosthomes(updatedHomes); can not do becuse setHosthomes is an object and we cant replace it with array as we declare its initial state as object
        setHosthomes(prev => ({
          ...prev,
          registeredHomes: updatedHomes,
        }));
      }
    } catch (err) {
      console.error("Error removing home:", err);
    }
  };
  return (
    <>
      {/* Include your head and nav using layout or directly here */}
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-4">
              Your Property Portfolio
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Manage and showcase your exceptional properties that guests love
            </p>
          </div>
          
          {registeredHomes.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 max-w-md mx-auto shadow-xl border border-white/20">
                <svg className="w-16 h-16 text-slate-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h3 className="text-xl font-semibold text-slate-700 mb-2">No properties listed yet</h3>
                <p className="text-slate-500 mb-6">Start building your portfolio by adding your first property!</p>
                <Link
                  to="/host/add-home"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add Your First Property
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {registeredHomes.map((home) => (
                <div
                  key={home._id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-cyan-200 hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={`http://localhost:4003/${home.photo.replaceAll(" ", "%20")}`}
                      alt={home.houseName}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 text-amber-500 mr-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-semibold text-slate-700">{home.rating}</span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-cyan-500 text-white rounded-full p-2 shadow-lg">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                      {home.houseName}
                    </h3>
                    
                    <div className="flex items-center text-slate-600 mb-4">
                      <svg className="w-4 h-4 mr-2 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{home.location}</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-baseline">
                        <span className="text-2xl font-bold text-cyan-600">₹{home.price}</span>
                        <span className="text-slate-500 ml-1">/ night</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Link
                        to={`/host/editHome/${home._id}?editing=true`}
                        className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleRemove(home._id)}
                        className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default HostHomeList;
