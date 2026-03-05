import { Tabs } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import React from 'react';

import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarInactiveTintColor: Colors[colorScheme].tabIconDefault,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme].background,
          borderTopColor: Colors[colorScheme].border,
          elevation: 5,
          shadowOpacity: 0.1,
        },
        headerStyle: {
          backgroundColor: Colors[colorScheme].surface,
        },
        headerTitleStyle: {
          color: Colors[colorScheme].text,
          fontWeight: 'bold',
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'หน้าแรก',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name="house.fill"
              tintColor={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="mall"
        options={{
          title: 'Mall',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name="bag.fill"
              tintColor={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="live"
        options={{
          title: 'Live & Video',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name="play.tv.fill"
              tintColor={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'การแจ้งเตือน',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name="bell.fill"
              tintColor={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'ฉัน',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name="person.fill"
              tintColor={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
