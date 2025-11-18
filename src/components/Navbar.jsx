import {Link, NavLink, useNavigate} from 'react-router-dom';
import {useAuth} from '../context/AuthContext';

export default function Navbar () {
  const {user, logout} = useAuth ();
  const navigate = useNavigate ();

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box mt-3 w-52 p-2 shadow text-black"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/all-games">All Games</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </ul>
          </div>

          <Link to="/" className="flex items-center gap-3">
            <img
              src="/G.png"
              alt="Logo"
              className="w-12 h-12 rounded-4xl items-center"
            />
            <span className="font-bold text-xl">GameHub</span>
          </Link>
        </div>

        <div className="navbar-end gap-3">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-6">
              <NavLink to="/" className="hover:underline">Home</NavLink>
              <NavLink to="/popular" className="hover:underline">Popular</NavLink>
              <NavLink to="/newsletter" className="hover:underline">
                Newsletter
              </NavLink>
              <NavLink to="/all-games" className="hover:underline">All Games</NavLink>
              <NavLink to="/contact" className="hover:underline">Contact</NavLink>
            </ul>
          </div>
          {user &&
            <div className="flex items-center gap-3">
              <NavLink to="/profile">
                <img
                  src={
                    user.photoURL ||
                      `https://ui-avatars.com/api/?name=${encodeURIComponent (user.displayName || 'User')}`
                  }
                  alt="avatar"
                  className="w-9 h-9 rounded-full cursor-pointer"
                  onClick={() => navigate ('/profile')}
                />
              </NavLink>
              <button
                onClick={() => logout ()}
                className="text-sm px-3 py-1 border rounded"
              >
                <NavLink to="/login">Logout</NavLink>
              </button>
            </div>}
          {!user &&
            <NavLink to="/login" className="btn btn-sm btn-info">Login</NavLink>}
          {!user &&
            <NavLink to="/register" className="btn btn-sm btn-primary">
              Register
            </NavLink>}
        </div>
      </div>
    </div>
  );
}
