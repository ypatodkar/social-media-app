import React from 'react';
import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ICON_SIZE = 30;

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#6A5ACD",
          borderTopWidth: 0,
          position: "absolute",
          elevation: 0,
          height: 100,
          paddingTop: 16,
          borderTopLeftRadius: 26, 
          borderTopRightRadius: 26,
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Ionicons name="home" size={ICON_SIZE} color={color} />
              {focused && <View style={styles.indicator} />}
            </View>
          ),
        }}
      />

      {/* Wardrobe Tab */}
      <Tabs.Screen
        name="tryonHistory" // 👈 This name must match your file: wardrobe.tsx
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: 'center' }}>
              <MaterialCommunityIcons name="wardrobe" size={ICON_SIZE} color={color} />
              {focused && <View style={styles.indicator} />}
            </View>
          ),
        }}
      />

      {/* Chatbot Tab */}
      <Tabs.Screen
        name="chatbot"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Ionicons name="chatbubble" size={ICON_SIZE} color={color} />
              {focused && <View style={styles.indicator} />}
            </View>
          ),
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: 'center' }}>
               <MaterialCommunityIcons name="account" size={ICON_SIZE} color={color} />
              {focused && <View style={styles.indicator} />}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

// I created a small style object to avoid repeating the indicator style
const styles = {
  indicator: {
    height: 3,
    width: 24,
    backgroundColor: 'white',
    marginTop: 6,
    borderRadius: 2,
  }
};