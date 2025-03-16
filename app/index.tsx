import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/global'
import CalcLine from '@/components/CalcLine'
import CalcButton from '@/components/CalcButton'
import { useCalc } from '@/hooks/UseCalc'
const CalcApp = () => {

  const { preOp, postOp, formula, lastOperation, buildNumber, clean , ABS , remove } = useCalc()

  return (
    <View style={[globalStyles.calculatorContainer]}>
      <View style={[globalStyles.display]}>
        <CalcLine numberOfLines={1} variant='result' adjustsFontSizeToFit>{ }</CalcLine>
        <CalcLine numberOfLines={1} variant='operation' adjustsFontSizeToFit>{postOp}</CalcLine>
        <CalcLine numberOfLines={1} variant='result' adjustsFontSizeToFit>{ }</CalcLine>
      </View>
      <View style={globalStyles.numpad}>
        <View style={globalStyles.row}>
          <CalcButton label='C' color={Colors.lightGray} onPress={() => { clean() }} />
          <CalcButton label='±' color={Colors.lightGray} onPress={() => {ABS()}} />
          <CalcButton label='⌫' color={Colors.lightGray} onPress={() => {remove()}} />
          <CalcButton label='÷' color={Colors.orange} onPress={() => { }} />
        </View>
        <View style={globalStyles.row}>
          <CalcButton label='7' onPress={() => { buildNumber('7') }} />
          <CalcButton label='8' onPress={() => { buildNumber('8') }} />
          <CalcButton label='9' onPress={() => { buildNumber('9') }} />
          <CalcButton label='*' color={Colors.orange} onPress={() => { }} />
        </View>
        <View style={globalStyles.row}>
          <CalcButton label='4' onPress={() => { buildNumber('4') }} />
          <CalcButton label='5' onPress={() => { buildNumber('5') }} />
          <CalcButton label='6' onPress={() => { buildNumber('6') }} />
          <CalcButton label='-' color={Colors.orange} onPress={() => { }} />
        </View>
        <View style={globalStyles.row}>
          <CalcButton label='1' onPress={() => { buildNumber('1') }} />
          <CalcButton label='2' onPress={() => { buildNumber('2') }} />
          <CalcButton label='3' onPress={() => { buildNumber('3') }} />
          <CalcButton label='+' color={Colors.orange} onPress={() => { }} />
        </View>
        <View style={globalStyles.row}>
          <CalcButton label='0' doubleSized onPress={() => { buildNumber('0') }} />
          <CalcButton label='.' onPress={() => { buildNumber('.') }} />
          <CalcButton label='=' color={Colors.orange} onPress={() => { }} />
        </View>
      </View>
    </View>
  )
}

export default CalcApp