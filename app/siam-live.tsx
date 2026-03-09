import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SymbolView } from 'expo-symbols';
import React, { useState } from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

import { Text } from '@/components/Themed';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

const { width } = Dimensions.get('window');

// Mock Data
const AVATARS = [
    { id: '1', name: 'Official Store', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop' },
    { id: '2', name: 'Fashion Hub', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop' },
    { id: '3', name: 'Tech Master', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' },
    { id: '4', name: 'Beauty Queen', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
    { id: '5', name: 'Gadget Guy', image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop' },
    { id: '6', name: 'Home Center', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
];

const BANNERS = [
    { id: '1', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80' },
    { id: '2', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80' },
];

const CATEGORIES = [
    'ทั้งหมด',
    'ร้านไลฟ์โค้ดโหด',
    'ลดทั้งวัน',
    'ไลฟ์ส่งด่วน',
    'แฟชั่น',
    'อิเล็กทรอนิกส์',
];

const LIVES = [
    {
        id: '1',
        thumbnail: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&q=80',
        shopName: 'Shopee Official',
        viewers: '5.2k',
        promoText: 'แจกโค้ด 500.- ทุกออเดอร์',
    },
    {
        id: '2',
        thumbnail: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&q=80',
        shopName: 'Beauty Lab',
        viewers: '1.8k',
        promoText: 'ซื้อ 1 แถม 1 เฉพาะในไลฟ์',
    },
    {
        id: '3',
        thumbnail: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80',
        shopName: 'Trend Setter',
        viewers: '850',
        promoText: 'ลดสูงสุด 70% ช้อปด่วน',
    },
    {
        id: '4',
        thumbnail: 'https://images.unsplash.com/photo-1492707892479-7bc2d5a4227c?w=400&q=80',
        shopName: 'Kitchen Pro',
        viewers: '2.1k',
        promoText: 'มีของแถมทุกกล่อง',
    },
    {
        id: '5',
        thumbnail: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&q=80',
        shopName: 'Gadget World',
        viewers: '3.4k',
        promoText: 'โค้ดส่วนลด 15% ทะลุไลฟ์',
    },
    {
        id: '6',
        thumbnail: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80',
        shopName: 'Sports Mania',
        viewers: '1.2k',
        promoText: 'ส่งฟรีไม่มีขั้นต่ำ',
    },
];

export default function SiamLiveScreen() {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme];
    const [activeTab, setActiveTab] = useState('ทั้งหมด');
    const [activeCategory, setActiveCategory] = useState('ทั้งหมด');

    const renderHeader = () => (
        <View style={[styles.header, { backgroundColor: '#FFFFFF' }]}>
            <View style={styles.headerTop}>
                <TouchableOpacity onPress={() => router.back()} style={styles.headerIconButton}>
                    <SymbolView name="chevron.left" tintColor="#333" size={24} />
                </TouchableOpacity>

                <View style={styles.tabContainer}>
                    <TouchableOpacity
                        onPress={() => setActiveTab('ทั้งหมด')}
                        style={[styles.tab, activeTab === 'ทั้งหมด' && { borderBottomColor: colors.accent }]}
                    >
                        <Text style={[styles.tabText, activeTab === 'ทั้งหมด' && { color: colors.accent, fontWeight: 'bold' }]}>ทั้งหมด</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setActiveTab('สำหรับคุณ')}
                        style={[styles.tab, activeTab === 'สำหรับคุณ' && { borderBottomColor: colors.accent }]}
                    >
                        <Text style={[styles.tabText, activeTab === 'สำหรับคุณ' && { color: colors.accent, fontWeight: 'bold' }]}>สำหรับคุณ</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.headerRight}>
                    <TouchableOpacity onPress={() => router.push('/all-products' as any)} style={styles.headerIconButton}>
                        <SymbolView name="magnifyingglass" tintColor="#333" size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerIconButton}>
                        <SymbolView name="video.badge.plus" tintColor="#333" size={24} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    const renderShopAvatars = () => (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.avatarScroll}
            contentContainerStyle={styles.avatarContainer}
        >
            {AVATARS.map((item) => (
                <TouchableOpacity key={item.id} style={styles.avatarItem}>
                    <View style={[styles.avatarBorder, { borderColor: colors.accent }]}>
                        <Image source={{ uri: item.image }} style={styles.avatarImage} />
                        <View style={styles.liveBadge}>
                            <Text style={styles.liveBadgeText}>LIVE</Text>
                        </View>
                    </View>
                    <Text style={styles.avatarName} numberOfLines={1}>{item.name}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );

    const renderBanners = () => (
        <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={styles.bannerScroll}
        >
            {BANNERS.map((item) => (
                <Image key={item.id} source={{ uri: item.image }} style={styles.bannerImage} />
            ))}
        </ScrollView>
    );

    const renderCategories = () => (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryScroll}
            contentContainerStyle={styles.categoryContainer}
        >
            {CATEGORIES.map((item) => (
                <TouchableOpacity
                    key={item}
                    onPress={() => setActiveCategory(item)}
                    style={[
                        styles.categoryItem,
                        activeCategory === item ? { backgroundColor: colors.accent } : { backgroundColor: '#F0F0F0' }
                    ]}
                >
                    <Text style={[
                        styles.categoryText,
                        activeCategory === item ? { color: '#FFFFFF', fontWeight: 'bold' } : { color: '#666' }
                    ]}>
                        {item}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );

    const renderLiveItem = ({ item }: { item: typeof LIVES[0] }) => (
        <TouchableOpacity style={styles.liveCard}>
            <View style={styles.thumbnailContainer}>
                <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
                <View style={styles.liveLabelContainer}>
                    <View style={styles.liveLabelBadge}>
                        <Text style={styles.liveLabelText}>LIVE</Text>
                    </View>
                    <View style={styles.viewerBadge}>
                        <SymbolView name="eye.fill" tintColor="#FFF" size={10} />
                        <Text style={styles.viewerText}>{item.viewers}</Text>
                    </View>
                </View>
                <View style={styles.promoOverlay}>
                    <Text style={styles.promoOverlayText} numberOfLines={1}>{item.promoText}</Text>
                </View>
            </View>
            <View style={styles.liveInfo}>
                <Text style={styles.shopName} numberOfLines={1}>{item.shopName}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            {renderHeader()}

            <FlatList
                data={LIVES}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={renderLiveItem}
                ListHeaderComponent={() => (
                    <View>
                        {renderShopAvatars()}
                        {renderBanners()}
                        {renderCategories()}
                    </View>
                )}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    header: {
        paddingTop: 50,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
    },
    headerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        height: 50,
    },
    headerIconButton: {
        padding: 5,
    },
    headerRight: {
        flexDirection: 'row',
        gap: 15,
    },
    tabContainer: {
        flexDirection: 'row',
        gap: 20,
        height: '100%',
        alignItems: 'center',
    },
    tab: {
        height: '100%',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
        paddingHorizontal: 5,
    },
    tabText: {
        fontSize: 16,
        color: '#666',
    },
    avatarScroll: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 15,
    },
    avatarContainer: {
        paddingHorizontal: 15,
        gap: 15,
    },
    avatarItem: {
        alignItems: 'center',
        width: 70,
    },
    avatarBorder: {
        width: 64,
        height: 64,
        borderRadius: 32,
        borderWidth: 2,
        padding: 2,
        position: 'relative',
        marginBottom: 5,
    },
    avatarImage: {
        width: '100%',
        height: '100%',
        borderRadius: 30,
    },
    liveBadge: {
        position: 'absolute',
        bottom: -5,
        alignSelf: 'center',
        backgroundColor: '#EE4D2D',
        paddingHorizontal: 6,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFFFFF',
    },
    liveBadgeText: {
        color: '#FFFFFF',
        fontSize: 8,
        fontWeight: 'bold',
    },
    avatarName: {
        fontSize: 10,
        color: '#333',
        textAlign: 'center',
    },
    bannerScroll: {
        marginTop: 10,
    },
    bannerImage: {
        width: width - 30,
        height: 120,
        marginHorizontal: 15,
        borderRadius: 12,
        backgroundColor: '#DDD',
    },
    categoryScroll: {
        paddingVertical: 15,
    },
    categoryContainer: {
        paddingHorizontal: 15,
        gap: 10,
    },
    categoryItem: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
    },
    categoryText: {
        fontSize: 13,
    },
    listContent: {
        paddingBottom: 20,
    },
    row: {
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    liveCard: {
        width: (width - 40) / 2,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        overflow: 'hidden',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    thumbnailContainer: {
        width: '100%',
        height: 200,
        position: 'relative',
    },
    thumbnail: {
        width: '100%',
        height: '100%',
    },
    liveLabelContainer: {
        position: 'absolute',
        top: 8,
        left: 8,
        flexDirection: 'row',
        gap: 4,
    },
    liveLabelBadge: {
        backgroundColor: '#EE4D2D',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    liveLabelText: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: 'bold',
    },
    viewerBadge: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
        gap: 3,
    },
    viewerText: {
        color: '#FFFFFF',
        fontSize: 10,
    },
    promoOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        padding: 8,
    },
    promoOverlayText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 'bold',
    },
    liveInfo: {
        padding: 10,
    },
    shopName: {
        fontSize: 13,
        fontWeight: '600',
        color: '#333',
    },
});
