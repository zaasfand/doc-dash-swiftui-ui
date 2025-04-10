
import SwiftUI

struct DateFilterView: View {
    let currentDate: String
    
    var body: some View {
        HStack {
            VStack(alignment: .leading) {
                Text(currentDate.split(separator: " ")[0])
                    .font(.title2)
                    .fontWeight(.semibold)
                Text(currentDate.split(separator: " ", maxSplits: 1)[1])
            }
            
            Spacer()
            
            Button("Showing all time data") {
                // Action handler
            }
        }
        .padding()
        .background(Color.blue.opacity(0.1))
        .cornerRadius(10)
    }
}
