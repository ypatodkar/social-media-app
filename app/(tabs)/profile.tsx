import React from 'react';
import { View, Text } from 'react-native';
import LogoutButton from '@/components/LogoutButton'; // Adjust the import path

export default function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 40 }}>Your Profile</Text>
      
      {/* Add the logout button here */}
      <LogoutButton />
    </View>
  );
}