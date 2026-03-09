import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SymbolView } from 'expo-symbols';
import React from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import { Text } from '@/components/Themed';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

const { width } = Dimensions.get('window');

// Mock Product Data
const PRODUCTS = [
    {
        id: '1',
        title: 'ลิ้นชักเก็บเงิน ลิ้นชักใส่เงิน รองรับการเชื่อมต่อ POS ทุกระบบ',
        price: '464',
        originalPrice: '1,718',
        discount: '-73%',
        image: 'https://images.unsplash.com/photo-1556742049-02e53f17b99d?w=500&q=80',
        sold: '20พัน+',
        location: 'จังหวัดสมุทรปราการ',
        badges: ['Mall'],
    },
    {
        id: '2',
        title: 'ถังน้ำแข็ง ถังพักชา ถังสแตนเลส ถังเก็บความร้อน/เย็น 6L-12L',
        price: '114',
        image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=500&q=80',
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
        image: 'https://images.unsplash.com/photo-1524143878510-e3b8d6312402?w=500&q=80',
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
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80',
        sold: '5พัน+',
        location: 'ต่างประเทศ',
        badges: ['Preferred+'],
    },
    {
        id: '5',
        title: 'รองเท้าผ้าใบแฟชั่นสไตล์เกาหลี สำหรับผู้หญิง ระบายอากาศได้ดี',
        price: '159',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',
        sold: '8พัน+',
        location: 'จังหวัดกรุงเทพ',
        badges: ['Mall'],
    },
    {
        id: '6',
        title: 'หูฟังไร้สาย Bluetooth 5.0 คุณภาพเสียงระดับ Hi-Fi เบสหนัก',
        price: '289',
        originalPrice: '890',
        discount: '-68%',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
        sold: '15พัน+',
        location: 'ต่างประเทศ',
        badges: ['Choice'],
    },
];

export default function AllProductsScreen() {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme];

    const renderHeader = () => (
        <View style={[styles.header, { backgroundColor: colors.accent }]}>
            <View style={styles.headerTopRow}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <SymbolView name="chevron.left" tintColor="#FFFFFF" size={28} />
                </TouchableOpacity>

                <View style={styles.searchBarContainer}>
                    <SymbolView name="magnifyingglass" tintColor="#8E8E93" size={20} />
                    <TextInput
                        placeholder="ค้นหาสินค้า..."
                        placeholderTextColor="#999"
                        style={styles.searchInput}
                        autoFocus={false}
                    />
                </View>

                <TouchableOpacity style={styles.cartButton}>
                    <SymbolView name="cart" tintColor="#FFFFFF" size={28} />
                </TouchableOpacity>
            </View>
        </View>
    );

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
            </View>
            <View style={styles.productInfo}>
                <Text numberOfLines={2} style={styles.productTitle}>
                    {item.badges?.includes('Mall') && (
                        <View style={styles.mallBadge}>
                            <Text style={styles.mallBadgeText}>Mall</Text>
                        </View>
                    )}
                    {item.title}
                </Text>

                <View style={styles.priceRow}>
                    <Text style={[styles.currency, { color: colors.accent }]}>฿</Text>
                    <Text style={[styles.currentPrice, { color: colors.accent }]}>{item.price}</Text>
                </View>

                <View style={styles.statsRow}>
                    <Text style={styles.soldText}>ขายแล้ว {item.sold}</Text>
                </View>

                <Text style={styles.locationText}>{item.location}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            {renderHeader()}

            <FlatList
                data={PRODUCTS}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={({ item }) => <ProductCard item={item} />}
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
        backgroundColor: '#F5F5F5',
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
    backButton: {
        padding: 5,
    },
    searchBarContainer: {
        flex: 1,
        height: 40,
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    searchInput: {
        flex: 1,
        marginLeft: 8,
        fontSize: 14,
        color: '#333333',
    },
    cartButton: {
        padding: 5,
    },
    listContent: {
        paddingTop: 10,
        paddingBottom: 20,
    },
    row: {
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        marginBottom: 8,
    },
    productCard: {
        width: (width - 24) / 2,
        backgroundColor: '#FFFFFF',
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
        gap: 2,
    },
    currency: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    currentPrice: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    statsRow: {
        marginBottom: 4,
    },
    soldText: {
        fontSize: 11,
        color: '#8E8E93',
    },
    locationText: {
        fontSize: 10,
        color: '#8E8E93',
    },
});
