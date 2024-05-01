import React from 'react';
import {Text, View} from 'react-native';
import TapNavigator from '../../routes/TapNavigator';

export default function LibDemo({navigation}) {
  return (
    <View style={{flex: 1}}>
      <Text>LibDemo.test</Text>
      {/* <TopTab /> */}
      <TapNavigator />
    </View>
  );
}
