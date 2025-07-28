import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      justifyContent: "center",
    },
    slide: {
      width,
      alignItems: "center",
      padding: 24,
      justifyContent: "center",
    },
    image: {
      width: 280,
      height: 280,
      resizeMode: "contain",
      marginBottom: 32,
    },
    text: {
      fontSize: 16,
      color: "#000",
      textAlign: "center",
      marginBottom: 24,
      fontWeight: "500",
    },
    button: {
      backgroundColor: "#6A5ACD",
      paddingVertical: 14,
      paddingHorizontal: 36,
      borderRadius: 12,
      marginTop: 20,
    },
    buttonText: {
      color: "#fff",
      fontWeight: "600",
      fontSize: 16,
    },
    dots: {
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: 30,
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal: 6,
    },
  });
  