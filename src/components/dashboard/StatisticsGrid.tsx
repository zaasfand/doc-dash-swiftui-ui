
import StatCard from "./StatCard";
import { StatisticCard } from "@/types/dashboard";

interface StatisticsGridProps {
  statistics: StatisticCard[];
}

const StatisticsGrid = ({ statistics }: StatisticsGridProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      {statistics.map((stat, index) => (
        <StatCard key={index} stat={stat} />
      ))}
    </div>
  );
};

export default StatisticsGrid;
