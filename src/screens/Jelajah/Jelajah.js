import React, {useRef, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  PermissionsAndroid,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Video from 'react-native-video';
import {VIDEO, images} from '../../assets';
import {colors} from '../../utils';

const videoData = [
  {id: '0', source: VIDEO.VideoMom},
  {id: '1', source: VIDEO.VideoFootball},
  {id: '2', source: VIDEO.VideoMotivation},
];

export default function Jelajah() {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRefs = useRef([]);
  const [paused, setPaused] = useState(false);
  const [selectedImageCamera, setSelectedImageCamera] = useState(null);

  const handleLikePress = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleVideoPress = () => {
    setPaused(!paused);
  };

  const onViewableItemsChanged = ({viewableItems}) => {
    if (viewableItems.length > 0) {
      const currentIndex = viewableItems[0].index;
      setCurrentVideo(currentIndex);
      setPaused(false);
    }
  };

  const handleImageResponse = response => {
    if (response.didCancel) {
      console.log('Batal memilih gambar');
    } else if (response.error) {
      console.log('Error', response.error);
    } else {
      const {fileName: name, uri, type} = response.assets[0];
      setSelectedImageCamera({name, uri, type});
    }
  };

  async function handleImagePicker() {
    const imagePicker = source => {
      const options = {
        title: 'Pilih Gambar',
        cancelButtonTitle: 'Batal',
        takePhotoTitle: 'Ambil gambar dari kamera',
        chooseFromLibraryButtonTitle: 'Pilih gambar dari galeri',
        quality: 0.2,
      };
      if (source === 'camera') {
        launchCamera(options, handleImageResponse);
      } else if (source === 'gallery') {
        launchImageLibrary(options, handleImageResponse);
      }
    };

    const permissionCamera = async () => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) imagePicker('camera');
    };

    Alert.alert(
      'Perhatian!',
      'Ambil gambar dari...',
      [
        {
          text: 'Camera',
          onPress: permissionCamera,
        },
        {
          text: 'Gallery',
          onPress: () => imagePicker('gallery'),
        },
      ],
      {cancelable: true},
    );
  }

  const renderItem = ({item, index}) => {
    return (
      <Pressable onPress={handleVideoPress} style={{flex: 1, height: 800}}>
        <StatusBar backgroundColor={'transparent'} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Video
            ref={ref => (videoRefs.current[index] = ref)}
            source={item.source}
            resizeMode="cover"
            style={{width: '100%', height: '100%'}}
            paused={currentVideo !== index || paused}
          />
          {paused && currentVideo === index && (
            <Icon
              name="pause"
              size={60}
              color="white"
              style={styles.pauseIcon}
            />
          )}
          <View style={styles.viewCamera}>
            <Pressable onPress={handleImagePicker} style={styles.Navbar}>
              <Text style={styles.txtReels}>Reels</Text>
              <Icon name="camera" size={35} color={colors.white} />
            </Pressable>
          </View>
          <View style={styles.viewLike}>
            <Pressable onPress={handleLikePress}>
              <View style={[styles.likeButton, liked]}>
                <Icon
                  name={liked ? 'heart' : 'heart-outline'}
                  size={35}
                  color={liked ? 'red' : 'white'}
                />
              </View>
            </Pressable>
            <Text style={styles.likeCount}>{likes}</Text>
          </View>
          <View style={styles.viewMessage}>
            <Pressable>
              <View style={styles.messageContent}>
                <Icon
                  name={'message-processing-outline'}
                  size={35}
                  color={'white'}
                />
              </View>
            </Pressable>
            <Text style={styles.likeCount}>208</Text>
          </View>
          <View style={styles.viewShare}>
            <Pressable>
              <View style={styles.shareContent}>
                <Icon name={'share'} size={40} color={'white'} />
              </View>
            </Pressable>
            <Text style={styles.likeCount}>367</Text>
          </View>
        </View>
        <View style={styles.Viewbiodata}>
          <View style={styles.body}>
            <Image
              source={images.Img_Friends}
              style={{height: 45, width: 45}}
            />
            <View style={styles.txtBio}>
              <Text style={styles.title}>Firly Naura</Text>
              <Text style={styles.description}>#For_All</Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <FlatList
      data={videoData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      pagingEnabled
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
      initialNumToRender={1}
      maxToRenderPerBatch={1}
      windowSize={2}
    />
  );
}

const styles = StyleSheet.create({
  txtReels: {
    fontWeight: '700',
    fontSize: 20,
    color: colors.white,
  },
  description: {
    fontWeight: '500',
    fontSize: 14,
    color: colors.DarkGray,
  },
  title: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '600',
  },
  txtBio: {
    flex: 1,
    position: 'absolute',
    marginLeft: 60,
  },
  body: {flexDirection: 'row', alignItems: 'center'},
  Viewbiodata: {
    position: 'absolute',
    zIndex: 30,
    bottom: 60,
    padding: 10,
    marginLeft: 10,
  },
  shareContent: {
    padding: 5,
  },
  viewShare: {
    position: 'absolute',
    right: 10,
    zIndex: 30,
    alignItems: 'center',
    top: '83%',
    transform: [{translateY: -50}],
  },
  pauseIcon: {
    position: 'absolute',
    zIndex: 30,
    top: '45%',
    left: '45%',
  },
  messageContent: {
    padding: 5,
  },
  viewMessage: {
    position: 'absolute',
    right: 10,
    zIndex: 30,
    alignItems: 'center',
    top: '72%',
    transform: [{translateY: -50}],
  },
  Navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  viewCamera: {
    position: 'absolute',
    top: 48,
    right: 10,
    left: 10,
    zIndex: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewLike: {
    position: 'absolute',
    right: 10,
    zIndex: 30,
    alignItems: 'center',
    top: '60%',
    transform: [{translateY: -50}],
  },
  likeButton: {
    padding: 5,
  },
  likeCount: {
    color: colors.white,
    fontSize: 16,
    marginTop: 5,
  },
});
