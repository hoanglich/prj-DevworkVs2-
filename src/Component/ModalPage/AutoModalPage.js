import {
    Text,
    View,
    SafeAreaView,
    Animated,
    StyleSheet,
    Modal,
    TouchableWithoutFeedback,
} from 'react-native'
import { useState, useEffect, useRef } from 'react'

const AutoModalPage = ({props, visible, children,hanldeModal })=>{
    const [showModal, setShowModal] = useState(visible);
    const scaleValue = useRef(new Animated.Value(0)).current;
    const {heightModal,...other} = props
    useEffect(()=>{
        toggleModal()
    },[visible])
    const toggleModal=()=>{
        if(visible){
            setShowModal(true);
            Animated.spring(scaleValue,{
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();

            setTimeout(()=> 
                {setShowModal(false)
                Animated.timing(scaleValue,{
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }).start()}
            , 800);
            
        }
    }
    
    return (
        <Modal  transparent visible={showModal}>
            <TouchableWithoutFeedback >
                <View style={styles.modalBackgorund}>
                    <Animated.View
                        style={[styles.modalContainer, {transform: [{scale: scaleValue}], height: heightModal}]}
                    >
                        {children}
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}
const styles= StyleSheet.create({
    modalBackgorund: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        width: 343,
        height: 300,
        backgroundColor: '#fff',
        borderRadius: 20,
    }
})
export default AutoModalPage;