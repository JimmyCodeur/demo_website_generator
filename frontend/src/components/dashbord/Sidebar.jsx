import { Home, Users, Folder, Calendar, FileText, BarChart2, Settings, ChevronRight, ChevronLeft } from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`bg-gray-900 text-white h-screen p-6 flex flex-col shadow-lg transition-all duration-300 ${isOpen ? "w-72" : "w-20"} relative`}>
      <button onClick={toggleSidebar} className="text-white mb-4 flex justify-center">
        {isOpen ? <ChevronLeft size={28} /> : <ChevronRight size={28} />}
      </button>

      <nav className="flex-1 flex flex-col items-center">
        <ul className="space-y-3">
          {[
            { icon: Home, label: "Accueil" },
            { icon: Users, label: "Équipe" },
            { icon: Folder, label: "Projets" },
            { icon: Calendar, label: "Calendrier" },
            { icon: FileText, label: "Documents" },
            { icon: BarChart2, label: "Rapports" }
          ].map((item, index) => (
            <li key={index} className="flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer transition justify-start">
              <item.icon size={28} className="flex-shrink-0" />
              <span className={`${!isOpen ? "hidden" : "block"} text-sm font-medium`}>{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto">
        <ul>
          <li className="flex flex-col items-center space-x-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer transition justify-start">
            <Settings size={28} className="flex-shrink-0" />
            <span className={`${!isOpen ? "hidden" : "block"} text-sm font-medium`}>Paramètres</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
