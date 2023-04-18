import { 
    View,
    Text,
    TouchableHighlight,
    TouchableWithoutFeedback,
    StyleSheet, 
} from "react-native"
const MyButton = ({props,children, ...Other})=>{
    const { backgroundColorBtn, fontSizeBtn, fontWeightBtn, colorBtn, widthBtn, heightBtn, ...AnotherStyle  }=props
    return (
            <TouchableWithoutFeedback underlayColor="white" {...Other}>
                <View style={{...styles.button, height: heightBtn, width: widthBtn,backgroundColor: backgroundColorBtn, ...AnotherStyle}}>
                    <Text style={{...styles.buttonCancelText,fontSize: fontSizeBtn, fontWeight: fontWeightBtn, color: colorBtn}}>{children}</Text>
                </View>
            </TouchableWithoutFeedback>
    )
}
const styles=StyleSheet.create({
    button: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 150,
    },
})
export default MyButton