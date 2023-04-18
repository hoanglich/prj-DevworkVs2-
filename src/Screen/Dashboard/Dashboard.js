import {
    View,
    Text, 
    SafeAreaView,
    TouchableWithoutFeedback,
    Image,
    ScrollView,
    StyleSheet,
} from "react-native"
import Header from "../../Component/Header/Header"
import { useState } from "react"
import { img } from "../../access/image"
import ModalPage from "../../Component/ModalPage/ModalPage"
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import ListJobs from "../../Api/ListJobApi"

// đưa phần list job này ra một component riêng 

const DashboardScreen=() => {
    const [visible, setVisible] = useState(false)
    const [Jobs, setJobs] = useState([
        {
            nameJob: 'Lập trình viên mobile',
            nameCompany: 'Devwork client',
            salary: {
                min: 5000000,
                max: 7000000
            },
            skills: ['Reacjs', 'HTML', 'JavaScript', 'React native'],
            dateWarranty: '90 ngày',
            bonus: 21000000,
            status: 'chưa nộp hồ sơ',
            location: 'Hà Nội',
            experience: '3 năm',
            expired: '30/04/2024',
            favourite:  false,
            imageCompany: '',
        }
    ])
    const handleTransferUser=(visible)=>{
        setVisible(visible)
    }

    return (
       <SafeAreaView>   
            <Header handleTransferUser={handleTransferUser}/>
            <ListJobs/>
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
    wrapDashboard: {
        backgroundColor: '#f4f5f7',
        padding: '4%',

    },
    ListJobs: {
        marginBottom: '4%',
        padding: '4%', 
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5
    },
    ListHeader: {
        flexDirection: 'row', 
        justifyContent:'space-between', 
        alignItems: 'center' 
    },
    nameJob: {
        fontSize: 16, 
        fontWeight: 'bold', 
        color: '#000'
    },
    listBody: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        width: '100%' 
    },
    bouns: {
        fontSize:16, 
        color: '#D11838', 
        fontWeight: 'bold',
    },
    listSkill: {
        borderRadius: 50, 
        backgroundColor: '#e5e5e5', 
        marginRight: 5,  
        paddingVertical: 4, 
        paddingHorizontal: 6 , 
        fontSize: 11, 
        minWidth:40, 
        justifyContent: 'center', 
        alignItems:'center', 
        color:'#000'
    },
    wrapInfoJob: {
        flexDirection: 'row', 
        alignItems: 'center',
        flex: 1
    },
    textWrapInfoJob: { 
        color: '#000', 
        marginLeft: 6
    },
    modalPage: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
        borderTopColor: '#ccc',
        borderTopWidth: 1
    }

})

export default DashboardScreen