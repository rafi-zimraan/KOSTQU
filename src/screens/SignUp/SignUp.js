import React, {useState} from 'react';
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
import {ButtonAction, Gap, Header} from '../../components';
import {FormInput} from '../../features/Auth';
import {colors} from '../../utils';

export default function SignUp({navigation}) {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm();

  const [ready, setReady] = useState(false);
  setTimeout(() => setReady(true), 1000); // "lazy render"

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView stickyHeaderIndices={[0]} stickyHeaderHiddenOnScroll>
        <Header
          iconName="arrow-u-left-top"
          title="Create Account"
          onPress={() => navigation.goBack()}
        />
        {ready && (
          <View style={styles.body}>
            <Image
              source={images.Img_signUp}
              style={{height: 300, width: '100%', alignSelf: 'center'}}
            />

            <View style={styles.contentText}>
              <Text style={styles.textDesc}>
                Silakan isi input di bawah ini !!
              </Text>
            </View>
            <Gap height={5} />
            <View style={styles.container}>
              <FormInput
                name={'Username'}
                placeholder={'Username'}
                autoCapitalize={'words'}
                control={control}
                errors={errors}
              />

              <FormInput
                name={'email'}
                placeholder={'Masukan email..'}
                iconName={'gmail'}
                keyboardType={'email-address'}
                autoCapitalize={'none'}
                control={control}
                errors={errors}
              />

              <FormInput
                name={'password'}
                placeholder={'Masukan kata sandi..'}
                iconName={'lock'}
                secureTextEntry
                control={control}
                errors={errors}
              />

              <FormInput
                name={'password_confirmation'}
                placeholder={'Masukan ulang kata sandi..'}
                iconName={'lock'}
                secureTextEntry
                control={control}
                errors={errors}
              />

              <FormInput
                name={'status_akun'}
                type={'picker'}
                iconName={'account-heart'}
                validate={value => value && value !== 'Pilih status akun'}
                pickerItem={[
                  {
                    name: 'Pilih status akun',
                    value: null,
                    enabled: false,
                  },
                  {name: 'Pemilik', value: 'Pemilik'},
                  {name: 'Penyewa', value: 'Penyewa'},
                ]}
                control={control}
                errors={errors}
              />

              <FormInput
                name={'no_whatsapp'}
                placeholder={'WhatsApp (cth. 628987654321)'}
                iconName={'whatsapp'}
                keyboardType={'number-pad'}
                control={control}
                errors={errors}
              />

              <Gap height={5} />
              <ButtonAction
                title="SIgn Up"
                onPress={() => navigation.replace('SuccesScreenSignUp')}
                width={'90%'}
                borderRadius={50 / 2}
                color={colors.white}
              />
              <Gap height={20} />
              <Text style={styles.text}>
                Sudah punya akun?{' '}
                <TouchableNativeFeedback
                  useForeground
                  onPress={() => navigation.navigate('SignIn')}>
                  <Text
                    style={[
                      styles.text,
                      {fontFamily: fonts.PoppinsMedium, color: colors.blue},
                    ]}>
                    Sign In
                  </Text>
                </TouchableNativeFeedback>
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
      {!ready && <Text style={styles.textLoading}>Memuat formulir..</Text>}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  body: {
    // padding: 15,
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
  },
  textLoading: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'grey',
    flex: 1,
    fontStyle: 'italic',
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
  container: {
    alignItems: 'center',
    padding: 20,
  },
});
