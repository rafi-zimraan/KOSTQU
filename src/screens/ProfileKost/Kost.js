import React from 'react';
import {ScrollView, StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HeaderHome} from '../../components';
import {DataKos} from '../../features/Kos';

export default function Kost() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#131150'} />
      <ScrollView stickyHeaderIndices={[0]} stickyHeaderHiddenOnScroll>
        <HeaderHome />
        <DataKos />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
