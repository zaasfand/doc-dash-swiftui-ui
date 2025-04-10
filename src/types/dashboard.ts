
export interface Doctor {
  name: string;
  hospital: string;
}

export interface NotificationCount {
  count: number;
}

export interface StatisticCard {
  label: string;
  value: string | number;
  icon: string;
  trend: 'up' | 'down';
  isTrendPositive: boolean;
}

export interface AppointmentStats {
  completed: number;
  pending: number;
  canceled: number;
}

export interface DashboardData {
  doctor: Doctor;
  notifications: NotificationCount;
  currentDate: string;
  statistics: StatisticCard[];
  appointmentStats: AppointmentStats;
}
