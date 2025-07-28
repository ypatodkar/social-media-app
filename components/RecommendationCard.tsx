// components/RecommendationCard.tsx

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

type Props = {
  discount: string;
};

export default function RecommendationCard({ discount }: Props) {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.discountTag}>
        <Text style={styles.discountText}>{discount}</Text>
      </View>

      {/* Placeholder area for image */}
      <View style={styles.productImagePlaceholder} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: (width - 60) / 2,
    height: 180,
    backgroundColor: "#f1f1f1",
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
