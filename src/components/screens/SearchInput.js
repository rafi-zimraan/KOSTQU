import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Gap} from '..';
import {colors} from '../../utils/colors';

const SearchInput = () => {
  return (
    <View style={styles.containerSearchBar}>
      <Icon name={'magnify'} color={'black'} size={30} />
      <Gap height={3} />
      <TextInput
        placeholder="Cari sesuatu"
        placeholderTextColor={'grey'}
        style={{flex: 1}}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  containerSearchBar: {
    background: colors.white,
    flexDirection: 'row',
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    borderRadius: 25,
  },
});
