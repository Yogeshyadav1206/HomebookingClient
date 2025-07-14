import React from 'react';
import { submitHome } from '../services/interaction'; 
import { useNavigate } from "react-router-dom";
const HomeForm = ({ editing, home = {}, onSuccess }) => {
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const result = await submitHome(formData, editing);
      // console.log('Success:', result);
      if(result){
        navigate("/host/hosthomelist");
      }
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-2">
              {editing ? 'Edit Your Property' : 'List Your Property'}
            </h1>
            <p className="text-slate-600">
              {editing ? 'Update your property details' : 'Share your amazing space with travelers'}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            method="POST"
            encType="multipart/form-data"
            className="space-y-6"
          >
            {editing && (
              <input type="hidden" name="_id" value={home._id || ''} />
            )}

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Property Name
              </label>
              <input
                type="text"
                name="houseName"
                placeholder="Enter your property name"
                defaultValue={editing ? home.houseName : ''}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Price Per Night (₹)
              </label>
              <input
                type="text"
                name="price"
                placeholder="Enter price per night"
                defaultValue={editing ? home.price : ''}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Location
              </label>
              <input
                type="text"
                name="location"
                placeholder="Enter property location"
                defaultValue={editing ? home.location : ''}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Rating
              </label>
              <input
                type="text"
                name="rating"
                placeholder="Enter property rating (1-5)"
                defaultValue={editing ? home.rating : ''}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Property Photo
              </label>
              <input
                type="file"
                name="photo"
                accept="image/jpg,image/jpeg,image/png"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 bg-white/50 backdrop-blur-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Describe your property..."
                defaultValue={editing ? home.description : ''}
                rows="4"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {editing ? 'Update Property' : 'List Property'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeForm;
