import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import {Gap, HeaderHome} from '../../components';
import {DataHome} from '../../features/Home';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#131150'} />
      <Gap height={39} />
      <ScrollView stickyHeaderIndices={[0]} stickyHeaderHiddenOnScroll>
        <HeaderHome />
        <Gap height={10} />
        <DataHome />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
