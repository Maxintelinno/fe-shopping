import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SymbolView } from 'expo-symbols';
import React from 'react';
import { Image, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { Text, View } from '@/components/Themed';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

const CATEGORIES = [
  { id: '1', title: 'Fashion', icon: 'apparel' },
  { id: '2', title: 'Beauty', icon: 'sparkles' },
  { id: '3', title: 'Electronics', icon: 'desktopcomputer' },
  { id: '4', title: 'Home', icon: 'house' },
  { id: '5', title: 'Food', icon: 'bag' },
  { id: '6', title: 'Sports', icon: 'figure.walk' },
  { id: '7', title: 'Toys', icon: 'gamecontroller' },
  { id: '8', title: 'Luxury', icon: 'crown' },
];

const QUICK_MENU = [
  { id: '1', title: 'Shopee Mall', icon: 'bag.fill', color: '#D0011B' },
  { id: '2', title: 'Top-Up', icon: 'iphone', color: '#00BFA5' },
  { id: '3', title: 'Food', icon: 'fork.knife', color: '#FFAB00' },
  { id: '4', title: 'Beauty', icon: 'sparkles', color: '#FF4081' },
  { id: '5', title: 'Home', icon: 'house.fill', color: '#5C6BC0' },
  { id: '6', title: 'Mart', icon: 'cart.fill', color: '#43A047' },
  { id: '7', title: 'Coins', icon: 'bitcoinsign.circle.fill', color: '#FFD600' },
  { id: '8', title: 'Deals', icon: 'tag.fill', color: '#F4511E' },
];

const SHOPEE_LIVE = [
  { id: '1', viewers: '1.2k', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&auto=format&fit=crop&q=60' },
  { id: '2', viewers: '850', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&auto=format&fit=crop&q=60' },
  { id: '3', viewers: '2.1k', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&auto=format&fit=crop&q=60' },
];

const SHOPEE_VIDEO = [
  { id: '1', likes: '15.4k', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&auto=format&fit=crop&q=60' },
  { id: '2', likes: '2.1k', image: 'https://images.unsplash.com/photo-1492707892479-7bc2d5a4227c?w=400&auto=format&fit=crop&q=60' },
  { id: '3', likes: '5.2k', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&auto=format&fit=crop&q=60' },
];

const PRODUCTS = [
  {
    id: '1',
    title: 'ลิ้นชักเก็บเงิน ลิ้นชักใส่เงิน รองรับการเชื่อมต่อ POS ทุกระบบ',
    price: '464',
    originalPrice: '1,718',
    discount: '-73%',
    image: 'https://images.unsplash.com/photo-1556742049-02e53f17b99d?w=500&auto=format&fit=crop&q=60',
    sold: '20พัน+',
    location: 'จังหวัดสมุทรปราการ',
    badges: ['Mall'],
    shipping: 'Free',
  },
  {
    id: '2',
    title: 'ถังน้ำแข็ง ถังพักชา ถังสแตนเลส ถังเก็บความร้อน/เย็น 6L-12L',
    price: '114',
    image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=500&auto=format&fit=crop&q=60',
    isLive: true,
    viewers: '1.7k',
    sold: '1.2พัน',
    location: 'กรุงเทพมหานคร',
    badges: ['Preferred'],
  },
  {
    id: '3',
    title: 'ไฟถ่ายรูป 500W LED ไฟไลฟ์สด ไฟสตูดิโอ with 65cm Lantern Softbox',
    price: '329',
    originalPrice: '996',
    discount: '-67%',
    image: 'https://images.unsplash.com/photo-1524143878510-e3b8d6312402?w=500&auto=format&fit=crop&q=60',
    sold: '2พัน+',
    location: 'จังหวัดปทุมธานี',
    badges: ['Choice'],
  },
  {
    id: '4',
    title: "The Innovator's Dilemma: The Revolutionary Book That Will Change...",
    price: '97',
    originalPrice: '250',
    discount: '-61%',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60',
    sold: '5พัน+',
    location: 'ต่างประเทศ',
    badges: ['Preferred+'],
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme];


  const ProductCard = ({ item }: { item: typeof PRODUCTS[0] }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => router.push(`/product/${item.id}`)}
    >
      <View style={styles.productImageContainer}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        {item.discount && (
          <View style={[styles.discountBadge, { backgroundColor: colors.accent }]}>
            <Text style={styles.discountText}>{item.discount}</Text>
          </View>
        )}
        <View style={styles.imageOverlayBottom}>
          <View style={[styles.promoTag, { backgroundColor: colors.secondary }]}>
            <SymbolView name="shippingbox.fill" tintColor={colors.tint} size={10} />
            <Text style={[styles.promoTagText, { color: colors.tint }]}>ส่งฟรี</Text>
          </View>
        </View>
      </View>
      <View style={styles.productInfo}>
        <Text numberOfLines={2} style={styles.productTitle}>
          {item.badges?.includes('Mall') && (
            <View style={styles.mallBadge}>
              <Text style={styles.mallBadgeText}>Mall</Text>
            </View>
          )}
          {item.badges?.includes('Preferred') && (
            <View style={[styles.mallBadge, { backgroundColor: colors.accent }]}>
              <Text style={styles.mallBadgeText}>Preferred</Text>
            </View>
          )}
          {item.title}
        </Text>

        <View style={styles.priceRow}>
          <Text style={[styles.currency, { color: colors.accent }]}>฿</Text>
          <Text style={[styles.currentPrice, { color: colors.accent }]}>{item.price}</Text>
        </View>

        <View style={styles.statsRowGrid}>
          <Text style={styles.soldText}>ขายแล้ว {item.sold}</Text>
        </View>

        <Text style={styles.locationText}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* Custom Shopee Header */}
      <View style={[styles.header, { backgroundColor: colors.accent }]}>
        <View style={styles.headerTopRow}>
          <View style={styles.searchBarContainer}>
            <SymbolView name="magnifyingglass" tintColor="#8E8E93" size={20} />
            <TextInput
              placeholder="Epson L3250"
              placeholderTextColor={colors.accent}
              style={styles.searchInput}
            />
            <TouchableOpacity style={styles.cameraIconInside}>
              <SymbolView name="camera" tintColor="#8E8E93" size={24} />
            </TouchableOpacity>
          </View>

          <View style={styles.headerActionIcons}>
            <TouchableOpacity style={styles.headerIcon}>
              <SymbolView name="cart" tintColor="#FFFFFF" size={28} />
              <View style={[styles.badgeContainer, { borderColor: colors.accent }]}>
                <Text style={[styles.badgeText, { color: colors.accent }]}>99+</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIcon}>
              <SymbolView name="bubble.left.and.bubble.right" tintColor="#FFFFFF" size={26} />
              <View style={[styles.badgeContainer, { borderColor: colors.accent }]}>
                <Text style={[styles.badgeText, { color: colors.accent }]}>57</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
        {/* Placeholder for Sticky Header effect if needed, but standard scroll is fine */}
        <View />

        {/* Banner Carousel */}
        <View style={styles.bannerContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60' }}
            style={styles.banner}
          />
        </View>

        {/* Wallet Bar */}
        <View style={styles.walletBar}>
          <TouchableOpacity style={styles.walletItem}>
            <SymbolView name="creditcard.fill" tintColor={colors.accent} size={18} />
            <View style={styles.walletTextCol}>
              <Text style={styles.walletLabel}>Pay</Text>
              <Text style={styles.walletValue}>฿1,500</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.walletDivider} />
          <TouchableOpacity style={styles.walletItem}>
            <SymbolView name="bitcoinsign.circle.fill" tintColor="#FFD600" size={18} />
            <View style={styles.walletTextCol}>
              <Text style={styles.walletLabel}>Coins</Text>
              <Text style={styles.walletValue}>250</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.walletDivider} />
          <TouchableOpacity style={styles.walletCheckIn}>
            <SymbolView name="calendar.badge.clock" tintColor={colors.accent} size={18} />
            <Text style={styles.checkInText}>Check-in</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Menu */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.quickMenuScroll}
        >
          {QUICK_MENU.map((item) => (
            <TouchableOpacity key={item.id} style={styles.quickMenuItem}>
              <View style={[styles.quickMenuIcon, { backgroundColor: item.color + '15' }]}>
                <SymbolView name={item.icon as any} tintColor={item.color} size={24} />
              </View>
              <Text style={styles.quickMenuText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Siam LIVE */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.shopeeTitle, { color: colors.accent }]}>Siam LIVE</Text>
            <TouchableOpacity onPress={() => router.push('/siam-live')}><Text style={styles.seeMore}>See All &gt;</Text></TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalGrid}>
            {SHOPEE_LIVE.map((item) => (
              <TouchableOpacity key={item.id} style={styles.liveThumbnail}>
                <Image source={{ uri: item.image }} style={styles.liveImage} />
                <View style={styles.liveBadge}>
                  <Text style={styles.liveBadgeText}>LIVE</Text>
                </View>
                <View style={styles.viewCount}>
                  <Text style={styles.viewCountText}>{item.viewers}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Siam Video */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.shopeeTitle, { color: colors.accent }]}>Siam Video</Text>
            <TouchableOpacity><Text style={styles.seeMore}>See All &gt;</Text></TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalGrid}>
            {SHOPEE_VIDEO.map((item) => (
              <TouchableOpacity key={item.id} style={styles.videoThumbnail}>
                <Image source={{ uri: item.image }} style={styles.videoImage} />
                <View style={styles.videoOverlay}>
                  <SymbolView name="play.fill" tintColor="#FFFFFF" size={16} />
                  <Text style={styles.videoStats}>{item.likes}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Discover Product Grid */}
        <View style={[styles.discoveryHeader, { borderBottomColor: colors.accent }]}>
          <Text style={[styles.discoveryTitle, { color: colors.accent }]}>Daily Discover</Text>
        </View>
        <View style={styles.gridContainer}>
          {PRODUCTS.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 12,
    paddingHorizontal: 10,
  },
  headerTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  searchBarContainer: {
    flex: 1,
    height: 44,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#333333',
  },
  cameraIconInside: {
    paddingLeft: 10,
  },
  headerActionIcons: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  headerIcon: {
    position: 'relative',
    padding: 2,
  },
  badgeContainer: {
    position: 'absolute',
    top: -5,
    right: -8,
    backgroundColor: '#FFFFFF',
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EE4D2D',
    paddingHorizontal: 2,
  },
  badgeText: {
    color: '#EE4D2D',
    fontSize: 8,
    fontWeight: 'bold',
  },
  bannerContainer: {
    height: 160,
    width: '100%',
  },
  banner: {
    width: '100%',
    height: '100%',
  },
  walletBar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    marginTop: -20,
    borderRadius: 8,
    paddingVertical: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: 'center',
  },
  walletItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  walletTextCol: {
    justifyContent: 'center',
  },
  walletLabel: {
    fontSize: 10,
    color: '#666666',
  },
  walletValue: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333333',
  },
  walletDivider: {
    width: 1,
    height: '60%',
    backgroundColor: '#EEEEEE',
  },
  walletCheckIn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  checkInText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333333',
  },
  quickMenuScroll: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
  },
  quickMenuItem: {
    alignItems: 'center',
    width: 75,
  },
  quickMenuIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  quickMenuText: {
    fontSize: 11,
    color: '#333333',
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#FFFFFF',
    marginTop: 8,
    paddingVertical: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 12,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 15,
  },
  categoryGrid: {
    paddingBottom: 10,
  },
  categoryItem: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,
    minWidth: '25%',
  },
  categoryIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#1B3A57',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1B3A57',
  },
  shopeeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#EE4D2D',
  },
  seeMore: {
    fontSize: 12,
    color: '#999999',
  },
  horizontalGrid: {
    paddingLeft: 15,
  },
  liveThumbnail: {
    width: 100,
    height: 140,
    borderRadius: 8,
    marginRight: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  liveImage: {
    width: '100%',
    height: '100%',
  },
  liveBadge: {
    position: 'absolute',
    top: 5,
    left: 5,
    backgroundColor: '#D0011B',
    paddingHorizontal: 6,
    borderRadius: 2,
  },
  liveBadgeText: {
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight: 'bold',
  },
  viewCount: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 6,
    borderRadius: 2,
  },
  viewCountText: {
    color: '#FFFFFF',
    fontSize: 9,
  },
  videoThumbnail: {
    width: 100,
    height: 160,
    borderRadius: 8,
    marginRight: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  videoImage: {
    width: '100%',
    height: '100%',
  },
  videoOverlay: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  videoStats: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  discoveryHeader: {
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#EE4D2D',
    marginTop: 8,
    marginHorizontal: '30%',
  },
  discoveryTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#EE4D2D',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingTop: 8,
    backgroundColor: '#F5F5F5',
  },
  productCard: {
    width: '49%',
    backgroundColor: '#FFFFFF',
    marginBottom: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  productImageContainer: {
    width: '100%',
    aspectRatio: 1,
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  discountBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  discountText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },
  imageOverlayBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 4,
  },
  promoTag: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 2,
    gap: 2,
  },
  promoTagText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  productInfo: {
    padding: 8,
  },
  productTitle: {
    fontSize: 13,
    lineHeight: 18,
    height: 36,
    color: '#333333',
    marginBottom: 6,
  },
  mallBadge: {
    backgroundColor: '#D0011B',
    paddingHorizontal: 4,
    borderRadius: 2,
    marginRight: 4,
  },
  mallBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    gap: 4,
  },
  currency: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  currentPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  shopeeVoucher: {
    marginLeft: 2,
  },
  statsRowGrid: {
    flexDirection: 'row',
  },
  soldText: {
    fontSize: 11,
    color: '#8E8E93',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  locationText: {
    fontSize: 10,
    color: '#8E8E93',
    marginLeft: 4,
  },
});
