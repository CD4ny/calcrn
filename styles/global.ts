import { Colors } from "@/constants/Colors"
import { StyleSheet } from "react-native"


export const globalStyles = StyleSheet.create({

    background: {
        backgroundColor:Colors.background,
        flex: 1
    },
    calculatorContainer:{
        flex:1,
        justifyContent:"flex-end",
        paddingBottom:5
    }
})