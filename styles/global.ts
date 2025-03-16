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
    },
    mainResult: {
        fontSize: 40,
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
        flex:.3,
        flexDirection:"column",
        justifyContent:"flex-end",
        alignItems:"flex-end"
    },
    numpad: {
        flex:.55,
        alignItems: "center",
    },
    row: {
        flex: 1,
        justifyContent: "space-between",
        alignItems:'center',
        flexDirection: "row"
    },
    button: {
        width: 70,
        height: 70,
        marginHorizontal: 5,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 100,
        padding:10
    },
    buttonText: {
        textAlignVertical:'center',
        textAlign:"center",
        fontFamily:'Nunito',
        fontSize: 32,
        color: 'white',
        fontWeight:300,
    }
})