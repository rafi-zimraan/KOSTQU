import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import {Gap, HeaderHome} from '../../components';
import {DataProfile} from '../../features/Profile';

export default function Profile() {
  // const HanldeForgotPassword = () => {
  //   Alert.alert(
  //     'Nantikan Perkembangan FItur ini',
  //     'Ini adalah fitur yang akan segera hadir di aplikasi kami.',
  //     [
  //       {
  //         text: 'Ok',
  //       },z
  //     ],
  //     {
  //       cancelable: false,
  //     },
  //   );
  // };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#131150'} />
      <Gap height={39} />
      <ScrollView stickyHeaderIndices={[0]} stickyHeaderHiddenOnScroll>
        <HeaderHome />
        <DataProfile />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
