import React from 'react';
import {Text, View} from 'react-native';

export default function LibDemo({navigation}) {
  const workHard = () => {
    return new Promise((resolve, reject) => {
      const isSuccess = Math.random() > 0.5;
      isSuccess ? resolve('Work hard succeeded!') : reject('Work hard failed!');
    });
  };

  const enjoy = message => {
    console.log(message);
    console.log("Now it's time to enjoy the fruits of your labor!");
  };

  const handleBurnout = error => {
    console.error(error);
    console.error('Unfortunately, you experienced burnout. Take a break.');
  };

  workHard()
    .then(enjoy)
    .catch(handleBurnout)
    .finally(() => {
      console.log('Process complete.');
      process.exit(0);
    });
  return (
    <View style={{flex: 1}}>
      <Text>LibDemo.test</Text>
      {/* <TopTab /> */}
      {/* <TapNavigator /> */}
    </View>
  );
}
