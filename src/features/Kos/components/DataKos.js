import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import {icons, images} from '../../../assets';
import {ButtonAction, Gap} from '../../../components';
import {colors} from '../../../utils';

export default function DataKos() {
  const [loading, setLoading] = useState(false);

  const [loadingKoupon, setLoadingKoupon] = useState(false);

  const [isLiked, setIsLiked] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);

  const toggleLiked = () => {
    setIsLiked(!isLiked);
  };

  const handlePrevSlide = () => {
    setActiveSlide(activeSlide === 0 ? 1 : activeSlide - 1);
  };

  const handleNextSlide = () => {
    setActiveSlide(activeSlide === 1 ? 0 : activeSlide + 1);
  };

  const handlePrevSlide2 = () => {
    setActiveSlide2(activeSlide2 === 0 ? 1 : activeSlide2 - 1);
  };
  const handleNextSlide2 = () => {
    setActiveSlide2(activeSlide2 === 1 ? 0 : activeSlide2 + 1);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <SafeAreaView stickyHeaderIndices={[0]} stickyHeaderHiddenOnScroll>
        <View style={styles.ContainerText}>
          <Text style={styles.TitleKos}>Kos Saya</Text>
          <Gap height={6} />
          <Text style={styles.TxtTitleSecondry}>Kamu belum menyewa kos</Text>
          <Gap height={20} />
          <Text style={styles.TxtDescription}>
            Yuk, sewa di Kampuskos atau masukkan kode dari{'\n'}
            pemilik kos untuk aktifkan halaman ini! Coba cara{'\n'}
            ngekos modern dengan manfaat berikut ini.
          </Text>
        </View>

        <View style={styles.IconContainer}>
          {/* Banner Data Tagihan & Kontrak */}
          <View style={styles.ViewBannerTagihan}>
            <Image
              source={images.Img_Tagihan}
              style={{height: 48, width: 48}}
            />
            <Gap width={12} />
            <Text style={styles.TextTagihan}>
              Tagihan dan kontrak sewa tercatat rapi
            </Text>
          </View>
          <Gap height={32} />
          {/* Banner Keamanan Data*/}
          <View style={styles.BannerKeamananData}>
            <Image
              source={images.Img_Verified}
              style={{height: 48, width: 48}}
            />
            <Gap width={12} />
            <Text style={styles.TextKeamananData}>
              Kampuskos menjaga keamanan transaksi
            </Text>
          </View>
          <Gap height={32} />
          {/* Banner Metode Pembayaran*/}
          <View style={styles.BannerMetodePembayaran}>
            <Image
              source={images.Img_Payment}
              style={{height: 48, width: 48}}
            />
            <Gap width={12} />
            <Text style={styles.TextPayment}>
              Cashless, dengan beragam metode pembayaran
            </Text>
          </View>
          <Gap height={34} />
          <ButtonAction
            title={loading ? 'Loading..' : 'Mulai cari dan sewa kos'}
            borderRadius={12}
            backgroundColor={colors.Gold}
            width={328}
          />
          <Gap height={18} />
          <ButtonAction
            title={loadingKoupon ? 'Loading.. ' : 'Masukkan kode dari pemilik'}
            borderRadius={12}
            backgroundColor={colors.white}
            width={328}
            borderColor={colors.Gold}
            color={colors.Gold}
            borderWidth={1}
          />
        </View>

        <Gap height={40} />
        {/* // ! RECOMENDASI KE PENYEWA */}
        <ScrollView
          horizontal
          stickyHeaderHiddenOnScroll
          stickyHeaderIndices={[0]}
          style={{flexDirection: 'row'}}>
          <View style={styles.textTitleContent}>
            <Text style={styles.TxtContentFavorite}>
              Mungkin cocok dengan kamu
            </Text>
            <Gap height={8} />
            <View style={styles.ViewBodyKost}>
              {/* Img pembukaan */}
              <Image
                source={images[`Img_kost${activeSlide + 1}`]}
                style={styles.ImgKost}
              />
              <View style={styles.pagination}>
                {[0, 1].map(index => (
                  <TouchableNativeFeedback
                    key={index}
                    onPress={() => setActiveSlide(index)}>
                    <View
                      style={[
                        styles.paginationDot,
                        activeSlide === index && styles.activeDot,
                      ]}
                    />
                  </TouchableNativeFeedback>
                ))}
              </View>
              {/* Next Step Img */}
              <View style={styles.ContainerNextImage}>
                <TouchableNativeFeedback
                  useForeground
                  onPress={handlePrevSlide}>
                  <Image source={icons.IconLeft} style={styles.imgLeftBanner} />
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                  useForeground
                  onPress={handleNextSlide}>
                  <Image
                    source={icons.IconRight}
                    style={styles.imgRightBanner}
                  />
                </TouchableNativeFeedback>
              </View>

              <View style={styles.ViewComponenIconHeart}>
                {/* Title Kost */}
                <Text style={styles.TxtJenisKost}>Kos Muslimah</Text>
                {/* Icon Heart */}
                <TouchableOpacity onPress={toggleLiked}>
                  <Image
                    source={isLiked ? icons.IconHeart : icons.IconHeartOutline}
                    style={styles.IconHeart}
                  />
                </TouchableOpacity>
              </View>
              {/* Value/Kategori Kost */}
              <View style={styles.KategoriContainer}>
                <View style={styles.KategoriKost}>
                  <Text style={styles.TextKategori}>Kos Andalan</Text>
                </View>
                <View style={styles.KategoriKostSecondary}>
                  <Text style={styles.TextKategori}>Pasutri</Text>
                </View>
              </View>
              <Gap height={10} />
              {/* Map Location */}
              <View style={styles.MapContainer}>
                <Image source={icons.IconMap} style={styles.IconMap} />
                <Gap width={4} />
                <Text style={styles.TextDetailmap}>
                  Lorem ipsum dolor sit amet{'\n'}consectetur. Eget ultrices
                  molestie.
                </Text>
              </View>
              <Gap height={16} />
              {/* Price */}
              <View style={styles.PriceController}>
                <Text style={styles.TextTitlePrice}>Mulai</Text>
                <Gap height={4} />
                <Text style={styles.TextPriceKos}>Rp 900.000/bulan</Text>
              </View>
            </View>
          </View>

          {/* Banner Secondry */}
          <View style={styles.textTitleContent}>
            <Gap height={31} />
            <View style={styles.ViewBodyKost}>
              {/* Img pembukaan */}
              <Image
                source={images[`Img_kost${activeSlide2 + 1}`]}
                style={styles.ImgKost}
              />
              <View style={styles.pagination}>
                {[0, 1].map(index => (
                  <TouchableNativeFeedback
                    key={index}
                    onPress={() => setActiveSlide2(index)}>
                    <View
                      style={[
                        styles.paginationDot,
                        activeSlide2 === index && styles.activeDot,
                      ]}
                    />
                  </TouchableNativeFeedback>
                ))}
              </View>
              {/* Next Step Img */}
              <View style={styles.ContainerNextImage}>
                <TouchableNativeFeedback
                  useForeground
                  onPress={handlePrevSlide2}>
                  <Image source={icons.IconLeft} style={styles.imgLeftBanner} />
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                  useForeground
                  onPress={handleNextSlide2}>
                  <Image
                    source={icons.IconRight}
                    style={styles.imgRightBanner}
                  />
                </TouchableNativeFeedback>
              </View>

              <View style={styles.ViewComponenIconHeart}>
                {/* Title Kost */}
                <Text style={styles.TxtJenisKost}>Kos Muslimah</Text>
                {/* Icon Heart */}
                <TouchableOpacity onPress={toggleLiked}>
                  <Image
                    source={isLiked ? icons.IconHeart : icons.IconHeartOutline}
                    style={styles.IconHeart}
                  />
                </TouchableOpacity>
              </View>
              {/* Value/Kategori Kost */}
              <View style={styles.KategoriContainer}>
                <View style={styles.KategoriKost}>
                  <Text style={styles.TextKategori}>Kos Andalan</Text>
                </View>
                <View style={styles.KategoriKostSecondary}>
                  <Text style={styles.TextKategori}>Pasutri</Text>
                </View>
              </View>
              <Gap height={10} />
              {/* Map Location */}
              <View style={styles.MapContainer}>
                <Image source={icons.IconMap} style={styles.IconMap} />
                <Gap width={4} />
                <Text style={styles.TextDetailmap}>
                  Lorem ipsum dolor sit amet{'\n'}consectetur. Eget ultrices
                  molestie.
                </Text>
              </View>
              <Gap height={16} />
              {/* Price */}
              <View style={styles.PriceController}>
                <Text style={styles.TextTitlePrice}>Mulai</Text>
                <Gap height={4} />
                <Text style={styles.TextPriceKos}>Rp 900.000/bulan</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imgRightBanner: {
    width: 20,
    height: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  imgLeftBanner: {
    width: 20,
    height: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  ContainerNextImage: {
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    bottom: 80,
  },
  TextPriceKos: {
    fontWeight: '700',
    fontSize: 14,
    color: colors.red,
  },
  TextTitlePrice: {
    fontWeight: '800',
    color: colors.DarkGray,
  },
  PriceController: {
    marginLeft: 16,
    bottom: 25,
  },
  TextDetailmap: {
    fontWeight: '400',
    fontSize: 12,
    color: colors.black,
  },
  IconMap: {
    height: 24,
    width: 24,
  },
  MapContainer: {
    flexDirection: 'row',
    marginLeft: 16,
    bottom: 22,
  },
  KategoriKostSecondary: {
    borderWidth: 1,
    borderColor: colors.DarkGray,
    width: 60,
    height: 25,
    borderRadius: 7,
    marginLeft: 16,
  },
  KategoriContainer: {
    flexDirection: 'row',
    bottom: 22,
  },
  TextKategori: {
    fontWeight: '400',
    fontSize: 12,
    color: colors.gray,
    textAlign: 'center',
  },
  KategoriKost: {
    borderWidth: 1,
    borderColor: colors.gray,
    width: 90,
    height: 25,
    borderRadius: 7,
    marginLeft: 16,
  },
  ViewComponenIconHeart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 25,
  },
  IconHeart: {
    width: 24,
    height: 24,
    right: 8,
    padding: 5.04,
    paddingHorizontal: 3.56,
    paddingVertical: 4,
    top: 6,
  },
  TxtJenisKost: {
    fontWeight: '800',
    fontSize: 14,
    color: colors.black,
    marginLeft: 16,
  },
  ImgKost: {
    width: 256,
    height: 144,
  },
  ViewBodyKost: {
    width: 256,
    height: 310,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 6,
  },
  TxtContentFavorite: {
    color: colors.black,
    fontWeight: '700',
    fontSize: 18,
  },
  textTitleContent: {
    padding: 10,
  },
  TextTitle: {
    fontSize: 18,
    color: colors.black,
    fontWeight: '600',
    bottom: 25,
  },
  bodyImg: {
    alignItems: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    bottom: 20,
  },
  activeDot: {
    backgroundColor: colors.blue,
  },
  TextPayment: {
    fontWeight: '700',
    fontSize: 15,
    color: colors.black,
    maxWidth: 320,
  },
  BannerMetodePembayaran: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextKeamananData: {
    fontWeight: '700',
    fontSize: 15,
    color: colors.black,
    maxWidth: 320,
  },
  BannerKeamananData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextTagihan: {
    fontWeight: '700',
    fontSize: 15,
    color: colors.black,
    maxWidth: 320,
  },
  ViewBannerTagihan: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconContainer: {
    padding: 24,
  },
  TxtDescription: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.black,
  },
  TxtTitleSecondry: {
    fontWeight: '600',
    fontSize: 18,
    color: colors.black,
  },
  ContainerText: {
    padding: 16,
  },
  TitleKos: {
    fontWeight: '600',
    fontSize: 24,
    color: colors.black,
  },
});
