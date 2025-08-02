import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from '../context/AuthContext'; // Adjust path if needed

export default function RootLayout() {
  return (
    // 1. Wrap your entire layout with AuthProvider
    <AuthProvider>
      <SafeAreaProvider>
        {/* Note: I removed `backgroundColor: "none"` as it's not a valid style property */}
        <SafeAreaView style={{ flex: 1 }}>
          <Stack screenOptions={{ headerShown: false }} />
        </SafeAreaView>
      </SafeAreaProvider>
    </AuthProvider>
  );
}