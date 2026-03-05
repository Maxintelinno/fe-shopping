import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import React from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '@/components/Themed';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

const { width } = Dimensions.get('window');

export default function ProductDetailScreen() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme];

    // Expanded Product Data
    const product = {
        id: id,
        title: '[Epson L3210] Printer all-in-one ใช้กับหมึกรุ่น Epson 003 รับประกัน 2 ปี',
        price: '3,173',
        originalPrice: '4,500',
        installments: '฿674.80 x 5 เดือนกับ SPayLater',
        rating: 4.9,
        reviewCount: '3.2k',
        sold: '8.5k',
        images: ['https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&auto=format&fit=crop&q=60'],
        coupons: ['ส่วนลด 10%', 'ขั้นต่ำ ฿200 ลดสูงสุด ฿2,000'],
        specifications: [
            { label: 'ยี่ห้อ', value: 'Epson' },
            { label: 'ระยะเวลาการรับประกัน', value: '2 ปี' },
            { label: 'ประเภทเครื่องพิมพ์', value: 'Inkjet' },
            { label: 'การเชื่อมต่อ', value: 'USB 2.0' },
        ],
        store: {
            name: 'FAST GROUP OFFICIAL',
            avatar: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&auto=format&fit=crop&q=60',
            rating: 4.8,
            products: 154,
            responseRate: '98%',
            isMall: true,
        },
        reviews: [
            { id: '1', user: 'u***1', score: 5, efficiency: 5, usage: 5, comment: 'ใช้งานดีมากค่ะ ปริ้นท์ชัด สีสวย คุ้มค่ามาก', date: '2024-03-01' },
            { id: '2', user: 'j***a', score: 5, efficiency: 4, usage: 5, comment: 'ของแท้แน่นอน แพ็คมาดีมาก การจัดส่งรวดเร็ว', date: '2024-02-28' },
        ],
        bestSellers: [
            { id: 'bs1', title: 'หมึก Epson 003 Black', price: '250', rating: 5.0, sold: '10k+', image: 'https://images.unsplash.com/photo-1582213764547-49520166649f?w=300&auto=format&fit=crop&q=60' },
            { id: 'bs2', title: 'หมึก Epson 003 CMY Set', price: '720', rating: 4.9, sold: '5k+', image: 'https://images.unsplash.com/photo-1544265851-585378239854?w=300&auto=format&fit=crop&q=60' },
        ],
        similar: [
            { id: 's1', title: 'Canon G3010 Printer', price: '3,590', image: 'https://images.unsplash.com/photo-1612815152542-1e9bf2ce646f?w=400&auto=format&fit=crop&q=60', sold: '1.2k', rating: 4.8 },
            { id: 's2', title: 'HP Smart Tank 515', price: '4,190', image: 'https://images.unsplash.com/photo-1612815151241-1e9bf2ce646f?w=400&auto=format&fit=crop&q=60', sold: '800', rating: 4.7 },
        ]
    };

    const renderStarRating = (score: number) => (
        <View style={styles.starRow}>
            {[1, 2, 3, 4, 5].map((s) => (
                <SymbolView
                    key={s}
                    name={s <= score ? "star.fill" : "star"}
                    tintColor={s <= score ? colors.accent : "#8E8E93"}
                    size={12}
                />
            ))}
        </View>
    );

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerBtn} onPress={() => router.back()}>
                    <SymbolView name="chevron.left" tintColor={colors.text} size={24} />
                </TouchableOpacity>
                <View style={styles.headerRight}>
                    <TouchableOpacity style={styles.headerBtn}><SymbolView name="square.and.arrow.up" tintColor={colors.text} size={22} /></TouchableOpacity>
                    <TouchableOpacity style={styles.headerBtn}>
                        <SymbolView name="cart" tintColor={colors.text} size={22} />
                        <View style={[styles.cartBadge, { backgroundColor: colors.tint }]}><Text style={styles.cartBadgeText}>99+</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerBtn}><SymbolView name="ellipsis" tintColor={colors.text} size={22} /></TouchableOpacity>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Images & Promo */}
                <View style={styles.imageContainer}>
                    <Image source={{ uri: product.images[0] }} style={styles.productImage} />
                    <View style={styles.imageCounter}><Text style={styles.counterText}>1/4</Text></View>
                </View>
                <View style={styles.promoBanner}>
                    <View style={styles.promoLeft}><SymbolView name="shippingbox" tintColor="#FFFFFF" size={16} /><Text style={styles.promoText}>ส่งฟรี ร้านโค้ดคุ้ม</Text></View>
                    <View style={styles.promoRight}><SymbolView name="tag.fill" tintColor="#FFFFFF" size={16} /><Text style={styles.promoText}>ส่วนลด ร้านโค้ดคุ้ม</Text></View>
                </View>

                {/* Pricing & Rating */}
                <View style={[styles.section, { backgroundColor: colors.surface }]}>
                    <View style={styles.priceRow}>
                        <Text style={[styles.currency, { color: colors.tint }]}>฿</Text>
                        <Text style={[styles.priceValue, { color: colors.tint }]}>{product.price}</Text>
                        <Text style={styles.priceSubText}> ราคาหลังโค้ดส่วนลด</Text>
                    </View>
                    <Text style={styles.installmentText}>{product.installments}</Text>
                    <View style={styles.ratingTitleRow}>
                        <View style={styles.ratingInfo}>
                            <Text style={styles.ratingScore}>{product.rating}</Text>
                            {renderStarRating(Math.floor(product.rating))}
                            <View style={styles.vertDivider} />
                            <Text style={styles.soldInfo}>ขายแล้ว {product.sold} ชิ้น</Text>
                        </View>
                        <SymbolView name="heart" tintColor="#8E8E93" size={20} />
                    </View>
                </View>

                {/* Coupons */}
                <TouchableOpacity style={[styles.section, styles.cardSection, { backgroundColor: colors.surface }]}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardLabel}>ส่วนลด</Text>
                        <Text style={[styles.cardAction, { color: colors.tint }]}>ดูทั้งหมด {'>'}</Text>
                    </View>
                    <View style={styles.couponItem}>
                        <View style={[styles.couponBadge, { backgroundColor: colors.tint }]}><Text style={styles.couponBadgeText}>Mall</Text></View>
                        <Text style={styles.couponText}>ส่วนลด 10% ขั้นต่ำ ฿250 ลดสูงสุด ฿2,000</Text>
                    </View>
                </TouchableOpacity>

                {/* Store Info */}
                <View style={[styles.section, { backgroundColor: colors.surface }]}>
                    <View style={styles.storeHeader}>
                        <Image source={{ uri: product.store.avatar }} style={styles.storeAvatar} />
                        <View style={styles.storeNameContainer}>
                            <Text style={styles.storeName}>{product.store.name}</Text>
                            <View style={styles.storeTags}>
                                <View style={styles.mallBadge}><Text style={styles.mallText}>MALL</Text></View>
                                <Text style={styles.onlineStatus}>Online 9 นาทีที่ผ่านมา</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={[styles.visitBtn, { borderColor: colors.tint }]}><Text style={{ color: colors.tint }}>ไปที่ร้านค้า</Text></TouchableOpacity>
                    </View>
                    <View style={styles.storeStats}>
                        <View style={styles.statItem}><Text style={[styles.statValue, { color: colors.tint }]}>{product.store.products}</Text><Text style={styles.statLabel}>รายการสินค้า</Text></View>
                        <View style={styles.vertDividerStat} />
                        <View style={styles.statItem}><Text style={[styles.statValue, { color: colors.tint }]}>{product.store.rating}</Text><Text style={styles.statLabel}>คะแนนร้านค้า</Text></View>
                        <View style={styles.vertDividerStat} />
                        <View style={styles.statItem}><Text style={[styles.statValue, { color: colors.tint }]}>{product.store.responseRate}</Text><Text style={styles.statLabel}>การตอบกลับแชท</Text></View>
                    </View>
                </View>

                {/* Best Sellers */}
                <View style={[styles.section, { backgroundColor: colors.surface }]}>
                    <Text style={styles.cardLabel}>สินค้าขายดีประจำร้าน</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
                        {product.bestSellers.map((item) => (
                            <View key={item.id} style={styles.bestSellerItem}>
                                <Image source={{ uri: item.image }} style={styles.bestSellerImage} />
                                <Text numberOfLines={1} style={styles.bestSellerTitle}>{item.title}</Text>
                                <Text style={[styles.bestSellerPrice, { color: colors.tint }]}>฿{item.price}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                {/* Reviews */}
                <View style={[styles.section, { backgroundColor: colors.surface }]}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardLabel}>คะแนนของสินค้า</Text>
                        <Text style={[styles.cardAction, { color: colors.tint }]}>ดูทั้งหมด ({product.reviewCount}) {'>'}</Text>
                    </View>
                    {product.reviews.map((rev) => (
                        <View key={rev.id} style={styles.reviewItem}>
                            <View style={styles.reviewUserRow}>
                                <View style={styles.userAvatarSmall} />
                                <Text style={styles.userName}>{rev.user}</Text>
                                {renderStarRating(rev.score)}
                            </View>
                            <Text style={styles.reviewMeta}>ประสิทธิภาพ: ดีมาก | การใช้งาน: เยี่ยม</Text>
                            <Text style={styles.reviewComment}>{rev.comment}</Text>
                            <Text style={styles.reviewDate}>{rev.date}</Text>
                        </View>
                    ))}
                </View>

                {/* Specs */}
                <View style={[styles.section, { backgroundColor: colors.surface }]}>
                    <Text style={styles.cardLabel}>ข้อมูลจำเพาะของสินค้า</Text>
                    {product.specifications.map((spec, idx) => (
                        <View key={idx} style={styles.specRow}>
                            <Text style={styles.specLabel}>{spec.label}</Text>
                            <Text style={styles.specValue}>{spec.value}</Text>
                        </View>
                    ))}
                </View>

                {/* Similar Products */}
                <View style={styles.section}>
                    <Text style={styles.gridSectionTitle}>คุณอาจจะชอบสิ่งนี้</Text>
                    <View style={styles.similarGrid}>
                        {product.similar.map((item) => (
                            <View key={item.id} style={[styles.similarCard, { backgroundColor: colors.surface }]}>
                                <Image source={{ uri: item.image }} style={styles.similarImage} />
                                <View style={styles.similarInfo}>
                                    <Text numberOfLines={2} style={styles.similarTitle}>{item.title}</Text>
                                    <Text style={[styles.similarPrice, { color: colors.tint }]}>฿{item.price}</Text>
                                    <View style={styles.similarStats}>
                                        {renderStarRating(4)}
                                        <Text style={styles.similarSold}>ขายแล้ว {item.sold}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>

                <View style={{ height: 100 }} />
            </ScrollView>

            {/* Fixed Bottom Bar */}
            <View style={[styles.bottomBar, { backgroundColor: colors.surface, borderTopColor: colors.border }]}>
                <View style={styles.bottomLeft}>
                    <TouchableOpacity style={styles.iconAction}><SymbolView name="bubble.left" tintColor={colors.tint} size={20} /><Text style={[styles.iconText, { color: colors.tint }]}>แชทเลย</Text></TouchableOpacity>
                    <View style={styles.divider} />
                    <TouchableOpacity style={styles.iconAction}><SymbolView name="cart.badge.plus" tintColor={colors.tint} size={20} /><Text style={[styles.iconText, { color: colors.tint }]}>เพิ่มไปยังรถเข็น</Text></TouchableOpacity>
                </View>
                <TouchableOpacity style={[styles.buyButton, { backgroundColor: colors.tint }]}><Text style={styles.buyButtonTitle}>ซื้อโดยใช้โค้ด</Text><Text style={styles.buyButtonPrice}>฿{product.price}</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    header: {
        position: 'absolute',
        top: 10, // Adjusted for SafeAreaView
        left: 0,
        right: 0,
        zIndex: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        backgroundColor: 'transparent'
    },
    headerRight: { flexDirection: 'row', gap: 12 },
    headerBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.9)',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3
    },
    cartBadge: { position: 'absolute', top: -5, right: -5, paddingHorizontal: 4, borderRadius: 8, minWidth: 16, alignItems: 'center' },
    cartBadgeText: { color: '#FFFFFF', fontSize: 9, fontWeight: 'bold' },
    scrollContent: { flexGrow: 1 },
    imageContainer: { width: width, height: width, backgroundColor: '#F8F8F8' },
    productImage: { width: '100%', height: '100%', resizeMode: 'contain' },
    imageCounter: { position: 'absolute', bottom: 15, right: 15, backgroundColor: 'rgba(0,0,0,0.4)', paddingHorizontal: 10, paddingVertical: 2, borderRadius: 12 },
    counterText: { color: '#FFFFFF', fontSize: 12 },
    promoBanner: { flexDirection: 'row', height: 40 },
    promoLeft: { flex: 1, backgroundColor: '#A4C639', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5 },
    promoRight: { flex: 1, backgroundColor: '#D35400', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5 },
    promoText: { color: '#FFFFFF', fontSize: 11, fontWeight: 'bold' },
    section: { padding: 15, marginBottom: 8 },
    priceRow: { flexDirection: 'row', alignItems: 'baseline' },
    currency: { fontSize: 18, fontWeight: 'bold' },
    priceValue: { fontSize: 26, fontWeight: 'bold', marginLeft: 2 },
    priceSubText: { fontSize: 12, color: '#D35400', fontWeight: 'bold' },
    installmentText: { fontSize: 12, color: '#666', marginTop: 4 },
    ratingTitleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 },
    ratingInfo: { flexDirection: 'row', alignItems: 'center' },
    starRow: { flexDirection: 'row', gap: 2 },
    ratingScore: { fontSize: 14, fontWeight: 'bold', marginRight: 5 },
    vertDivider: { width: 1, height: 12, backgroundColor: '#DDD', marginHorizontal: 10 },
    soldInfo: { fontSize: 13, color: '#333' },
    cardSection: { paddingVertical: 12 },
    cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
    cardLabel: { fontSize: 15, fontWeight: 'bold' },
    cardAction: { fontSize: 13 },
    couponItem: { flexDirection: 'row', alignItems: 'center', gap: 8 },
    couponBadge: { paddingHorizontal: 4, borderRadius: 2 },
    couponBadgeText: { color: '#FFF', fontSize: 10, fontWeight: 'bold' },
    couponText: { fontSize: 13, color: '#444' },
    storeHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
    storeAvatar: { width: 50, height: 50, borderRadius: 25 },
    storeNameContainer: { flex: 1, marginLeft: 12 },
    storeName: { fontSize: 15, fontWeight: 'bold' },
    storeTags: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 4 },
    mallBadge: { backgroundColor: '#D35400', paddingHorizontal: 4, borderRadius: 2 },
    mallText: { color: '#FFF', fontSize: 10, fontWeight: 'bold' },
    onlineStatus: { fontSize: 11, color: '#8E8E93' },
    visitBtn: { borderWidth: 1, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 4 },
    storeStats: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingVertical: 10 },
    statItem: { alignItems: 'center' },
    statValue: { fontSize: 14, fontWeight: 'bold' },
    statLabel: { fontSize: 11, color: '#8E8E93', marginTop: 4 },
    vertDividerStat: { width: 0.5, height: 20, backgroundColor: '#EEE' },
    horizontalScroll: { paddingVertical: 10 },
    bestSellerItem: { width: 100, marginRight: 15 },
    bestSellerImage: { width: 100, height: 100, borderRadius: 8 },
    bestSellerTitle: { fontSize: 11, marginTop: 6 },
    bestSellerPrice: { fontSize: 12, fontWeight: 'bold', marginTop: 2 },
    reviewItem: { borderTopWidth: 0.5, borderTopColor: '#F0F0F0', paddingVertical: 15 },
    reviewUserRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
    userAvatarSmall: { width: 24, height: 24, borderRadius: 12, backgroundColor: '#EEE' },
    userName: { fontSize: 12, color: '#333' },
    reviewMeta: { fontSize: 11, color: '#8E8E93', marginBottom: 4 },
    reviewComment: { fontSize: 13, color: '#333', lineHeight: 18 },
    reviewDate: { fontSize: 11, color: '#AAA', marginTop: 6 },
    specRow: { flexDirection: 'row', paddingVertical: 12, borderBottomWidth: 0.5, borderBottomColor: '#F0F0F0' },
    specLabel: { width: 140, fontSize: 13, color: '#8E8E93' },
    specValue: { flex: 1, fontSize: 13, color: '#333' },
    gridSectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' },
    similarGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
    similarCard: { width: '48.5%', borderRadius: 8, marginBottom: 12, overflow: 'hidden' },
    similarImage: { width: '100%', height: 150, resizeMode: 'cover' },
    similarInfo: { padding: 8 },
    similarTitle: { fontSize: 12, height: 34, overflow: 'hidden' },
    similarPrice: { fontSize: 14, fontWeight: 'bold', marginTop: 4 },
    similarStats: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 },
    similarSold: { fontSize: 10, color: '#8E8E93' },
    productTitle: { fontSize: 16, fontWeight: '600', lineHeight: 22 },
    bottomBar: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 75, flexDirection: 'row', borderTopWidth: 0.5 },
    bottomLeft: { flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8FFF8' },
    iconAction: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    iconText: { fontSize: 9, marginTop: 4 },
    divider: { width: 1, height: '40%', backgroundColor: '#EEE' },
    buyButton: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    buyButtonTitle: { color: '#FFFFFF', fontSize: 13, fontWeight: 'bold' },
    buyButtonPrice: { color: '#FFFFFF', fontSize: 15, fontWeight: 'bold' },
});
