import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {fonts, images} from '../../assets';
import {ButtonAction, Gap} from '../../components';
import {colors} from '../../utils';

export default function OnBoarding({navigation, route}) {
  const [step, setStep] = useState(1);

  const handelSkip = async () => {
    try {
      await AsyncStorage.setItem('is_boarding', 'true');
      navigation.replace('SignIn');
    } catch (error) {
      console.log('error saving onboarding status', error);
    }
  };

  const handleNext = async () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      try {
        await AsyncStorage.setItem('is_boarding', 'true');
        navigation.replace('SignIn');
      } catch (error) {
        console.log('error  saving onboarding status', error);
      }
    }
  };

  // useEffect(() => {
  //   async function handleOnBoarding() {
  //     try {
  //       await AsyncStorage.setItem('is_boarding', 'boarding');
  //       navigation.replace('SignIn');
  //     } catch (error) {
  //       console.log('error', error);
  //     }
  //   }
  //   handleOnBoarding();
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.header} onPress={handelSkip}>
            <Text style={styles.textSkip}>Skip</Text>
          </TouchableOpacity>
          {/* Banner1 */}
          {step == 1 && (
            <View style={styles.bannerWrapper}>
              <Image source={images.banner_onboarding1} style={styles.banner} />
              {/* <Gap height={30} /> */}
              <View style={styles.contentViewText}>
                <Gap height={15} />
                <View style={{alignSelf: 'center'}}>
                  <Text style={styles.textTitle}>
                    Boking Kost Idaman {'\n'}Kamu Sekarang
                  </Text>
                  <Gap height={5} />
                  <Text style={styles.textDesc}>
                    Kamu bisa boking kost idamanmu{'\n'}
                    kapanpun dan dimanapun yang{'\n'}
                    kamu inginkan
                  </Text>
                </View>
              </View>
            </View>
          )}
          {/* Banner2 */}
          {step == 2 && (
            <View style={styles.bannerWrapper}>
              <Image source={images.banner_onboarding2} style={styles.banner} />
              <View style={styles.contentViewText}>
                {/* <Gap height={50} /> */}
                <View style={{alignSelf: 'center'}}>
                  <Gap height={15} />
                  <Text style={styles.textTitle}>
                    Temukan Kost {'\n'}Impian Anda !
                  </Text>
                  <Gap height={5} />
                  <Text style={styles.textDesc}>
                    Jelajahi berbagai pilihan Kost{'\n'}
                    berbagai lokasi, dari pusat kota{'\n'}
                    hingga sekitar kampus.
                  </Text>
                </View>
              </View>
            </View>
          )}
          {/* pagination */}
          <View style={styles.paginationWrapper}>
            <View
              style={[
                styles.paginationItem,
                {alignItems: step == 1 ? 'flex-start' : 'flex-end'},
              ]}>
              <View style={styles.paginationSubItem} />
            </View>
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <ButtonAction
            title={step == 1 ? 'Next' : 'Mulai Sekarang '}
            width={290}
            color={colors.white}
            borderRadius={10}
            onPress={handleNext}
          />
          {/* <ButtonCustom
            title={step == 1 ? 'Next' : 'Mulai Sekarang Juga!'}
            buttonStyle={styles.buttonStyle}
            color={colors.black}
            onPress={onButtonPress}
          /> */}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  body: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
  },
  header: {
    alignSelf: 'flex-end',
    marginRight: 20,
    top: 32,
  },
  logo: {
    height: 20,
    width: 88,
    resizeMode: 'contain',
  },
  textSkip: {
    fontFamily: fonts.PoppinsRegular,
    color: colors.black,
    fontSize: 20,
  },
  textTitle: {
    fontWeight: 'bold',
    color: colors.black,
    fontSize: 35,
    textAlign: 'left',
    color: colors.blue,
  },
  textDesc: {
    fontFamily: fonts.PoppinsRegular,
    color: colors.black,
    fontSize: 23,
    textAlign: 'left',
  },
  bannerWrapper: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  banner: {
    height: 339,
    width: '100%',
    resizeMode: 'contain',
  },
  contentViewText: {
    backgroundColor: colors.GreyTint,
    height: '100%',
    width: '100%',
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
    padding: 10,
  },
  paginationWrapper: {
    alignItems: 'center',
    padding: 10,
    bottom: 15,
  },
  paginationItem: {
    height: 5,
    width: 50,
    borderRadius: 100,
    backgroundColor: 'rgba(0, 0, 255, 0.5)',
    top: 20,
  },
  paginationSubItem: {
    height: 5,
    width: 25,
    borderRadius: 100,
    backgroundColor: 'rgba(0, 0, 255, 1)',
  },
  buttonWrapper: {
    padding: 12,
  },
});
