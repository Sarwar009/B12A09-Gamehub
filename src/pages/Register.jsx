import React, {useState, useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {EyeIcon, EyeOffIcon} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Register () {
  
    const {login, googleLogin} = useAuth ();
  const [showPassword, setShowPassword] = useState (false);
  const {register} = useAuth ();
  const [name, setName] = useState ('');
  const [email, setEmail] = useState ('');
  const [photoURL, setPhotoURL] = useState ('');
  const [password, setPassword] = useState ('');
  const navigate = useNavigate ();
  const from = location.state?.from?.pathname || '/';

  useEffect (() => {
    document.title = 'GameHub • Register';
  }, []);

  console.log(login);
  

  function validatePassword (password) {
    if (password.length < 6) return 'Password must be at least 6 characters.';
    if (!/[A-Z]/.test (password))
      return 'Password must contain an uppercase letter.';
    if (!/[a-z]/.test (password))
      return 'Password must contain a lowercase letter.';
    return null;
  }

  async function handleSubmit (e) {
    e.preventDefault ();
    const err = validatePassword (password);
    if (err) return alert (err);
    try {
      await register ({name, email, password, photoURL});
      navigate ('/');
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

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-slate-800 rounded">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          required
          value={name}
          onChange={e => setName (e.target.value)}
          placeholder="Name"
          className="w-full p-2 rounded bg-slate-700"
        />
        <input
          required
          value={email}
          onChange={e => setEmail (e.target.value)}
          placeholder="Email"
          className="w-full p-2 rounded bg-slate-700"
        />
        <input
          value={photoURL}
          onChange={e => setPhotoURL (e.target.value)}
          placeholder="Photo URL"
          className="w-full p-2 rounded bg-slate-700"
        />

        <div className="relative">
          <input
            required
            value={password}
            onChange={e => setPassword (e.target.value)}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="w-full p-2 rounded bg-slate-700 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword (!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
          >
            {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
          </button>
        </div>

        <button className="w-full px-4 py-2 my-4 bg-indigo-600 rounded">
          Sign Up
        </button>
      </form>

      <h3 className="my-5 font-semibold text-center">Or Sign Up With</h3>

      <button
            onClick={handleGoogle}
            className=" btn bg-white text-black border-[#e5e5e5] w-full"
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

      <p className="mt-3 text-sm cursor-pointer text-center">
        Already have an account?{' '}
        <Link to="/login" className="underline cursor-pointer">
          Login
        </Link>
      </p>
    </div>
  );
}
