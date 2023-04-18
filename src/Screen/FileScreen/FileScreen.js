import {
    View,
    Text, 
    SafeAreaView,
    TouchableWithoutFeedback,
    Image,
    StyleSheet,
} from "react-native"
import Header from "../../Component/Header/Header"
import { img } from "../../access/image"
import { useState } from "react"
import ModalPage from '../../Component/ModalPage/ModalPage'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabTopNavigator from "../../Navigation/TabTopNavigator"


const FileScreen=() => {
    const [visible, setVisible] = useState(false)
    const handleTransferUser=(visible)=>{
        setVisible(visible)
    }
    return (
        <SafeAreaView style={{flex: 1}}>
            <Header handleTransferUser={handleTransferUser} />
            <View style={styles.WrapBody}>
                <TabTopNavigator screen ={'fileScreen'}/>
            </View>
            <ModalPage 
                visible={visible}
                props={{
                    heigthModal: 421
            }}> 
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableWithoutFeedback>
                        <View style={[styles.modalPage,{ borderTopWidth: 0}]}>
                            <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold'}}>Thông tin cá nhân</Text> 
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <View style={styles.modalPage}> 
                            <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold'}}>Nhận thưởng</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <View style={styles.modalPage}>
                            <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold'}}>Điều khoản</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <View style={styles.modalPage}>
                            <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold'}}>Đổi mật khẩu</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=> auth().signOut()}>
                        <View style={styles.modalPage}> 
                            <Text style={{ color: '#D11838', fontSize: 20, fontWeight: 'bold'}}>Đăng xuất</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=> setVisible(false)}>
                        <View style={[styles.modalPage, ]}>
                            <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold'}}>
                                Hủy
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </ModalPage>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    modalPage: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
        borderTopColor: '#ccc',
        borderTopWidth: 1
    },
    WrapBody: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})

export default FileScreen