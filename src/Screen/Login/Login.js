import {
    Image,
    Text, 
    SafeAreaView,
    View,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native'
import {img} from '../../access/image'
import MyInput from '../../Component/MyInput/MyInput'
import {useState} from 'react'
import MyButton from '../../Component/MyButton/MyButton'
import auth from '@react-native-firebase/auth'
import ModalPage from '../../Component/ModalPage/ModalPage'

function Login({navigation}){
    const [inputs, setInputs] = useState({
        Email: '',
        password: '',
        isEmailError: false,
        isUserPassword: false,
        errorEmail: '',
        errorPassword: '',
        errorLogin: false,
    })

    const [isEye, setIsEye] = useState(true)

    // handle event appear/disappear password
    const handleToggleAppear = () => {
        setIsEye(isEye == true ? false : true)
    }
    
    // handle event onChange textinput
    const handleOnChangeEmail = (text, input) => {
        setInputs({...inputs, [input]: text ,isEmailError: false , })
    }
    const handleOnChangePassword = (text, input) => {
        setInputs({...inputs, [input]: text ,isUserPassword: false,})
    }

    const checkEmailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // handle event check validate Email
    const EmailValidate = ()=>{
        if(checkEmailValidate.test(inputs.Email)){
            setInputs({...inputs, isEmailError: false, errorLogin: false})
        }
        else {
            
            setInputs({...inputs, isEmailError: true, errorEmail:'vui lòng nhập email vào!'})
        }
        
    }  

    // handle event check validate password
    let checkSpecialCharacters = /([!-\/:-@[-`{-~])/gm; 
    let checkLetters = /[a-zA-z]/gm;
    let checkNumber = /[0-9]/gm;
    
    const userPasswordValidate =()=> {
        if(inputs.password.length > 6){
            if (checkSpecialCharacters.test(inputs.password) && checkLetters.test(inputs.password) && checkNumber.test(inputs.password)) {
                setInputs({...inputs, isUserPassword: false, errorLogin: false})
            } 
            else {
                setInputs({...inputs, isUserPassword: true, errorPassword: 'mật khẩu phải bao gồm chữ, số và ký tự đặc biệt!' })
            }
        }
        else {
                setInputs({...inputs, isUserPassword:true, errorPassword: 'mật khẩu phải trên 6 ký tự!' })
        }
    }
    
    // turn off/ turn on modal
    const hanldeModal = (modal)=>{
        setInputs({...inputs, errorLogin: modal})
    }
    // login

    LoginUser = async(email,password)=>{
        console.log('login',email, password)
        try{
            await auth().signInWithEmailAndPassword(email, password)
        }
        catch (error){
            console.log(error)
            setInputs({...inputs, errorLogin: true})
        }
    }

    const handleLogin =(email, password)=>{
        if (inputs.Email === '' || inputs.password===''){
            if(inputs.Email === ''){
                setInputs({...inputs, isEmailError: true, errorEmail:'vui lòng nhập email vào!'})
            }
            else if(inputs.password===''){
                setInputs({...inputs, isUserPassword: true, errorPassword:'vui lòng nhập password vào!'})
            }
        }
        else if(inputs.isEmailError=== false && inputs.isUserPassword === false){
            console.log(email, password)
            LoginUser(email, password)
        }
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <View style={{alignItems: 'center', flex: 1, marginTop: '30%'}}>
                <Image source={img.logoTetx} style={{width:200, height: 36}} />
                <View style={{justifyContent: 'center', alignItems:'center', marginTop:'30%',}}>
                    <MyInput
                        value={inputs.Email}
                        isError={inputs.isEmailError}
                        error={inputs.errorEmail}
                        placeholder="vui lòng nhập email"
                        returnKeyType='next'
                        onChangeText={text => handleOnChangeEmail(text, 'Email')}
                        onBlur={()=> EmailValidate()}
                        iconHeader={img.iconEmailSmall}
                    />
                    <MyInput
                        value={inputs.password}
                        isError = {inputs.isUserPassword}
                        error= {inputs.errorPassword}
                        iconHeader={img.iconLocked}
                        placeholder="Nhập mật khẩu"
                        style={styles.input}
                        secureTextEntry={isEye}
                        visible-password='password'
                        returnKeyType="go"
                        onChangeText={text => handleOnChangePassword(text, 'password')}
                        onBlur={()=> userPasswordValidate()}
                    >
                        <TouchableWithoutFeedback
                            onPress={handleToggleAppear}
                        >
                            <Image
                                source={isEye == true ? img.iconEyelock : img.iconEyeUnlock} style={{marginRight: 10}}
                            ></Image>
                        </TouchableWithoutFeedback>
                    </MyInput>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between',width: 300, marginTop: 10}}>
                        <TouchableWithoutFeedback onPress={()=>navigation.navigate('ResetPassword')}>
                            <Text style={{color: '#000'}}>Quên mật khẩu ?</Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback  onPress={()=>navigation.navigate('Register')}>
                            <Text style={{color: '#000'}}>Đăng ký</Text>
                        </TouchableWithoutFeedback>
                    </View>

                    <MyButton 
                        onPress={()=>handleLogin(inputs.Email, inputs.password)} 
                        props={{
                            widthBtn: 300,
                            heightBtn:50,
                            backgroundColorBtn: '#fcb614',
                            fontSizeBtn: 18,
                            colorBtn: '#000',
                            marginTop: '25%',
                            marginBottom: 30,
                        }}    
                    >Đăng nhập</MyButton>
                </View>

                <View>
                    <View style={{flexDirection: 'row', width: 300, justifyContent: 'space-around', alignItems: 'center'}}>
                        <View style={{width: '25%', borderTopWidth: 1, borderColor: '#ccc'}}></View>
                        <Text style={{color: '#ccc'}}>Hoặc đăng nhập qua</Text>
                        <View style={{width: '25%', borderTopWidth: 1, borderColor: '#ccc'}}></View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'5%', marginBottom: '5%'}}>
                        <TouchableWithoutFeedback onPress={()=>console.log('dang nhap gg')} style={{width:40, height:40}}>
                            <View style={{width:50, height:50, borderColor: '#ccc', borderWidth: 1, justifyContent: 'center', alignItems:'center', borderRadius: 10, marginLeft: 10}}>
                                <Image source={img.iconGoogle} />
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={()=>console.log('dang nhap fb')}>
                            <View style={{width:50, height:50, borderColor: '#ccc', borderWidth: 1, justifyContent: 'center', alignItems:'center', borderRadius: 10, marginLeft: 10}}>
                                <Image source={img.iconFacebook} />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
            <ModalPage
                visible={inputs.errorLogin}
                props ={{heightModal: 300,}}
                hanldeModal={hanldeModal}
            >   
                <View style={{justifyContent:'center', alignItems:'center', height:'100%', paddingHorizontal: '10%'}}>
                    <Image source={img.iconError} style={{height:40, width:40, marginBottom: '5%'}} />
                    <Text style={{color: '#000', fontSize: 24, marginBottom: '5%'}}>Sai nhập khẩu</Text>
                    <Text style={{textAlign: 'center', color: '#000', fontSize: 18}}>Mật khẩu bạn vừa nhập chưa chính xác. Vui lòng nhập lại</Text>
                    <MyButton 
                        onPress={()=> setInputs({...inputs, errorLogin: false})}
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

const styles = StyleSheet.create({

})

export default Login