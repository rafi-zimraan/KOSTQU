import React, {useState} from 'react';
import {
  Image,
  Linking,
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

export default function DataHome() {
  const [laoding, setLaoding] = useState(false);
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
    <SafeAreaView style={styles.Container}>
      {/* <Gap height={20} /> */}
      <View style={styles.ViewBannerPremium}>
        <Image
          source={images.Img_BannerIklanPremium}
          style={styles.BannerPremium}
        />
      </View>
      {/* Next Step Img */}
      <View style={styles.ContainerNextImage}>
        <TouchableNativeFeedback useForeground>
          <Image source={icons.IconLeft} style={styles.imgLeftBanner} />
        </TouchableNativeFeedback>
        <TouchableNativeFeedback useForeground>
          <Image source={icons.IconRight} style={styles.imgRightBanner} />
        </TouchableNativeFeedback>
      </View>
      <Gap height={22} />
      {/* Button Pencarian kos terdekat */}
      <ButtonAction
        title={laoding ? 'Loading..' : 'Kos Dekat Saya'}
        width={328}
        backgroundColor={colors.Gold}
        borderRadius={6}
        color={colors.white}
      />
      {/* Content pencarian area kosku */}
      <Gap height={30} />
      <View>
        <Text style={styles.TxtPencarianArea}>Cari Kos di Area</Text>
        <Gap height={8} />
        <ScrollView
          horizontal
          stickyHeaderHiddenOnScroll
          stickyHeaderIndices={0}>
          <TouchableNativeFeedback
            useForeground
            onPress={() =>
              Linking.openURL(
                'https://www.google.com/maps/place/Bundaran+HI/@-6.1949798,106.8204952,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f5561518a139:0x2911f3a14f98eea7!8m2!3d-6.1949851!4d106.8230701!16s%2Fg%2F11tnwffkgz?entry=ttu',
              )
            }>
            <Image
              source={images.Img_BannerAreaPencarian}
              style={styles.BannerAreaPencarian}
            />
          </TouchableNativeFeedback>
          <Gap width={8} />
          <TouchableNativeFeedback
            useForeground
            onPress={() =>
              Linking.openURL(
                'https://www.google.com/maps/place/Candi+Borobudur/@-7.6078738,110.1934516,15z/data=!4m10!1m2!2m1!1sborobudur!3m6!1s0x2e7a8cf009a7d697:0xdd34334744dc3cb!8m2!3d-7.6078738!4d110.2037513!15sCglib3JvYnVkdXJaCyIJYm9yb2J1ZHVykgEPYnVkZGhpc3RfdGVtcGxl4AEA!16zL20vMDFoemNq?entry=ttu',
              )
            }>
            <Image
              source={images.Img_BannerAreaPencarian2}
              style={styles.BannerAreaPencarian}
            />
          </TouchableNativeFeedback>
          <Gap width={8} />
          <TouchableNativeFeedback
            useForeground
            onPress={() =>
              Linking.openURL(
                'https://www.google.com/maps/place/Bundaran+HI/@-6.1949798,106.8204952,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f5561518a139:0x2911f3a14f98eea7!8m2!3d-6.1949851!4d106.8230701!16s%2Fg%2F11tnwffkgz?entry=ttu',
              )
            }>
            <Image
              source={images.Img_BannerAreaPencarian}
              style={styles.BannerAreaPencarian}
            />
          </TouchableNativeFeedback>
        </ScrollView>
      </View>
      <Gap height={24} />
      {/* Button Kost Lainya */}
      <ButtonAction
        title="Kos Area Lainya"
        backgroundColor={colors.white}
        borderRadius={6}
        borderColor={colors.Gold}
        width={328}
        borderWidth={1}
        color={colors.Gold}
      />
      <Gap height={40} />
      {/* Search Sekitar Kampus */}
      <Text style={styles.TextSearchKampus}>Cari Kos di Sekitar Kampus</Text>
      <Gap height={8} />
      <View style={styles.bodyViewKampus}>
        <View style={styles.imageContainer}>
          <TouchableNativeFeedback useForeground>
            <Image source={images.Img_Ui} style={styles.image} />
          </TouchableNativeFeedback>
          <Gap height={4} />
          <Text style={styles.ImgUI}>UI</Text>
        </View>
        <View style={styles.imageContainer}>
          <TouchableNativeFeedback useForeground>
            <Image source={images.Img_Itb} style={styles.image} />
          </TouchableNativeFeedback>
          <Gap height={4} />
          <Text style={styles.ImgUI}>ITB</Text>
        </View>
        <View style={styles.imageContainer}>
          <TouchableNativeFeedback useForeground>
            <Image source={images.Img_Ugm} style={styles.image} />
          </TouchableNativeFeedback>
          <Gap height={4} />
          <Text style={styles.ImgUI}>UGM</Text>
        </View>
        <View style={styles.imageContainer}>
          <TouchableNativeFeedback useForeground>
            <Image source={images.Img_Ipb} style={styles.image} />
          </TouchableNativeFeedback>
          <Gap height={4} />
          <Text style={styles.ImgUI}>IPB</Text>
        </View>
      </View>
      <Gap height={15} />
      <View style={styles.bodyViewKampus}>
        <View style={styles.imageContainer}>
          <TouchableNativeFeedback useForeground>
            <Image source={images.Img_Unair} style={styles.image} />
          </TouchableNativeFeedback>
          <Gap height={4} />
          <Text style={styles.ImgUI}>UNAIR</Text>
        </View>
        <View style={styles.imageContainer}>
          <TouchableNativeFeedback useForeground>
            <Image source={images.Img_Its} style={styles.image} />
          </TouchableNativeFeedback>
          <Gap height={4} />
          <Text style={styles.ImgUI}>ITS</Text>
        </View>
        <View style={styles.imageContainer}>
          <TouchableNativeFeedback useForeground>
            <Image source={images.Img_Undip} style={styles.image} />
          </TouchableNativeFeedback>
          <Gap height={4} />
          <Text style={styles.ImgUI}>UNDIP</Text>
        </View>
        <View style={styles.imageContainer}>
          <TouchableNativeFeedback useForeground>
            <Image source={images.Img_Unhas} style={styles.image} />
          </TouchableNativeFeedback>
          <Gap height={4} />
          <Text style={styles.ImgUI}>UNHAS</Text>
        </View>
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
              <TouchableNativeFeedback useForeground onPress={handlePrevSlide}>
                <Image source={icons.IconLeft} style={styles.imgLeftBanner} />
              </TouchableNativeFeedback>
              <TouchableNativeFeedback useForeground onPress={handleNextSlide}>
                <Image source={icons.IconRight} style={styles.imgRightBanner} />
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
              <TouchableNativeFeedback useForeground onPress={handlePrevSlide2}>
                <Image source={icons.IconLeft} style={styles.imgLeftBanner} />
              </TouchableNativeFeedback>
              <TouchableNativeFeedback useForeground onPress={handleNextSlide2}>
                <Image source={icons.IconRight} style={styles.imgRightBanner} />
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
  );
}

const styles = StyleSheet.create({
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
  Container: {
    flex: 1,
    padding: 16,
  },
  bodyViewKampus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    height: 48,
    width: 48,
  },
  ImgUI: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.black,
  },
  TextSearchKampus: {
    fontWeight: '800',
    fontSize: 16,
    color: colors.black,
  },
  BannerAreaPencarian: {
    width: 152,
    height: 80,
    borderRadius: 4,
  },
  TxtPencarianArea: {
    fontWeight: '800',
    color: colors.black,
    fontSize: 16,
  },
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
    paddingHorizontal: 42,
    bottom: 90,
  },
  ViewBannerPremium: {
    alignItems: 'center',
  },
  Container: {
    flex: 1,
    padding: 16,
  },
  BannerPremium: {
    width: 328,
    height: 156,
  },
});
