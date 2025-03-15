import { Colors } from "@/constants/Colors"
import { StyleSheet } from "react-native"


export const globalStyles = StyleSheet.create({

    background: {
        padding: 20,
        backgroundColor: Colors.background,
        flex: 1
    },
    calculatorContainer: {
        flex: 1,
        justifyContent: "flex-end",
        paddingBottom: 20,
        paddingHorizontal: 20
    },
    mainResult: {
        fontSize: 60,
        fontFamily: "Nunito",
        color: Colors.textSecondary,
        textAlign: "right"
    },
    operation: {
        fontSize: 60,
        fontFamily: "Nunito",
        color: Colors.textPrimary,
        textAlign: "right"
    },
    display: {
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    numpad: {
        flexDirection: "row"
    },
    row: { 
        flex: 1,
        justifyContent:"space-between", 
        flexDirection: "row" }
})