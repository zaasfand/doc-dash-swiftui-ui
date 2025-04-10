
import { ChevronRightIcon } from "lucide-react";

interface DateFilterProps {
  currentDate: string;
}

const DateFilter = ({ currentDate }: DateFilterProps) => {
  return (
    <div className="bg-swiftui-primary-dark text-white rounded-xl mb-4 overflow-hidden">
      <div className="flex">
        <div className="border-r border-white/20 p-4 flex-1">
          <p className="text-xl font-semibold">{currentDate.split(' ')[0]}</p>
          <p className="text-lg">{currentDate.split(' ').slice(1).join(' ')}</p>
        </div>
        <button className="flex items-center px-5 flex-1">
          <span className="mr-2">Showing all time data</span>
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default DateFilter;
