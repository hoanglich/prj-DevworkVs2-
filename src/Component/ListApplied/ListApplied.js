import {
    View,
    Image,
    SafeAreaView,
    TouchableWithoutFeedback,
    Text,
    StyleSheet,
} from 'react-native'
import { img } from '../../access/image'

const ListApplied =()=>{
    return (
        <SafeAreaView style={{flex: 1, padding: 16}}>
        <View style={{
            backgroundColor: '#fff', 
            padding: 16, 
            borderRadius: 20,
            elevation: 5,
        }}>
            <View style={[styles.wrapELe, {justifyContent: 'flex-start', marginTop: 0}]}>
                <Image  source={img.imageCompany} style={{width: 60, height: 60, borderRadius: 50}}/>
                <View>
                    <Text style={{color: '#000'}} style={{marginLeft: 10, color: '#000', fontWeight: 'bold', fontSize: 18}}>Hoàng Thế Lịch</Text>
                    <View style={{flexDirection: 'row',marginLeft: 10,marginTop: 4,alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={img.iconClock}/>
                        <View style={{flexDirection: 'row', marginLeft:4, }}>
                            <Text>14:41</Text>
                            <Text> 23/07/2021</Text>
                        </View>
                    </View>
                    <View style={{marginLeft: 10,marginTop: 4,backgroundColor :'#ccc', paddingHorizontal: 10, width: 100, justifyContent: 'center', alignItems:'center', borderRadius: 10}}>
                        <Text style={{ }}>Chờ duyệt</Text>
                    </View>
                </View>
            </View>
            <View style={styles.wrapELe}>
                <Text style={{color: '#999'}}>Ứng tuyển:</Text>
                <Text numberOfLines={1} style={{color: '#000', width: 225 }}>Telesale hỗ trợ ứng viên/HR freelance</Text>
            </View>
            <View style={styles.wrapELe}>
                <Text style={{color: '#999' }}>Công ty: </Text>
                <Text  numberOfLines={1} style={{color: '#000', width: 225 }}>Công ty cổ phần Phần mềm Devwork </Text>
            </View>
            <View style={[styles.wrapELe]}>
                <Text style={{color: '#999' }}>Thưởng: </Text>
                <Text style={{color: '#D11838', fontWeight: 'bold' }}>0 đ</Text>
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

export default ListApplied