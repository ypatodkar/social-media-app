
import { Stack } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: "none" }}>
      <Stack screenOptions={{headerShown: false}}>
      </Stack>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}
