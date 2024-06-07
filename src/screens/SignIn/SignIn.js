import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {fonts, images} from '../../assets';
import {ButtonAction, Gap} from '../../components';
import {FormInput} from '../../features/Auth';
import {colors} from '../../utils';

export default function SignIn({navigation}) {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkStorageCredentials();
  }, []);

  const checkStorageCredentials = async () => {
    try {
      const storedCredential = await AsyncStorage.getItem('user_credential');
      if (storedCredential) {
        const {email} = JSON.parse(storedCredential);
        navigationToDasboard(email);
      }
    } catch (error) {
      console.log('Failed to fetch the credential from storage', error);
    }
  };

  const navigationToDasboard = email => {
    if (email === 'admin@example.com') {
      navigation.navigate('BottomTabAdmin');
    } else if (email === 'superadmin@example.com') {
      navigation.navigate('BottomTabSuperAdmin');
    } else {
      navigation.navigate('MainNavigator');
    }
  };

  const handleLogin = async data => {
    const {email, password} = data;
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (
        (email === 'admin@example.com' && password === 'admin') ||
        (email === 'superadmin@example.com' && password === 'superadmin') ||
        password === 'userpassword' // Example condition for regular users
      ) {
        await AsyncStorage.setItem('user_credential', JSON.stringify(data));
        navigationToDasboard(email);
      } else {
        console.log('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        stickyHeaderIndices={[0]}
        stickyHeaderHiddenOnScroll
        style={{padding: 10}}>
        {/* Image  */}
        <Image source={images.Img_signIn} style={styles.logo} />
        {/* Text Title Login Page */}
        <View style={styles.contentText}>
          <Gap height={5} />
          <Text style={styles.title}>Login</Text>
          <Text style={styles.textDesc}>Silakan isi input di bawah ini</Text>
        </View>
        <Gap height={5} />
        {/* TextInput */}
        <View style={styles.body}>
          <FormInput
            name={'email'}
            placeholder={'contoh@gmail.com'}
            iconName={'gmail'}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
            errors={errors}
            control={control}
          />
          <FormInput
            name={'password'}
            placeholder={'Kata sandi..'}
            iconName={'lock'}
            secureTextEntry
            errors={errors}
            control={control}
          />
        </View>
        {/* Button Login */}
        <ButtonAction
          title={loading ? 'Loading..' : 'Login'}
          onPress={handleSubmit(handleLogin)}
          width={'80%'}
          borderRadius={50 / 2}
          color={colors.white}
        />

        <Gap height={10} />
        {/* Text Forgot Password */}
        <TouchableNativeFeedback
          useForeground
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.textForgotPassword}>Lupa kata sandi?</Text>
        </TouchableNativeFeedback>

        <Gap height={30} />
        {/* Text Register */}
        <Text style={styles.text}>
          Tidak punya akun?{' '}
          <TouchableNativeFeedback
            useForeground
            onPress={() => navigation.navigate('SignUp')}>
            <Text
              style={[
                styles.text,
                {fontFamily: fonts.PoppinsMedium, color: colors.blue},
              ]}>
              Sign Up
            </Text>
          </TouchableNativeFeedback>
        </Text>

        <Gap height={40} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  textForgotPassword: {
    fontFamily: fonts.PoppinsRegular,
    color: colors.blue,
    fontSize: 15,
    textAlign: 'center',
  },
  textDesc: {
    fontFamily: fonts.PoppinsRegular,
    color: colors.gray,
    fontSize: 20,
    textAlign: 'left',
  },
  contentText: {
    marginLeft: 20,
  },
  title: {
    fontWeight: 'bold',
    color: colors.black,
    fontSize: 35,
    textAlign: 'left',
    color: colors.blue,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  text: {
    fontFamily: fonts.PoppinsRegular,
    color: colors.gray,
    fontSize: 15,
    textAlign: 'center',
  },
  logo: {
    height: 340,
    width: '100%',
    alignItems: 'center',
  },
});
