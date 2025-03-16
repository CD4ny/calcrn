import { useFonts } from 'expo-font';
import { View, Platform } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import { Colors } from '@/constants/Colors';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '@/styles/global';
import * as NavigationBar from 'expo-navigation-bar';

const RootLayout = () => {

  const isAndroid = Platform.OS === 'android';

  if (isAndroid) {
    NavigationBar.setBackgroundColorAsync(Colors.background)
  }
  const [loaded] = useFonts({
    Nunito: require('../assets/fonts/CaskaydiaCoveNerdFontMono-Regular.ttf')
  })
  if (!loaded) {
    return null;
  }
  return (
    <View style={[globalStyles.background]}>
      <Slot />
      <StatusBar style='light' />
    </View>
  )
}

export default RootLayout