import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../utils/colors';

export default function Header({
  title = 'Title',
  iconName = 'chevron-left',
  onPress,
}) {
  return (
    <View style={styles.container(StatusBar.currentHeight)}>
      <TouchableNativeFeedback useForeground onPress={onPress}>
        <View style={styles.btnHeader}>
          <Icon name={iconName} color={'black'} size={32} />
        </View>
      </TouchableNativeFeedback>
      <Text style={styles.titleHeader}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleHeader: {
    fontSize: 20,
    color: colors.black,
    marginHorizontal: 90,
    fontWeight: '700',
  },
  container: statBarHeight => ({
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    zIndex: 9,
    marginTop: statBarHeight,
  }),
});
