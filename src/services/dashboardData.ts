
import { DashboardData } from "@/types/dashboard";

export const getDashboardData = (): DashboardData => {
  return {
    doctor: {
      name: "Williams",
      hospital: "Green Valley Hospital"
    },
    notifications: {
      count: 5
    },
    currentDate: "Monday Jan 13, 2025",
    statistics: [
      {
        label: "Patients",
        value: "2000",
        icon: "user",
        trend: "up",
        isTrendPositive: true
      },
      {
        label: "Appointments",
        value: "59",
        icon: "calendar-plus",
        trend: "up",
        isTrendPositive: true
      },
      {
        label: "No-Shows",
        value: "579",
        icon: "user-x",
        trend: "up",
        isTrendPositive: false
      },
      {
        label: "Open Slots",
        value: "41",
        icon: "calendar",
        trend: "down",
        isTrendPositive: false
      }
    ],
    appointmentStats: {
      completed: 60,
      pending: 30,
      canceled: 10
    }
  };
};
