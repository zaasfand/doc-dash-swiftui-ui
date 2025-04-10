
import { ChevronRightIcon } from "lucide-react";

const AppointmentsFilter = () => {
  return (
    <button className="w-full bg-swiftui-primary text-white p-4 rounded-xl mb-6 flex items-center justify-center">
      <span className="mr-2">Show appointments by practices</span>
      <ChevronRightIcon className="h-5 w-5" />
    </button>
  );
};

export default AppointmentsFilter;
