import React, {useState, useEffect} from 'react';
import {useNavigate, useLocation, Link} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login () {
  const {login, googleLogin} = useAuth ();
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const navigate = useNavigate ();
  const location = useLocation ();
  const from = location.state?.from?.pathname || '/';

  useEffect (() => {
    document.title = 'GameHub • Login';
  }, []);

  async function handleSubmit (e) {
    e.preventDefault ();
    if (!email.includes('@') || !email.includes('.')) {
    alert('Please enter a valid email address.');
    return;
  }
    try {
      await login (email, password);
      navigate (from, {replace: true});
    } catch (err) {
      alert (err.message);
    }
  }

  async function handleGoogle () {
    try {
      await googleLogin ();
      navigate (from, {replace: true});
    } catch (err) {
      alert (err.message);
    }
  }

  function handleReset () {
    navigate ('/forgot-password', {state: {email}});
  }

  return (
    <div className="max-w-md mx-auto  mt-12 p-6 bg-slate-800 rounded">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          value={email}
          onChange={e => setEmail (e.target.value)}
          placeholder="Email"
          className="w-full p-2 rounded bg-slate-700"
        />
        <input
          value={password}
          onChange={e => setPassword (e.target.value)}
          type="password"
          placeholder="Password"
          className="w-full p-2 rounded bg-slate-700"
        />
        <div className="my-3">
          <label className="flex items-center gap-2 cursor-pointer mb-4">
            <input type="checkbox" className="checkbox checkbox-primary" />
            <span className="text-sm">Remember Me</span>
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button className="w-full px-4 py-2 bg-indigo-600 rounded cursor-pointer">
            Login
          </button>
        </div>

        <button onClick={handleReset} type="button" className="text-sm">
          <Link to="/forgot-password" className="underline cursor-pointer">
            Forgot Password?
          </Link>
        </button>
      </form>

      <div className="my-4 ">

        <h3 className="my-5 font-semibold text-center">Or Login With</h3>
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleGoogle}
            className=" btn bg-white text-black border-[#e5e5e5] "
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff" />
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                />
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                />
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                />
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                />
              </g>
            </svg>
            Continue with Google
          </button>
          <button className="btn bg-[#1A77F2] text-white border-[#005fd8]">
            <svg
              aria-label="Facebook logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path
                fill="white"
                d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
              />
            </svg>
            Login with Facebook
          </button>
        </div>
      </div>

      <p className="mt-3 text-sm cursor-pointer">
        Don't have an account?
        {' '}
        <Link to="/register" className="underline cursor-pointer">
          Register
        </Link>
      </p>
    </div>
  );
}
