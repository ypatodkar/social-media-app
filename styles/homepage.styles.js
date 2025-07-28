import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: "#fff",
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 60,
      marginBottom: 20,
    },
    greeting: {
      fontSize: 22,
      fontWeight: "700",
      color: "#111",
      flex: 1,
      marginHorizontal: 12,
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
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
    sectionTitle: {
      fontSize: 18,
      fontWeight: "600",
      marginVertical: 16,
      color: "#222",
    },
    recommendationRow: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    recommendationCard: {
      width: (width - 60) / 2,
      height: 180,
      backgroundColor: "#eee",
      borderRadius: 12,
      padding: 8,
      justifyContent: "flex-start",
    },
    discountTag: {
      backgroundColor: "#fff",
      borderRadius: 6,
      paddingHorizontal: 6,
      paddingVertical: 2,
      alignSelf: "flex-start",
      marginBottom: 8,
    },
    discountText: {
      fontSize: 12,
      fontWeight: "600",
      color: "#111",
    },
    productImagePlaceholder: {
      flex: 1,
      backgroundColor: "#ccc",
      borderRadius: 8,
    },
  });
  