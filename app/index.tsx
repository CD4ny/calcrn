import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/global'

const CalcApp = () => {
  return (
    <View style={[globalStyles.calculatorContainer]}>
      <Text style={{fontSize:60,fontFamily:"Nunito",color:Colors.textPrimary}}>50 x 25</Text>
      <Text style={{fontSize:60,fontFamily:"Nunito",color:Colors.textPrimary}}>50 x 25</Text>
    </View>
  )
}

export default CalcApp