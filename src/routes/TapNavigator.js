import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {DIfavoritkan, PernahDilihat} from '../screens';

export default function TapNavigator() {
  const Top = createMaterialTopTabNavigator();
  return (
    <Top.Navigator initialRouteName="Difavoritkan">
      <Top.Screen name="Difavoritkan" component={DIfavoritkan} />
      <Top.Screen name="Pernah Dilihat" component={PernahDilihat} />
    </Top.Navigator>
  );
}
