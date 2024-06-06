import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {DataVideos, Reels} from '..';

export default function DataJelajah() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndexValue = ({index}) => {
    setCurrentIndex = {index};
  };

  return (
    <SwiperFlatList
      data={DataVideos}
      onChangeIndex={handleChangeIndexValue}
      vertical={true}
      renderItem={({item, index}) => (
        <Reels item={item} index={index} currentIndex={currentIndex} />
      )}
      keyExtractor={(item, index) => index}
    />
  );
}

const styles = StyleSheet.create({
  videoDuration: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 5,
  },
  durationText: {
    color: 'white',
  },
});
