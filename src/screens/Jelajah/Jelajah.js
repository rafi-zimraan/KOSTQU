import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Gap} from '../../components';
import {DataJelajah} from '../../features/Jelajah';
import {colors} from '../../utils';

export default function Jelajah({navigation}) {
  const Height = Dimensions.get('window').height;
  const Width = Dimensions.get('window').width;

  return (
    <View style={{...styles.Container, width: Width, height: Height}}>
      <View style={styles.body}>
        <Text style={styles.TextReels}>Reels</Text>
        <View style={styles.iconContainer}>
          <TouchableNativeFeedback useForeground>
            <Icon name="camera" size={33} color={colors.white} />
          </TouchableNativeFeedback>
          <Gap width={16} />
          <TouchableNativeFeedback useForeground>
            <Icon name="magnify" size={33} color={colors.white} />
          </TouchableNativeFeedback>
        </View>
      </View>
      <DataJelajah />
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
  },
  TextReels: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  body: {
    position: 'absolute',
    top: 30,
    right: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 1,
    padding: 15,
  },
  Container: {
    backgroundColor: colors.white,
    position: 'relative',
    backgroundColor: colors.black,
  },
});
