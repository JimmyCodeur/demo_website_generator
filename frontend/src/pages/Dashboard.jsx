import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import Sidebar from "../components/dashbord/Sidebar";
import Header from "../components/dashbord/Header";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      navigate("/auth");
    } else {
      setUser(currentUser);
    }
  }, [navigate]);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} />
      <div className="flex flex-col flex-1">
        <Header user={user} navigate={navigate} />
      </div>
    </div>
  );
};

export default Dashboard;
