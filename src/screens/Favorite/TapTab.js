import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {Animated, TouchableOpacity, View} from 'react-native';
import {DIfavoritkan, PernahDilihat} from '..';
import {fonts} from '../../assets';
import {colors, dimens} from '../../utils';

const Top = createMaterialTopTabNavigator();

function MyTapbar({state, descriptors, navigation, position}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        });

        const tabBackgroundColor = isFocused ? 'blue' : 'grey';

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              backgroundColor: tabBackgroundColor,
              marginHorizontal: 10,
              height: '4%',
              width: '9%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              // backgroundColor: colors.white,
            }}>
            <Animated.Text
              style={{
                fontFamily: fonts.PoppinsMedium,
                color: colors.white,
                fontSize: dimens.l,
              }}>
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const TopTab = ({data}) => {
  <Top.Navigator
    initialRouteName="Difavoritkan"
    activeColor={colors.white}
    inactiveColor="#95a5a6"
    shifting={false}
    tabBar={props => <MyTapbar {...props} />}>
    <Top.Screen
      name="Difavoritkan"
      component={DIfavoritkan}
      initialParams={data}
    />
    <Top.Screen name="PernahDilihat" component={PernahDilihat} />
  </Top.Navigator>;
};

export default TopTab;
