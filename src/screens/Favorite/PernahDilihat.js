import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import {icons, images} from '../../assets';
import {Gap} from '../../components';
import {colors} from '../../utils';

export default function PernahDilihat() {
  const [isLiked, setIsLiked] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const toggleLiked = () => {
    setIsLiked(!isLiked);
  };

  const handlePrevSlide = () => {
    setActiveSlide(activeSlide === 0 ? 1 : activeSlide - 1);
  };

  const handleNextSlide = () => {
    setActiveSlide(activeSlide === 1 ? 0 : activeSlide + 1);
  };

  return (
    <ScrollView style={{flex: 1}}>
      <Gap height={13} />
      {/* // ! RECOMENDASI KE PENYEWA */}
      <ScrollView
        stickyHeaderHiddenOnScroll
        stickyHeaderIndices={[0]}
        style={{flexDirection: 'row'}}>
        <View style={styles.textTitleContent}>
          <Text style={styles.TxtContentFavorite}>Pernah Dilihat</Text>
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
      </ScrollView>
    </ScrollView>
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
    width: 360,
    height: 144,
  },
  ViewBodyKost: {
    width: 360,
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
});
