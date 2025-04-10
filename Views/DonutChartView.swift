
import SwiftUI

struct DonutChartView: View {
    let stats: AppointmentStats
    
    var body: some View {
        VStack {
            Text("Appointments")
                .font(.title2)
            Text("Statistics")
                .foregroundColor(.gray)
            
            GeometryReader { geometry in
                Path { path in
                    let center = CGPoint(x: geometry.size.width / 2, y: geometry.size.height / 2)
                    let radius = min(geometry.size.width, geometry.size.height) / 2
                    
                    path.addArc(center: center, radius: radius, startAngle: .degrees(0), endAngle: .degrees(360), clockwise: false)
                }
                .fill(Color.blue.opacity(0.2))
            }
            .frame(height: 200)
            
            HStack {
                StatItem(color: .blue, label: "Completed", percentage: stats.completed)
                StatItem(color: .purple, label: "Pending", percentage: stats.pending)
                StatItem(color: .red, label: "Canceled", percentage: stats.canceled)
            }
        }
    }
    
    struct StatItem: View {
        let color: Color
        let label: String
        let percentage: Int
        
        var body: some View {
            HStack {
                Circle()
                    .fill(color)
                    .frame(width: 10, height: 10)
                Text("\(label) (\(percentage)%)")
                    .foregroundColor(.gray)
            }
        }
    }
}
