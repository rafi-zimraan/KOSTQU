// import React from 'react';
// import {Text, View} from 'react-native';

// export default function LibDemo({navigation}) {
//   const workHard = () => {
//     return new Promise((resolve, reject) => {
//       const isSuccess = Math.random() > 0.5;
//       isSuccess ? resolve('Work hard succeeded!') : reject('Work hard failed!');
//     });
//   };

//   const enjoy = message => {
//     console.log(message);
//     console.log("Now it's time to enjoy the fruits of your labor!");
//   };

//   const handleBurnout = error => {
//     console.error(error);
//     console.error('Unfortunately, you experienced burnout. Take a break.');
//   };

//   workHard()
//     .then(enjoy)
//     .catch(handleBurnout)
//     .finally(() => {
//       console.log('Process complete.');
//       process.exit(0);
//     });
//   return (
//     <View style={{flex: 1}}>
//       <Text>LibDemo.test</Text>
//       {/* <TopTab /> */}
//       {/* <TapNavigator /> */}
//     </View>
//   );
// }

import React from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Video from 'react-native-video';
import {VIDEO} from '../../assets';
import {colors} from '../../utils';

export default function LibDemo() {
  const [liked, setLiked] = React.useState(false);
  const [likes, setLikes] = React.useState(0);

  const handleLikePress = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <View style={{flex: 1}}>
      <Video
        source={VIDEO.VideoFootball}
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}
      />
      <View style={styles.iconContainer}>
        <TouchableNativeFeedback useForeground>
          <Icon name="camera" size={45} color={colors.white} />
        </TouchableNativeFeedback>
      </View>
      <View style={styles.likeContainer}>
        <TouchableNativeFeedback useForeground onPress={handleLikePress}>
          <View style={[styles.likeButton, liked && styles.liked]}>
            <Icon
              name={liked ? 'heart' : 'heart-outline'}
              size={45}
              color={liked ? 'red' : 'black'}
            />
          </View>
        </TouchableNativeFeedback>
        <Text style={styles.likeCount}>{likes}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    top: 50,
    right: 10,
    zIndex: 30,
  },
  likeContainer: {
    position: 'absolute',
    right: 10,
    zIndex: 30,
    alignItems: 'center',
    top: '50%',
    transform: [{translateY: -50}],
  },
  likeButton: {
    borderColor: 'black',
    borderRadius: 25,
    padding: 5,
  },
  liked: {
    borderColor: 'red',
  },
  likeCount: {
    color: colors.white,
    fontSize: 16,
    marginTop: 5,
  },
});
