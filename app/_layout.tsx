import {useFonts}  from 'expo-font';
import { View, Text } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import { Colors } from '@/constants/Colors';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '@/styles/global';

const RootLayout = () => {
  const [loaded] = useFonts({
    Nunito:require('../assets/fonts/Nunito-Regular.ttf')
  })
  if(!loaded){
    return null;
  }
  return (
    <View style={[globalStyles.background]}>
      <Slot/>
      <StatusBar style='light'/>
    </View>
  )
}

export default RootLayout