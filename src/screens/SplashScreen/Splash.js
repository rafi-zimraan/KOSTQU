import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';
import {images} from '../../assets';
import {Gap} from '../../components';
import {colors} from '../../utils';

export default function Splash({navigation}) {
  useEffect(() => {
    checkUserStatus();
  }, []);

  const checkUserStatus = async () => {
    try {
      const isFirstTime = await AsyncStorage.getItem('isFirstTime');
      setTimeout(async () => {
        if (isFirstTime === null) {
          // Jika pengguna masuk pertama kali, arahkan ke OnBoarding
          navigation.replace('OnBoarding');
          // Set status pengguna agar tidak masuk lagi ke OnBoarding di masa depan
          await AsyncStorage.setItem('isFirstTime', 'false');
        } else {
          // Jika pengguna bukan masuk pertama kali, arahkan ke SignIn
          navigation.replace('SignIn');
        }
      }, 3000);
    } catch (error) {
      console.log('Error checking user status:', error);
    }
  };

  return (
    <View style={styles.Container}>
      <Image source={images.logo_app} style={{height: 150, width: 150}} />
      <Gap height={15} />
      <ActivityIndicator color={'black'} size={'large'} />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
});
