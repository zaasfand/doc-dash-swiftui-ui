
import SwiftUI

struct HeaderView: View {
    let doctorName: String
    let hospitalName: String
    let notificationCount: Int
    
    var body: some View {
        HStack {
            VStack(alignment: .leading) {
                Text("Welcome")
                    .foregroundColor(.gray)
                Text("Dr. \(doctorName)!")
                    .font(.title)
                    .fontWeight(.bold)
                Text("Affiliated with \(hospitalName)")
                    .foregroundColor(.gray)
            }
            
            Spacer()
            
            Button(action: {}) {
                Image(systemName: "bell.fill")
                    .foregroundColor(.blue)
                    .overlay(
                        Text("\(notificationCount)")
                            .font(.caption)
                            .foregroundColor(.white)
                            .background(Color.red)
                            .clipShape(Circle())
                            .offset(x: 10, y: -10)
                    )
            }
        }
    }
}
