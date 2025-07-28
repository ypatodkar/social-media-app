import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import WeatherCard from "@/components/WeatherCard";
import EventCard from "@/components/EventCard";
import RecommendationCard from "@/components/RecommendationCard";
import { styles } from "@/styles/homepage.styles.js";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="notifications-outline" size={24} color="#333" />
        <Text style={styles.greeting}>Hello Anna,{"\n"}welcome back!</Text>
        <Image
          source={{ uri: "https://i.pravatar.cc/100?img=8" }}
          style={styles.avatar}
        />
      </View>

      {/* Weather Card */}
      <WeatherCard />

      {/* AI Context Card */}
      <EventCard
        title="Dinner with Dave"
        time="7:00 PM, Thursday, July 10th"
        image="https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"/>

      {/* Recommendation Section */}
      <Text style={styles.sectionTitle}>Recommended for you</Text>
      <View style={styles.recommendationRow}>
        <RecommendationCard discount="30% Off" />
        <RecommendationCard discount="30% Off" />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
