
import SwiftUI

struct LiveAlertsView: View {
    let count: Int
    
    var body: some View {
        Button(action: {}) {
            HStack {
                Image(systemName: "bell")
                Text("Live Alerts")
                Text("\(count)")
                    .background(Color.white)
                    .foregroundColor(.red)
                    .clipShape(Circle())
            }
            .padding()
            .background(Color.red.opacity(0.1))
            .cornerRadius(10)
        }
    }
}
