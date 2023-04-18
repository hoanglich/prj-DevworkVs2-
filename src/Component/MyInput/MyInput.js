import {
    View,
    TextInput,
    StyleSheet,
    Text,
    Image,
} from "react-native"

const MyInput=({children, isError, error, iconHeader, ...orther})=>{
    return (
        <View>
            <View style={[styles.containerInput, isError===true ? styles.borderWaring : styles.borderNomal]}>
                <View style={styles.iconLogin}>
                    <Image source={iconHeader} style={[iconHeader !==undefined ? styles.displayFlex : styles.displayNone ]}></Image>
                </View>
                <TextInput
                    {...orther}
                    style={styles.input}
                >
                </TextInput>
                {children}
            </View>
            <View style={[styles.error, isError === true ? styles.displayFlex : styles.displayNone]}>
                    <Text style={styles.errorText}>{error}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 300,
        height: 48,
        backgroundColor: '#fff',
        borderColor: '#D6D6D6',
        borderWidth: 1,
        borderRadius: 150,
        marginBottom: 15,
    },
    input: {
        marginLeft:18,
        marginRight: 'auto',
        width: 210,
    },
    iconLogin: {
        marginLeft: 18,
        width: 20,
        height:20,
    },
    error: {
        marginTop: -12,
        marginBottom: 3,
    },
    errorText: {
        color: 'red',
        fontSize: 14
    },
    borderWaring: {
        borderColor: 'red'
    },
    borderNomal: {
        borderColor: '#D6D6D6'
    },
    displayNone: {
        display: 'none'
    },
    displayFlex: {
        display:'flex'
    },
})

export default MyInput