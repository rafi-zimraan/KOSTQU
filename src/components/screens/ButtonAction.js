import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../utils/colors';

export default function ButtonAction({
  title = 'Button',
  onPress,
  disabled,
  backgroundColor = 'rgb(0,93,255)',
  loading = false,
  iconLeft,
  borderRadius,
  width,
  borderColor,
  color,
  borderWidth,
  iconRight,
}) {
  return (
    <TouchableNativeFeedback
      useForeground
      onPress={onPress}
      disabled={disabled}>
      <View
        style={{
          ...styles.container,
          width,
          backgroundColor,
          borderRadius,
          borderColor,
          borderWidth,
        }}>
        {loading ? (
          <ActivityIndicator size={'small'} color={'white'} />
        ) : (
          <View style={styles.titleView}>
            {iconLeft && <Icon name={iconLeft} color={'white'} size={22} />}
            <Text
              style={{...styles.TextTitle, color}}
              adjustsFontSizeToFit
              allowFontScaling>
              {title}
            </Text>
          </View>
        )}
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  TextTitle: {
    textAlignVertical: 'center',
    fontSize: 17,
    color: colors.white,
    fontWeight: '500',
    marginHorizontal: 5,
  },
  container: {
    width: '80%',
    height: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor: colors.white,
    borderWidth: 1,
  },
});
