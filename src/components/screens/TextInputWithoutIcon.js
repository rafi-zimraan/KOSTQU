import React from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import {fonts} from '../../assets';
import {colors} from '../../utils';

const TextInputWithoutIcon = ({
  title = 'TextInput',
  placeholder = 'Placeholder',
  value,
  onChangeText,
  marginTop = 0,
  marginBottom = 0,
  keyboardType,
  inputStyle = {},
  textAlignVertical = 'center',
  multiline = false,
  editable = true,
  pressable = false,
  onPress,
}) => {
  return (
    <View
      style={[
        styles.wrapInput,
        {marginBottom: marginBottom, marginTop: marginTop},
      ]}>
      {pressable ? (
        <Pressable onPress={onPress}>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={'gray'}
            style={[
              styles.textInput,
              inputStyle,
              !editable && {backgroundColor: 'rgba(0,0,0,0.1)'},
            ]}
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            textAlignVertical={textAlignVertical}
            multiline={multiline}
            editable={editable}
          />
        </Pressable>
      ) : (
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={'gray'}
          style={[
            styles.textInput,
            inputStyle,
            !editable && {backgroundColor: 'rgba(0,0,0,0.1)'},
          ]}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          textAlignVertical={textAlignVertical}
          multiline={multiline}
          editable={editable}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapInput: {
    width: '100%',
  },
  titleInput: {
    fontFamily: fonts.PoppinsMedium,
    color: colors.black,
  },
  textInput: {
    height: 50,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    color: colors.black,
    fontFamily: fonts.PoppinsRegular,
  },
});
export default TextInputWithoutIcon;
