
import { BellIcon } from "lucide-react";

interface LiveAlertsProps {
  count: number;
}

const LiveAlerts = ({ count }: LiveAlertsProps) => {
  return (
    <button 
      className="w-full bg-swiftui-alert text-white p-4 rounded-xl mb-4 flex items-center justify-center"
      aria-label={`Live Alerts: ${count}`}
    >
      <BellIcon className="h-5 w-5 mr-2" />
      <span className="font-medium">Live Alerts</span>
      <span className="ml-2 bg-white text-swiftui-alert rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">
        {count}
      </span>
    </button>
  );
};

export default LiveAlerts;
