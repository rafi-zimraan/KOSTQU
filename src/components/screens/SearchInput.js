import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Gap} from '..';
import {colors} from '../../utils';

export default function SearchInput({
  style,
  backgroundColor,
  placeholderTextColor,
  borderRadius,
}) {
  return (
    <View style={[styles.containerSearchBar, {borderRadius, backgroundColor}]}>
      <Icon name={'magnify'} color={'black'} size={30} />
      <Gap height={3} />
      <TextInput
        placeholder="Cari kos kosan seru"
        placeholderTextColor={placeholderTextColor}
        style={style}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerSearchBar: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    elevation: 3,
    alignItems: 'center',
  },
});
