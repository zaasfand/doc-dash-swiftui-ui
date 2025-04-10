
import SwiftUI

struct StatisticsGridView: View {
    let statistics: [StatCard]
    
    var body: some View {
        LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 15) {
            ForEach(statistics.indices, id: \.self) { index in
                StatCardView(card: statistics[index])
            }
        }
    }
}

struct StatCardView: View {
    let card: StatCard
    
    var body: some View {
        VStack(alignment: .leading) {
            Image(systemName: card.icon)
                .foregroundColor(.white)
                .padding()
                .background(Color.blue)
                .clipShape(Circle())
            
            Text(card.label)
                .foregroundColor(.gray)
            
            Text(card.value)
                .font(.title2)
                .fontWeight(.bold)
            
            if card.trend != .none {
                HStack {
                    Image(systemName: card.trend == .up ? "arrow.up" : "arrow.down")
                        .foregroundColor(card.trend == .up ? .green : .red)
                }
            }
        }
        .padding()
        .background(Color.blue.opacity(0.1))
        .cornerRadius(10)
    }
}
