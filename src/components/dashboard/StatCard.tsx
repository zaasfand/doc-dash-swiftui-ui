
import { 
  UserIcon, 
  CalendarPlusIcon, 
  UserXIcon, 
  CalendarIcon,
  TrendingUpIcon,
  TrendingDownIcon
} from "lucide-react";
import { StatisticCard } from "@/types/dashboard";

interface StatCardProps {
  stat: StatisticCard;
}

const StatCard = ({ stat }: StatCardProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'user':
        return <UserIcon className="h-6 w-6 text-white" />;
      case 'calendar-plus':
        return <CalendarPlusIcon className="h-6 w-6 text-white" />;
      case 'user-x':
        return <UserXIcon className="h-6 w-6 text-white" />;
      case 'calendar':
        return <CalendarIcon className="h-6 w-6 text-white" />;
      default:
        return <UserIcon className="h-6 w-6 text-white" />;
    }
  };

  return (
    <div className="bg-swiftui-primary/30 p-5 rounded-xl">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="bg-swiftui-primary-dark rounded-full p-3 inline-flex mb-3">
            {getIcon(stat.icon)}
          </div>
          <h3 className="text-gray-500 mb-1">{stat.label}</h3>
          <p className="text-3xl font-bold">{stat.value}</p>
        </div>
        <div 
          className={`${
            stat.isTrendPositive ? 'text-swiftui-positive' : 'text-swiftui-negative'
          } mt-2`}
        >
          {stat.trend === 'up' ? (
            <TrendingUpIcon className="h-5 w-5" />
          ) : (
            <TrendingDownIcon className="h-5 w-5" />
          )}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
