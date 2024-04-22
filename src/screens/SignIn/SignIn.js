import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
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

  const onSubmit = data => {
    // Tambahkan logika autentikasi di sini
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {/* Image  */}
        <Image source={images.Img_signIn} style={styles.logo} />
        {/* Text Title Login Page */}
        <View style={styles.contentText}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.textDesc}>Silakan isi input di bawah ini</Text>
        </View>

        <Gap height={15} />
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
          onPress={handleSubmit(onSubmit)}
        />

        <Gap height={10} />
        {/* Text Forgot Password */}
        <TouchableNativeFeedback
          useForeground
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.textForgotPassword}>Lupa kata sandi?</Text>
        </TouchableNativeFeedback>

        <Gap height={40} />
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
      </KeyboardAvoidingView>
    </SafeAreaView>
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
    color: colors.grey,
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
    height: 380,
    width: '100%',
    alignSelf: 'center',
  },
});
