
import { useEffect, useState } from "react";
import { DashboardData } from "@/types/dashboard";
import { getDashboardData } from "@/services/dashboardData";
import Header from "./Header";
import DateFilter from "./DateFilter";
import LiveAlerts from "./LiveAlerts";
import AppointmentsFilter from "./AppointmentsFilter";
import StatisticsGrid from "./StatisticsGrid";
import DonutChart from "./DonutChart";

const Dashboard = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const fetchData = async () => {
      try {
        const dashboardData = getDashboardData();
        setData(dashboardData);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !data) {
    return <div className="p-6 flex justify-center">Loading dashboard...</div>;
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <Header 
        doctorName={data.doctor.name}
        hospitalName={data.doctor.hospital}
        notificationCount={data.notifications.count}
      />
      
      <DateFilter currentDate={data.currentDate} />
      
      <LiveAlerts count={data.notifications.count} />
      
      <AppointmentsFilter />
      
      <StatisticsGrid statistics={data.statistics} />
      
      <DonutChart stats={data.appointmentStats} />
    </div>
  );
};

export default Dashboard;
