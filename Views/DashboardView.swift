
import SwiftUI

struct DashboardView: View {
    // Mock data to replace the previous React data service
    @State private var doctorName = "John Doe"
    @State private var hospitalName = "Central Hospital"
    @State private var currentDate = "April 10, 2025"
    @State private var notificationCount = 3
    @State private var statistics: [StatCard] = [
        StatCard(icon: "person", label: "Total Patients", value: "1,245", trend: .up),
        StatCard(icon: "calendar.badge.plus", label: "New Appointments", value: "87", trend: .up),
        StatCard(icon: "person.crop.circle.badge.xmark", label: "Canceled", value: "12", trend: .down),
        StatCard(icon: "calendar", label: "Upcoming", value: "45", trend: .none)
    ]
    @State private var appointmentStats = AppointmentStats(
        completed: 60,
        pending: 30,
        canceled: 10
    )
    
    var body: some View {
        ScrollView {
            VStack(spacing: 20) {
                // Header
                HeaderView(
                    doctorName: doctorName, 
                    hospitalName: hospitalName, 
                    notificationCount: notificationCount
                )
                
                // Date Filter
                DateFilterView(currentDate: currentDate)
                
                // Live Alerts
                LiveAlertsView(count: notificationCount)
                
                // Appointments Filter
                AppointmentsFilterView()
                
                // Statistics Grid
                StatisticsGridView(statistics: statistics)
                
                // Donut Chart
                DonutChartView(stats: appointmentStats)
            }
            .padding()
        }
    }
}

// Supporting Structs
struct StatCard {
    let icon: String
    let label: String
    let value: String
    let trend: TrendType
    
    enum TrendType {
        case up
        case down
        case none
    }
}

struct AppointmentStats {
    let completed: Int
    let pending: Int
    let canceled: Int
}
