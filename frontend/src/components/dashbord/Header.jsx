import NotificationBell from "./NotificationBell";
import MessageBell from "./MessageBell";
import UserDropdown from "./UserDropdown";

const Header = ({ user, navigate }) => {
  return (
    <header className="bg-white shadow-md p-6 flex items-center justify-between relative">
      <h1 className="text-xl font-semibold text-gray-700">Tableau de Bord</h1>
      <div className="flex items-center space-x-6">
        <NotificationBell />
        <MessageBell /> 
        <UserDropdown user={user} navigate={navigate} />
      </div>
    </header>
  );
};

export default Header;
