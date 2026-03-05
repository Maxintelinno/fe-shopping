import { SymbolView } from 'expo-symbols';
import React from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '@/components/Themed';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

const MENU_ITEMS = [
  { id: '1', title: 'My Purchases', icon: 'bag', sub: 'View all orders' },
  { id: '2', title: 'Vouchers & Wallet', icon: 'creditcard', sub: '$500.00' },
  { id: '3', title: 'Royal Rewards', icon: 'crown', sub: '12,450 points' },
  { id: '4', title: 'Settings', icon: 'gear', sub: '' },
  { id: '5', title: 'Help Center', icon: 'questionmark.circle', sub: '' },
];

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header / Profile Info */}
        <View style={[styles.header, { backgroundColor: colors.surface }]}>
          <View style={styles.profileRow}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60' }}
              style={[styles.avatar, { borderColor: colors.accent }]}
            />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>Prince Thakrit</Text>
              <View style={[styles.badge, { backgroundColor: colors.accent }]}>
                <SymbolView name="crown.fill" tintColor="#FFFFFF" size={12} />
                <Text style={styles.badgeText}>ROYALTY GOLD MEMBER</Text>
              </View>
            </View>
            <TouchableOpacity>
              <SymbolView name="gear" tintColor={colors.tabIconDefault} size={24} />
            </TouchableOpacity>
          </View>

          {/* Wallet / Stats */}
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>12</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
            <View style={[styles.statDivider, { backgroundColor: colors.border }]} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>1.2K</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={[styles.statDivider, { backgroundColor: colors.border }]} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>5</Text>
              <Text style={styles.statLabel}>Vouchers</Text>
            </View>
          </View>
        </View>

        {/* Royalty Status Card */}
        <TouchableOpacity style={styles.royaltyCard}>
          <View style={[styles.royaltyGradient, { backgroundColor: colors.tint }]}>
            <View style={styles.royaltyHeader}>
              <View>
                <Text style={styles.royaltyTitle}>Royal Status</Text>
                <Text style={styles.royaltyLevel}>Gold Tier Benefits</Text>
              </View>
              <SymbolView name="chevron.right" tintColor="#FFFFFF" size={20} />
            </View>
            <View style={styles.progressContainer}>
              <View style={[styles.progressTrack, { backgroundColor: 'rgba(255,255,255,0.2)' }]}>
                <View style={[styles.progressFill, { width: '85%', backgroundColor: colors.accent }]} />
              </View>
              <Text style={styles.progressInfo}>850 / 1000 pts to Platinum</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {MENU_ITEMS.map((item) => (
            <TouchableOpacity key={item.id} style={[styles.menuItem, { borderBottomColor: colors.border }]}>
              <View style={styles.menuLeft}>
                <View style={[styles.menuIcon, { backgroundColor: colors.background }]}>
                  <SymbolView name={item.icon as any} tintColor={colors.tint} size={20} />
                </View>
                <Text style={styles.menuTitle}>{item.title}</Text>
              </View>
              <View style={styles.menuRight}>
                {item.sub !== '' && <Text style={[styles.menuSub, { color: colors.tabIconDefault }]}>{item.sub}</Text>}
                <SymbolView name="chevron.right" tintColor={colors.tabIconDefault} size={16} />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={{ color: colors.accent, fontWeight: 'bold' }}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingBottom: 25,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 35,
    borderWidth: 2,
  },
  userInfo: {
    flex: 1,
    marginLeft: 15,
  },
  userName: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 5,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    height: 25,
  },
  royaltyCard: {
    margin: 15,
    borderRadius: 18,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  royaltyGradient: {
    padding: 20,
  },
  royaltyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  royaltyTitle: {
    color: '#A4C639', // Lime Green (Modern royalty)
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 1,
  },
  royaltyLevel: {
    color: '#FFFFFF',
    fontSize: 12,
    opacity: 0.8,
  },
  progressContainer: {
    width: '100%',
  },
  progressTrack: {
    height: 8,
    borderRadius: 4,
    marginBottom: 10,
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressInfo: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'right',
  },
  menuContainer: {
    paddingHorizontal: 15,
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  menuRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuSub: {
    fontSize: 13,
    marginRight: 10,
  },
  logoutButton: {
    marginTop: 30,
    marginBottom: 50,
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D35400', // Burnt Orange
    marginHorizontal: 15,
    alignItems: 'center',
  },
});
