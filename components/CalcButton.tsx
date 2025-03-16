import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global';
import { Colors } from '@/constants/Colors';
import * as Haptics from 'expo-haptics';

interface Props {
    label: string;
    blackText?: boolean;
    color?: string;
    doubleSized?: boolean;
    onPress: () => void;
    onLongPress?: () => {};
}

export default function CalcButton({ label, color = Colors.darkGray, blackText = false, doubleSized = false, onPress, onLongPress }: Props) {



    return (
        <Pressable style={({ pressed }) => ({
            ...globalStyles.button,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor: color,
            width: doubleSized ? 150 : 70,
            opacity: pressed ? 0.6 : 1
        })}

            onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)                      
                onPress();
            }}
        >
            <Text style={[globalStyles.buttonText, { color: !blackText ? Colors.textPrimary : Colors.background }]}>{label}</Text>
        </Pressable>
    )
}
