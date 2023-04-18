import { useState } from 'react'
import {
    Text, 
    View,
    TouchableWithoutFeedback,
    SafeAreaView,
    Image,
    Alert
} from 'react-native'
import auth from '@react-native-firebase/auth'
import MyInput from '../../Component/MyInput/MyInput'
import MyButton from '../../Component/MyButton/MyButton'
import { img } from '../../access/image'

const ResetPasswordScreen =()=>{
    const [email, setEmail] = useState({
        email: '',
        isEmailError: false,
        error: '',
        isSuccess: false,
    })
    const forgotPassword=(email)=>{
        
        try {
            auth().sendPasswordResetEmail(email)
        }
        catch(error){
            alert(error)
        }
    }

    const checkEmailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const handleOnChangeEmail = (text) => {
        setEmail({...email, email: text ,isEmailError: false , })
    }

    const EmailValidate = ()=>{
        if(checkEmailValidate.test(email.email)){
            setEmail({...email, isEmailError: false})
        }
        else {
            setEmail({...email, isEmailError: true, error:'vui lòng nhập email vào!'})
        }
        
    }  

    const HandleResetPassword =()=>{
        if(email.email.length === 0){
            setEmail({...email, isEmailError: true, error:'vui lòng nhập email vào!'})
        }
        else if (isEmailError===false){
            forgotPassword(email.email)
            Alert.alert('Kiểm tra email của bạn, nhấp vào đường link và điền mật khẩu mới vào!')
        }


    }


    return (
        <SafeAreaView style={{flex: 1,backgroundColor: '#fcb614'}}>
            <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                <Image source={img.iconLock} style={{ marginBottom:'16%'}} />
                <Text style={{fontSize: 26, color:'#000', width: '70%', marginBottom:'14%', textAlign: 'center', fontWeight: 'bold'}}>Lấy lại mật khẩu</Text>
                <Text style={{fontSize: 14, color: '#000', width: 300, marginBottom: '2%'}}>Nhập email cần khôi phục mật khẩu</Text>
                <MyInput
                    value={email.email}
                    isError={email.isEmailError}
                    error={email.error}
                    placeholder="vui lòng nhập email"
                    onChangeText={text => handleOnChangeEmail(text)}
                    onBlur={()=> EmailValidate()}
                    iconHeader={img.iconEmailSmall}
                />
                <MyButton
                    onPress={()=>HandleResetPassword} 
                    props={{
                        widthBtn: 300,
                        heightBtn:50,
                        backgroundColorBtn: '#000',
                        fontSizeBtn: 18,
                        colorBtn: '#fff',
                        marginTop: '5%',
                        marginBottom: 30,
                    }}    
                >Lấy lại mật khẩu</MyButton>

                {/* <Text  style={{fontSize: 20, color: '#000', textAlign: 'center', width: '60%', marginBottom: '10%'}}>
                    Kiểm tra email của bạn, nhấp vào đường link và điền mật khẩu mới vào!
                </Text> */}
            </View>
        </SafeAreaView>
    )
}

export default ResetPasswordScreen