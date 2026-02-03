import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-md transition
     ${
       isActive
         ? "bg-blue-600 text-white"
         : "text-slate-300 hover:bg-slate-700 hover:text-white"
     }`;

  return (
    <aside className="w-56 min-h-screen bg-slate-800 p-4">
      <h1 className="text-white text-xl font-bold mb-6 text-center">
        User Management
      </h1>

      <nav className="space-y-2">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>

        <NavLink to="/users" className={linkClass}>
          User
        </NavLink>

        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
      </nav>
    </aside>
  );
}
