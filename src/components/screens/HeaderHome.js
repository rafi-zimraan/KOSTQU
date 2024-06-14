import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {icons} from '../../assets';
import {SearchInput} from '../../components';
import {colors} from '../../utils';

export default function LibDemo({
  onPressIconMenu,
  onPressIconBell,
  onPressIconMessage,
}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <TouchableNativeFeedback useForeground onPress={onPressIconMenu}>
          <Image source={icons.IconMenu} style={{width: 30, height: 30}} />
        </TouchableNativeFeedback>
        <SearchInput
          style={styles.input}
          placeholderTextColor={colors.gray}
          backgroundColor={colors.white}
          borderRadius={12}
        />
        <TouchableNativeFeedback onPress={onPressIconBell}>
          <Image source={icons.Iconbell} style={{width: 30, height: 30}} />
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={onPressIconMessage}>
          <Image source={icons.IconMessage} style={{width: 30, height: 30}} />
        </TouchableNativeFeedback>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 199,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 10,
  },
  container: {
    backgroundColor: colors.Dongker,
    height: 72,
    paddingHorizontal: 10,
  },
});
