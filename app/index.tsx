import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/global'
import CalcLine from '@/components/CalcLine'
import CalcButton from '@/components/CalcButton'

const CalcApp = () => {
  const [operador] = useState()
  return (
    <View style={[globalStyles.calculatorContainer]}>
      <View>
        <CalcLine variant='result'>222</CalcLine>
        <CalcLine numberOfLines={1} variant='operation' adjustsFontSizeToFit>{ } asd</CalcLine>
      </View>
      <View style={globalStyles.numpad}>
        <View style={globalStyles.row}>
          <CalcButton label='C'/>
          <CalcButton label='C'/>
          <CalcButton label='C'/>
          <CalcButton label='C'/>
        </View>
      </View>
    </View>
  )
}

export default CalcApp