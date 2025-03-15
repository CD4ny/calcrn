import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global';
import { Colors } from '@/constants/Colors';

interface Props {
    label:string;
}

export default function CalcButton({label}:Props) {
    return (
        <Pressable style={[localStyles.operations,localStyles.padding,localStyles.margin]}>
        <Text style={[localStyles.ligth,]}>{label}</Text>
    </Pressable>
  )
}

const localStyles = StyleSheet.create({

    operations:{
        backgroundColor:Colors.orange
    },
    padding:{padding:20},
    margin:{
        margin:5
    },
    rounded:{
        borderRadius:20
    },
    font:{
        fontFamily:'Nunito',
        fontSize:30
    },
    dark:{
        backgroundColor:Colors.darkGray,
        color:Colors.textPrimary,
    },

    ligth:{
        backgroundColor:Colors.lightGray,
        color:Colors.textSecondary,
    }

})