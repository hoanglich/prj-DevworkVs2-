import {
    View,
    Image,
    SafeAreaView,
    TouchableWithoutFeedback,
    Text,
    StyleSheet,
} from 'react-native'
import { img } from '../../access/image'

const ListFile =()=>{
    return (
        <SafeAreaView style={{flex: 1, padding: 16}}>
            <View style={{backgroundColor: '#fff', padding: 16, borderRadius: 20, elevation: 5}}>
                <View style={[styles.wrapELe, {justifyContent: 'flex-start', marginTop: 0}]}>
                    <Image  source={img.imageCompany} style={{width: 60, height: 60, borderRadius: 50}}/>
                    <Text style={{color: '#000'}} style={{marginLeft: 10, color: '#000', fontWeight: 'bold', fontSize: 18}}>Hoàng Thế Lịch</Text>
                </View>
                <View style={styles.wrapELe}>
                    <Text style={{color: '#000'}}>Mức lương:</Text>
                    <View style={styles.wrapELe}>
                        <Image source={img.iconBagSmall}/>
                        <Text style={{color: '#000', marginLeft: 10}}>Dưới một năm</Text>
                    </View>
                    
                </View>
                <View style={styles.wrapELe}>
                    <View style={styles.wrapELe}>
                        <Image source={img.iconStaple} />
                        <Text style={{color: '#000', marginLeft: 10}}>1 tệp đính kèm</Text>
                    </View>
                    <View style={styles.wrapELe}>
                        <Image source={img.iconFlyPaper}/>
                        <Text style={{color: '#000', marginLeft: 10}}>2 lượt ứng viên</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapELe: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
    }
})

export default ListFile