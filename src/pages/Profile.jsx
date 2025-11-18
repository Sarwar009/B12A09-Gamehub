
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Profile = () => {

  const { user } = useAuth();
  useEffect(()=> { document.title = "GameHub • Profile"; }, []);
  if (!user) return null;

    return (
        <div className="max-w-3xl mx-auto p-6 mt-8 bg-slate-800 rounded">
      <div className="flex items-center gap-6">
        <img src={user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || "User")}`} alt="avatar" className="w-24 h-24 rounded-full" />
        <div>
          <h2 className="text-2xl font-bold">{user.displayName || "No name set"}</h2>
          <p className="text-slate-300 mt-1">{user.email}</p>
          <Link to="/profile/update" className="mt-4 inline-block px-3 py-1 border rounded">Update Information</Link>
        </div>
      </div>
    </div>
    );
}

export default Profile;
