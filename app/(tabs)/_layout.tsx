import { Tabs } from 'expo-router';
import { View } from 'react-native';

export default function TabLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: { display: 'none' }, // Hide tab bar for cleaner magic app experience
        }}>
        <Tabs.Screen name="index" />
        <Tabs.Screen name="categories" />
        <Tabs.Screen name="selection" />
        <Tabs.Screen name="reveal" />
      </Tabs>
    </View>
  );
}