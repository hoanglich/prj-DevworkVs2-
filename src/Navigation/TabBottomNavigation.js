import {
    View,
    Text, 
    SafeAreaView,
    Image,
} from "react-native"
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { img } from "../access/image"
import DashboardScreen from "../Screen/Dashboard/Dashboard"
import ApplieScreen from "../Screen/ApplieScreen/ApplieScreen"
import FileScreen from "../Screen/FileScreen/FileScreen"
import InterviewScreen from '../Screen/InterviewScreen/InterviewScreen'
import SettingScreen from "../Screen/SettingScreen/SettingScreen"

const Tab = createBottomTabNavigator()
const TabDashboard = ()=> {
    return (
        <Tab.Navigator
            screenOptions={
                
              ({ route }) => ({
              tabBarIcon: ({ focused }) => {
                let iconName
                if (route.name === 'Jobs') {
                  iconName = focused
                    ? img.iconDashboardActive
                    : img.iconDashboardNoActive;
                } else if (route.name === 'Files') {
                  iconName = focused ?  img.iconUserActive :img.iconUserNoActive ;
                }
                else if (route.name === 'Applied') {
                  iconName = focused ?  img.iconHeartActive :img.iconHeartUnActive ;
                }
                else if (route.name === 'Interview') {
                  iconName = focused ?  img.iconInterviewActive : img.iconInterviewunActive ;
                }
                else if (route.name === 'Setting') {
                  iconName = focused ?  img.iconSettingActive : img.iconSettingunActive ;
                }
                // You can return any component that you like here!
                return <Image source={iconName}  />;
              },
              tabBarActiveTintColor: '#006013',
              tabBarInactiveTintColor: '#797979',
              tabBarIconStyle: {
                marginTop: 16,
              },
              tabBarStyle: {
                height: 70,
              },
              tabBarLabelStyle: {
                fontSize: 14,
                marginBottom: 9,

              }
              
            })}
            backBehavior={'firstRoute'}
          >
            <Tab.Screen options={{headerShown: false}} name='Jobs' component={DashboardScreen} />
            <Tab.Screen options={{headerShown: false}} name='Files' component={FileScreen} />
            <Tab.Screen options={{headerShown: false}} name='Applied' component={ApplieScreen} />
            <Tab.Screen options={{headerShown: false}} name='Interview' component={InterviewScreen} />
            <Tab.Screen options={{headerShown: false}} name='Setting' component={SettingScreen} />
          </Tab.Navigator>
    )
}

export default TabDashboard