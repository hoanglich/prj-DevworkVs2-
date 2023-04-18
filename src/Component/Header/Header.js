import { useState } from 'react'
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableWithoutFeedback,
    TextInput,
} from 'react-native'
import { img } from '../../access/image'
import MyInput from '../MyInput/MyInput'

const Header =({handleTransferUser})=>{

    return (
        <SafeAreaView style={{backgroundColor: '#fff'}}>
            <View style={{
                flexDirection: 'row', justifyContent: 'space-between', height: 70, alignItems:'center', marginHorizontal: '3%', elevation: 5
            }}>
                <TouchableWithoutFeedback onPress={()=> handleTransferUser(true)}>
                    <Image source={img.imageUser} style={{width:40, height:40, }}/>
                </TouchableWithoutFeedback>
                <View style={{backgroundColor: "#ebecee", flexDirection: 'row',flex: 1, justifyContent: 'space-between', alignItems:'center', marginHorizontal:16, borderRadius:40, height: 40, paddingHorizontal:14}}>
                    <TextInput
                         placeholder="Search job"
                         style={{color: '#aaacad'}}
                    
                    />
                    <Image source={img.iconSearch}  style={{}}/>
                </View>
                <TouchableWithoutFeedback>
                    <Image source={img.iconRing} />
                </TouchableWithoutFeedback>
            </View>
        </SafeAreaView>
    )
}

export default Header