import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ForgotPassword = () => {

  const location = useLocation();
  const prefill = location.state?.email || "";
  const [email, setEmail] = useState(prefill);
  const { resetPassword } = useAuth();

  useEffect(()=> { document.title = "GameHub • Reset Password"; setEmail(prefill); }, [prefill]);

  async function handleReset(e){
    e.preventDefault();
    try {
      await resetPassword(email);
      window.location.href = "https://mail.google.com/";
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div>
      <div className="max-w-md mx-auto mt-12 p-6 bg-slate-800 rounded">
        <h2 className="text-xl font-bold">Reset Password</h2>
        <form onSubmit={handleReset} className="mt-4 space-y-3">
          <input
          value={email} onChange={e=>setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 rounded bg-slate-700"
          />
          <div className="flex items-center justify-between">
            <button className="w-full px-4 py-2 bg-indigo-600 rounded cursor-pointer">
              Reset Password
            </button>
          </div>
        </form>
        <button className="my-8 ml-1 underline text-sm text-gray-400">
          <Link to="/login">Go for login again</Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
