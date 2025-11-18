
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const UpdateProfile = () => {


  const { user, updateUserProfile } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  useEffect(()=> { document.title = "GameHub • Update Profile"; }, []);

  async function handleSubmit(e){
    e.preventDefault();
    try {
      await updateUserProfile({ displayName: name, photoURL });
      navigate("/profile");
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-slate-800 rounded">
      <h2 className="text-xl font-bold mb-4">Update Info</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
        value={name} onChange={e=>setName(e.target.value)}
          placeholder="Display name"
          className="w-full p-2 rounded bg-slate-700"
        />
        <input
        value={photoURL} onChange={e=>setPhotoURL(e.target.value)}
          placeholder="Photo URL"
          className="w-full p-2 rounded bg-slate-700"
        />
        <button className="px-4 py-2 bg-indigo-600 rounded">
          Update Information
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
