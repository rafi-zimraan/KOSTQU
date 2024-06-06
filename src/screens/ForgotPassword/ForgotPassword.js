import React from 'react';
import {useForm} from 'react-hook-form';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {images} from '../../assets';
import {ButtonAction, Gap, Header} from '../../components';
import {FormInput} from '../../features/Auth';
import {colors} from '../../utils';

export default function ForgotPassword({navigation}) {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm();
  return (
    <KeyboardAvoidingView
      style={styles.Container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView stickyHeaderIndices={[0]} stickyHeaderHiddenOnScroll>
        <Header
          iconName="arrow-u-left-top"
          title="Lupa Kata Sandi"
          onPress={() => navigation.goBack()}
        />
        <View style={styles.body}>
          <Image
            source={images.Img_riset_Pas}
            style={{height: 296, width: '100%'}}
          />
        </View>
        <View style={{padding: 20}}>
          <Text style={styles.txtTitle}>Reset Password</Text>
          <Gap height={15} />
          <Text style={styles.txtDes}>
            Masukkan email yang terkait dengan akun Anda dan{''}kami akan
            mengirimkan email berisi instruksi untuk mengatur ulang kata sandi
            Anda.
          </Text>
          <Gap height={25} />
          <FormInput
            name={'email'}
            placeholder={'contoh@gmail.com'}
            iconName={'gmail'}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
            errors={errors}
            control={control}
          />
        </View>
        <ButtonAction
          title="Send"
          onPress={() => navigation.replace('ResetPassword')}
          width={'90%'}
          borderRadius={50 / 2}
          color={colors.white}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  txtDes: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.gray,
  },
  txtTitle: {
    fontSize: 29,
    fontWeight: 'bold',
    color: colors.black,
  },
  body: {
    alignItems: 'center',
  },
  Container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
