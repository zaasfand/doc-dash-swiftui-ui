
import { AppointmentStats } from "@/types/dashboard";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface DonutChartProps {
  stats: AppointmentStats;
}

const DonutChart = ({ stats }: DonutChartProps) => {
  const data = [
    { name: 'Completed', value: stats.completed },
    { name: 'Pending', value: stats.pending },
    { name: 'Canceled', value: stats.canceled }
  ];

  const COLORS = ['#33C3F0', '#9277FF', '#ea384c'];

  return (
    <div className="mt-6">
      <div className="relative h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={130}
              paddingAngle={0}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h3 className="text-2xl font-bold text-gray-800">Appointments</h3>
          <p className="text-gray-500">Statistics</p>
        </div>
      </div>
      <div className="flex justify-center gap-6 mt-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-swiftui-completed mr-2"></div>
          <span className="text-sm text-gray-600">Completed ({stats.completed}%)</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-swiftui-purple mr-2"></div>
          <span className="text-sm text-gray-600">Pending ({stats.pending}%)</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-swiftui-canceled mr-2"></div>
          <span className="text-sm text-gray-600">Canceled ({stats.canceled}%)</span>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
