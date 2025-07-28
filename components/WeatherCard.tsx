import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function WeatherCard() {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" }}
        style={styles.cardImage}
      />
      <View style={styles.cardOverlay}>
        <Text style={styles.cardLabel}>🌤️ Sunny</Text>
        <Text style={styles.cardTitle}>Boston, MA</Text>
        <Text style={styles.cardSubtext}>68°F</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 160,
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 16,
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  cardOverlay: {
    position: "absolute",
    top: 12,
    left: 12,
  },
  cardLabel: {
    color: "#fff",
    fontSize: 12,
    opacity: 0.8,
    marginBottom: 4,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  cardSubtext: {
    color: "#fff",
    fontSize: 14,
    marginTop: 4,
  },
});
