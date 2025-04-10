
import { BellIcon } from "lucide-react";

interface HeaderProps {
  doctorName: string;
  hospitalName: string;
  notificationCount: number;
}

const Header = ({ doctorName, hospitalName, notificationCount }: HeaderProps) => {
  return (
    <div className="flex justify-between items-start mb-6">
      <div>
        <h2 className="text-gray-600 text-xl font-medium">Welcome</h2>
        <h1 className="text-swiftui-primary-dark text-3xl font-bold">Dr. {doctorName}!</h1>
        <p className="text-gray-500 mt-1">Affiliated with {hospitalName}</p>
      </div>
      <button 
        className="relative bg-white p-4 rounded-full shadow-md"
        aria-label={`Notifications, ${notificationCount} unread`}
      >
        <BellIcon className="h-6 w-6 text-swiftui-primary-dark" />
        {notificationCount > 0 && (
          <span className="absolute top-0 right-0 bg-swiftui-alert text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {notificationCount}
          </span>
        )}
      </button>
    </div>
  );
};

export default Header;
