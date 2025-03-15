import { Text, type TextProps, View } from 'react-native'
import React, { Component } from 'react'
import { globalStyles } from '@/styles/global'

interface Props extends TextProps {
  variant?: 'operation' | 'result';
}

const CalcLine = ({ variant='operation',...props }: Props) => {

  return (
    <Text style={[{},
      variant=='operation'&&globalStyles.operation,
      variant=='result'&&globalStyles.mainResult,
    ]}
      {...props}
    ></Text>
  )
}
export default CalcLine;