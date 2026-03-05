import { SymbolView } from 'expo-symbols';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '@/components/Themed';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

export default function CartScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme];

  return (
    <View style={styles.container}>
      <View style={styles.emptyContainer}>
        <View style={[styles.iconCircle, { backgroundColor: colors.surface }]}>
          <SymbolView name="cart.badge.plus" tintColor={colors.tint} size={60} />
        </View>
        <Text style={styles.emptyTitle}>Your Royal Cart is Empty</Text>
        <Text style={[styles.emptySubtitle, { color: colors.tabIconDefault }]}>
          Start shopping and fill it with exquisite items!
        </Text>
        <TouchableOpacity style={[styles.shopButton, { backgroundColor: colors.tint }]}>
          <Text style={styles.shopButtonText}>Shop Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyContainer: {
    alignItems: 'center',
    width: '100%',
  },
  iconCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 10,
    textAlign: 'center',
  },
  emptySubtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 40,
    lineHeight: 20,
  },
  shopButton: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  shopButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
