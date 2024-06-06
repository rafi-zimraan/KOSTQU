import React, {useRef} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import Video from 'react-native-video';

export default function Reels({item, index, currentIndex}) {
  const Height = Dimensions.get('window').height;
  const Width = Dimensions.get('window').width;
  const VideoRef = useRef(null);

  const onBuffer = buffer => {
    console.log('Buffering', buffer);
  };

  const onError = error => {
    console.log('error', error);
  };

  return (
    <View style={{height: Height, width: Width, position: 'relative'}}>
      <TouchableOpacity
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
        }}>
        <Video
          ref={VideoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          resizeMode="cover"
          paused={false}
          source={item.Video}
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
