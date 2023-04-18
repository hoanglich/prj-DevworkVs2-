import { useState } from 'react'
import {
    Text, 
    View,
    TouchableWithoutFeedback,
    SafeAreaView,
    Image,
    Alert
} from 'react-native'
import { img } from '../../access/image'
import MyButton from '../../Component/MyButton/MyButton'
import MyInput from '../../Component/MyInput/MyInput'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import ModalPage from '../../Component/ModalPage/ModalPage'

// firestore().collection('userInfomation').doc('846dynY0L9wn9NQgZmnJ').delete()

const RegisterScreen =()=>{
    const [visible, setVisible] = useState(false)
    const ref= firestore().collection('userInfomation')
    const [register, setRegister] = useState({
        userName: '',
        password: '',
        reEnterpassword: '',
        email: '',
        errorUserName: '',
        errorPassword: '',
        errorUserName: '',
        errorEmail: '',
        errorReEnterPassword: '',
        isUserName: false,
        isPassword: false,
        isEmail: false,
        isReEnterpassword: false,
        isRegistration: false,
        errorRegistration: '',
    })

    const [isEyes, setIsEyes] = useState({
        isEye1: true,
        isEye2: true,
    })

    const hanldeModal = (modal)=>{
        setInputs({...inputs, errorLogin: modal})
    }

    // handler display password 

    const handleToggleAppear = (input)=>{
        console.log(input)
        if(input==='isEye1') {
            const isEye = isEyes.isEye1 === true ? false: true
            setIsEyes({
                ...isEyes, 
                isEye1: isEye
            })
        }
        else if(input==='isEye2') {
            const isEye = isEyes.isEye2 === true ? false: true
            setIsEyes({
                ...isEyes, 
                isEye2: isEye
            })
        }
    }

    // check validate 
    const checkEmailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let checkSpecialCharacters = /([!-\/:-@[-`{-~])/gm; 
    let checkLetters = /[a-zA-z]/gm;
    let checkNumber = /[0-9]/gm;

    // hanlde UserName
    const handleOnChangeUserName=(text, input)=>{
        setRegister({...register, [input] :text, isUserName: false})
    }

    const CheckUserName =()=>{
        if(register.userName.length=== 0 ){
            setRegister({...register, isUserName: true, errorUserName: 'vui lòng nhập tên người dùng vào!' })
        }
    }

    // hanlde Email
    const hanldeOnChangeEmail=(text, input)=>{
        setRegister({...register, [input] :text, isEmail: false, isRegistration: false})
    }


    const EmailValidate = ()=>{
    
        if(checkEmailValidate.test(register.email)){
            setRegister({...register, isEmail: false})
        }
        else {
            
            setRegister({...register, isEmail: true, errorEmail:'vui lòng nhập email vào!'})
        }
            
    }

    // hanlde password

    const handleOnChangePassword=(text, input)=>{
        setRegister({...register, [input]:text, isPassword: false})
    }

    const PasswordValidate =()=> {
        if(register.password.length > 6){
            if (checkSpecialCharacters.test(register.password) && checkLetters.test(register.password) && checkNumber.test(register.password)) {
                setRegister({...register, isPassword: false, errorLogin: false})
            } 
            else {
                setRegister({...register, isPassword: true, errorPassword: 'mật khẩu phải bao gồm chữ, số và ký tự đặc biệt!' })
            }
        }
        else {
                setRegister({...register, isPassword:true, errorPassword: 'mật khẩu phải trên 6 ký tự!' })
        }
    }
    
    // hanlde Re-Enter password

    const handleOnChangeReEnterPassword = (text, input)=>{
        setRegister({...register, [input] :text, isReEnterpassword: false})
    }

    const ReEnterPassword=()=>{
        if(register.password !== register.reEnterpassword){
            setRegister({...register, isReEnterpassword: true, errorReEnterPassword: 'mật khẩu nhập lại không đúng!'})
        }
    }

    // register 

    RegistrationUser = async(email, password ) => {
        try {
            await auth().createUserWithEmailAndPassword(email, password)
        }
        catch(error) {
            setRegister({
                ...register, isRegistration: true, errorRegistration: 'email đã được sử dùng ở tài khoản khác!'
            })
        }
    }

    async function addNewUser(){
        await ref.add({
            Email: register.email,
            nameUser: register.userName
        });
    }

    const handleRegistration =(email, password )=>{
        if (register.email === '' || register.password===''){
            if(register.email === ''){
                setRegister({...register, isEmail: true, errorEmail:'vui lòng nhập email vào!'})
            }
            else if(register.password===''){
                setRegister({...register, isPassword: true, errorPassword:'vui lòng nhập password vào!'})
            }
        }
        else if(register.isEmail=== false && register.isPassword === false){
            
            RegistrationUser(email, password)
            if(register.isRegistration===false){
                Alert.alert('đăng ký thành công')
                addNewUser()
            }
            else {
                setVisible(true)
            }
        }
    }
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                <Image source = {img.logoDevwork} style={{height: 150, width: 184}}/>
                <View style={{marginTop: '20%'}}>
                    <MyInput
                        value={register.userName}
                        iconHeader={img.iconUserNoActive}
                        isError={register.isUserName}
                        error={register.errorUserName}
                        placeholder="Tên người dùng"
                        returnKeyType="next"
                        onChangeText={text => handleOnChangeUserName(text, 'userName')}
                        onBlur={()=> CheckUserName()}
                    />
                    <MyInput
                        value={register.email}
                        iconHeader={img.iconEmailSmall}
                        placeholder="Nhập email"
                        keyboardType='email-address'
                        returnKeyType="next"
                        isError={register.isEmail}
                        error={register.errorEmail}
                        onChangeText={text => hanldeOnChangeEmail(text, 'email')}
                        onBlur={()=> EmailValidate()}
                    />
                    <MyInput
                        value={register.password}
                        isError = {register.isPassword}
                        error= {register.errorPassword}
                        iconHeader={img.iconLocked}
                        placeholder="Nhập mật khẩu"
                        secureTextEntry={isEyes.isEye1}
                        visible-password='password'
                        returnKeyType="next"
                        onChangeText={text => handleOnChangePassword(text, 'password')}
                        onBlur={PasswordValidate}
                    >
                        <TouchableWithoutFeedback
                            onPress={()=>handleToggleAppear('isEye1')}
                        >
                            <Image
                                source={isEyes.isEye1 == true ?  img.iconEyeUnlock : img.iconEyelock} 
                                style={{marginRight: '5%'}}
                            ></Image>
                        </TouchableWithoutFeedback>
                    </MyInput>
                    <MyInput
                        value={register.reEnterpassword}
                        isError = {register.isReEnterpassword}
                        error= {register.errorReEnterPassword}
                        iconHeader={img.iconLocked}
                        placeholder="Nhập lại mật khẩu"
                        secureTextEntry={isEyes.isEye2}
                        visible-password='password'
                        returnKeyType="next"
                        onChangeText={(text )=> handleOnChangeReEnterPassword(text, 'reEnterpassword')}
                        onBlur={ReEnterPassword}
                    >
                        <TouchableWithoutFeedback
                            onPress={()=>handleToggleAppear('isEye2')}
                        >
                            <Image
                                source={isEyes.isEye2 == true ?  img.iconEyeUnlock : img.iconEyelock} 
                                style={{marginRight: '5%'}}
                            ></Image>
                        </TouchableWithoutFeedback>
                    </MyInput>
                    <MyButton
                        onPress={()=>handleRegistration(register.email, register.password)} 
                        props={{
                            widthBtn: 300,
                            heightBtn:50,
                            backgroundColorBtn: '#fcb614',
                            fontSizeBtn: 18,
                            colorBtn: '#000',
                            marginTop: '20%',
                            marginBottom: 30,
                        }}    
                    >
                        Đăng ký
                    </MyButton>
                </View>
            </View>
            <ModalPage
                visible={visible}
                props={{
                    heightModal: 300
                }}
                hanldeModal={hanldeModal}
            >
                <View style={{justifyContent:'center', alignItems:'center', height:'100%', paddingHorizontal: '10%'}}>
                    <Image source={img.iconError} style={{height:40, width:40, marginBottom: '5%'}} />
                    <Text style={{textAlign: 'center', color: '#000', fontSize: 18}}>{register.errorRegistration}</Text>
                    <MyButton 
                        onPress={()=> setVisible(false)}
                        props={{
                            widthBtn: 300,
                            heightBtn:50,
                            backgroundColorBtn: '#fcb614',
                            fontSizeBtn: 18,
                            colorBtn: '#000',
                            marginTop: '5%',
                            marginBottom: 30,
                        }}
                    >Nhập lại</MyButton>
                </View>
            </ModalPage>
        </SafeAreaView>
    )
}

export default RegisterScreen