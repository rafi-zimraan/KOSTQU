import React from 'react';
import {useForm} from 'react-hook-form';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {images} from '../../assets';
import {ButtonAction, FormInput, Gap, Header} from '../../components';
import {colors} from '../../utils';

export default function ResetPassword({navigation}) {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView stickyHeaderIndices={[0]} stickyHeaderHiddenOnScroll>
        <Header
          iconName="arrow-u-left-top"
          title="Reset Password"
          onPress={() => navigation.goBack()}
        />
        <View style={styles.body}>
          <Image source={images.Img_riset_Pas} style={styles.image} />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Enter new password</Text>
          <Gap height={15} />
          <Text style={styles.description}>
            Kata sandi baru Anda harus berbeda dengan kata sandi yang digunakan
            sebelumnya
          </Text>
          <Gap height={25} />
          <FormInput
            name={'password'}
            placeholder={'Enter your new password..'}
            iconName={'lock'}
            secureTextEntry
            errors={errors}
            control={control}
          />
          <Text style={styles.textFormInput}>minimal harus 8 karakter</Text>
          <FormInput
            name={'confirmPassword'}
            placeholder={'Confirm your new password..'}
            iconName={'lock'}
            secureTextEntry
            errors={errors}
            control={control}
          />
          <Text style={styles.textFormInput}>Kedua kata sandi harus cocok</Text>
        </View>
        <View style={styles.buttonContainer}>
          <ButtonAction
            title="Reset Password"
            onPress={() => navigation.replace('SuccesScreen')}
          />
        </View>
        <Gap height={5} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  body: {
    alignItems: 'center',
  },
  formContainer: {
    padding: 15,
  },
  image: {
    height: 296,
    width: '100%',
  },
  title: {
    fontSize: 29,
    fontWeight: 'bold',
    color: colors.black,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.gray,
  },
  textFormInput: {
    fontSize: 17,
    bottom: 15,
    color: colors.gray,
  },
  buttonContainer: {
    paddingHorizontal: 15,
    bottom: 15,
  },
});
