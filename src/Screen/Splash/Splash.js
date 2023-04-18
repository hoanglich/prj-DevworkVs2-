import {
    Image,
    Text, 
    SafeAreaView,
    View,
    ActivityIndicator,
} from 'react-native'
import {img} from '../../access/image'

function Splash({navigation}){
    setTimeout(()=>{navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      })},1000)
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{backgroundColor: '#fcb614', flex: 1, justifyContent: 'center', alignItems: 'center'}} >
                <Image style={{width:100, height: 100}} source={img.logo}/>
                <View>
                    <ActivityIndicator size='large'/>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Splash