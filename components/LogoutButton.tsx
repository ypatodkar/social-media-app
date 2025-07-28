import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Google from 'expo-auth-session/providers/google';

// You need to pass your Web Client ID here again for the token revocation
const WEB_CLIENT_ID = "261406484674-gi5ric620ka8oijufm3bp6ng6jeuvdn1.apps.googleusercontent.com";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // 1. Get the access token from storage to revoke it
      const accessToken = await AsyncStorage.getItem('accessToken');

    //   // 2. Revoke the Google token if it exists
    //   if (accessToken) {
    //     await Google.revokeAsync({
    //       token: accessToken,
    //     }, {
    //       // The discovery document is needed for the revocation endpoint
    //       revocationEndpoint: 'https://oauth2.googleapis.com/revoke',
    //     });
    //   }

    } catch (error) {
      // Log the error but don't block the user from logging out
      console.error("Error revoking Google token:", error);
    } finally {
        // 3. Clear user data from local storage regardless of token revocation status
        await AsyncStorage.removeItem('accessToken');
        await AsyncStorage.removeItem('userId');

        // 4. Redirect to the login screen
        // Using replace to prevent the user from going back to the authenticated screen
        router.replace('/login'); 
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleLogout}>
      <Text style={styles.buttonText}>Log Out</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#dc2626', // A red color for logout
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LogoutButton;