import { useState, useRef, useEffect } from "react";
import { Bell } from "lucide-react";

const NotificationBell = () => {
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [hasNewNotif, setHasNewNotif] = useState(false);
  const notifRef = useRef(null);

  const notificationMessages = [
    "📩 Vous avez reçu un message de John Doe.",
    "🤖 L'IA vous attend pour progresser aujourd'hui.",
    "🔥 Nouveau défi disponible dans votre espace !",
    "📅 Rappel : Session de formation demain à 10h.",
    "🎯 Objectif atteint ! Félicitations 👏",
    "🔔 Votre rapport de progression est prêt à consulter.",
    "⚡ Boostez votre apprentissage avec un exercice rapide !"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessage =
        notificationMessages[Math.floor(Math.random() * notificationMessages.length)];

      const newNotif = {
        id: notifications.length + 1,
        text: randomMessage,
        read: false
      };

      setNotifications((prev) => [...prev, newNotif]);
      setHasNewNotif(true); 
    }, 10000); 

    return () => clearInterval(interval);
  }, [notifications]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setNotifOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notif) => ({ ...notif, read: true }))
    );
    setHasNewNotif(false);
  };

  return (
    <div className="relative cursor-pointer" ref={notifRef}>
      <div className="relative" onClick={() => setNotifOpen(!notifOpen)}>
        <Bell
          size={28}
          className={`text-gray-700 ${hasNewNotif ? "animate-bounce" : ""}`}
        />
        {notifications.some((notif) => !notif.read) && (
          <span className="absolute top-0 right-0 -mt-1 -mr-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {notifications.filter((notif) => !notif.read).length}
          </span>
        )}
      </div>

      {notifOpen && (
        <div className="absolute right-0 top-10 w-80 bg-white shadow-lg rounded-md overflow-hidden z-50 border border-gray-300">
          <div className="flex justify-between items-center px-4 py-2 bg-gray-100">
            <span className="font-semibold text-gray-700">Notifications</span>
            <button onClick={markAllAsRead} className="text-blue-600 text-sm hover:underline">
              Tout marquer comme lu
            </button>
          </div>
          
          {notifications.length > 0 ? (
            notifications.map((notif) => (
              <div
                key={notif.id}
                className={`px-4 py-3 text-gray-700 border-b hover:bg-gray-100 flex items-center ${
                  notif.read ? "opacity-50" : ""
                }`}
              >
                {notif.text}
              </div>
            ))
          ) : (
            <div className="px-4 py-3 text-gray-500">Aucune notification</div>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
