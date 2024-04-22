import React from 'react';
import {View} from 'react-native';

export default function Gap({
  width,
  height,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  flex,
}) {
  return (
    <View
      style={{
        width,
        height,
        marginBottom,
        marginLeft,
        marginRight,
        marginTop,
        flex,
      }}
    />
  );
}
