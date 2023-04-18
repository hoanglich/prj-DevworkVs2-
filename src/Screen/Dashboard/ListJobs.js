import {
    View,
    Text, 
    SafeAreaView,
    TouchableWithoutFeedback,
    Image,
    ScrollView,
    StyleSheet,
} from "react-native"
import { img } from "../../access/image"

const Jobs =({data})=>{
    return (
        <ScrollView>
            <View style={styles.wrapDashboard}>
            {data.map((item, index)=>{
                return (
                    <TouchableWithoutFeedback key={item.id}>
                        <View style={styles.ListJobs}>
                            {/* headerItem */}
                            <View style={styles.ListHeader}>
                                <View style={styles.NameCompany}>
                                    <Image source={item.imageCompany==='' ? img.imageCompany : img.imageCompany} style={{width: 60, height:60}}  />
                                    <View style={{marginLeft: 4, width: '70%'}}>
                                        <Text  style={[styles.nameJob]}>{item.name}</Text>
                                        <Text numberOfLines={1}  style={{color: '#000'}}>{item.company.name}</Text>
                                    </View>
                                </View>
                                <Image source={item.favourite === false ? img.iconUnFavourite : img.iconFavourite} />
                            </View>
                            
                            {/* bodyItem */}
                            <View style={styles.listBody}>
                                <View style ={{flex: 1}}>
                                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: '4%'}}>
                                        <Text style={[styles.bouns,{flex: 1}]}>
                                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.service.bonus_basic)}/người
                                        </Text>
                                        <Text style={[styles.textWrapInfoJob,{flex: 1, paddingLeft: 10}]}>{item.service.date_warranty}</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <ScrollView horizontal style={{width: '100%' , height:40, flex: 1}}>
                                            {item.skills.map((skill, index)=>{
                                                return (
                                                        <View style={{justifyContent: 'center', alignItems:'center', }} key={skill.id}>
                                                            <Text style={styles.listSkill}>{skill.name}</Text>
                                                        </View>
                                                )
                                            })}
                                        </ScrollView>
                                        <View style={[styles.wrapInfoJob, { paddingLeft: 10}]}>
                                            <Image source={img.iconInterviewSmall} />
                                            <Text style={styles.textWrapInfoJob}>{item.expired_at}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: '1.5%'}}>
                                        <View style={[styles.wrapInfoJob]}>
                                            <Image source={img.iconMoneySmall} />
                                            <Text style={styles.textWrapInfoJob}>
                                                {item.salary.min/1000000} triệu - {item.salary.max/1000000} triệu
                                            </Text>
                                        </View>
                                        <View style={[styles.wrapInfoJob, { paddingLeft: 10}]}>
                                            <Image source={img.iconLocationSmall}  />
                                            <Text style={styles.textWrapInfoJob}>{item.company.addresses.province_name}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: '1.5%'}}>
                                        <View style={ [styles.wrapInfoJob]}>
                                            <Image source={img.iconCheckSmall} />
                                            <Text style={styles.textWrapInfoJob}>{item.status.value}</Text>
                                        </View>
                                        <View style={[styles.wrapInfoJob, { paddingLeft: 10}]}>
                                            <Image source={img.iconBagSmall} />
                                            <Text style={styles.textWrapInfoJob}>{item.experience.value}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                )
            })}
            </View>
        </ScrollView>
        
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
        elevation: 5,
    },
    ListHeader: {
        flexDirection: 'row', 
        justifyContent:'space-between', 
        alignItems: 'center',
        width: '100%'
    },
    NameCompany: {
        flexDirection: 'row', 
        justifyContent:'space-between', 
        alignItems: 'center',
        width: '95%'
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
    
})

export default Jobs