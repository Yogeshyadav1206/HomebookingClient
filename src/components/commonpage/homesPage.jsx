import React from "react";

const HomesPage = ({ registeredHomes , setItems}) => {
  return (
    <>
  

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-teal-600 to-cyan-700 bg-clip-text text-transparent mb-6 leading-tight">
                Where Dreams Meet Reality
              </h1>
              <div className="w-24 h-2 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-8 rounded-full"></div>
            </div>
            
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl">
                <p className="text-xl md:text-1xl text-slate-700 leading-relaxed font-medium">
                  <span className="text-cyan-600 font-semibold">Unlock extraordinary experiences</span> in handpicked destinations that transform ordinary trips into{" "}
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent font-bold">unforgettable adventures</span>
                </p>
                <div className="flex justify-center mt-6 space-x-4">
                  <div className="flex items-center text-slate-600">
                    <svg className="w-5 h-5 mr-2 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Verified Properties</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <svg className="w-5 h-5 mr-2 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Instant Booking</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <svg className="w-5 h-5 mr-2 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Secure Payments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {registeredHomes.map((home) => (
              <div
                key={home._id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-cyan-200 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={`https://homebooking-server.vercel.app/${home.photo.replaceAll(" ", "%20")}`}
                    alt="Home photo"
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
                  
                  <button
                    type="button"
                    className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default HomesPage;
