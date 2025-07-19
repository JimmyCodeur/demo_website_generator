import { useState, useRef, useEffect } from "react";
import { logoutUser } from "../../firebase/AuthServices";

const UserDropdown = ({ user, navigate }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    if (user) {
      await logoutUser(user?.email);
      navigate("/auth");
    }
  };

  return (
    <div className="flex items-center space-x-4 relative" ref={dropdownRef}>
      <div className="flex items-center cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
        {user?.displayName && <span className="text-gray-700 font-medium">{user.displayName}</span>}
        <img src="https://via.placeholder.com/40" alt="Profil" className="w-10 h-10 rounded-full border border-gray-300 ml-2" />
      </div>

      {dropdownOpen && (
        <div className="absolute right-0 top-12 w-56 bg-white shadow-lg rounded-md overflow-hidden z-50 border border-gray-300">
          <button className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 border-b">Modifier mon compte</button>
          <button className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 border-b">Paramètres</button>
          <button onClick={handleLogout} className="block w-full text-left px-4 py-3 text-red-600 hover:bg-gray-100">Déconnexion</button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
