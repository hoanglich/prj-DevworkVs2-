import Splash from "../Screen/Splash/Splash";
import Login from "../Screen/Login/Login"
import { createStackNavigator,CardStyleInterpolators } from "@react-navigation/stack";
import React, {useState, useEffect} from "react";
import DashboardScreen from "../Screen/Dashboard/Dashboard"
import ApplieScreen from "../Screen/ApplieScreen/ApplieScreen"
import FileScreen from "../Screen/FileScreen/FileScreen"
import InterviewScreen from '../Screen/InterviewScreen/InterviewScreen'
import SettingScreen from "../Screen/SettingScreen/SettingScreen"
import TabDashboard from "./TabBottomNavigation";
import auth from '@react-native-firebase/auth'
import RegisterScreen from "../Screen/RegisterScreen/RegisterScreen";
import ResetPasswordScreen from "../Screen/ResetPasswordScreen/ResetPasswordScreen";
import ListApplied from "../Component/ListApplied/ListApplied";
import ListFile from "../Component/ListFile/ListFile";

const Stack = createStackNavigator()
function MyStack(){

    const [initalizing, setInitalizing] = useState(true);
    const [user, setUser] = useState()
    function onAuthStateChanged(user){
        setUser(user)
        if(initalizing) setInitalizing(false)
    }
    
    useEffect(()=>{
        const subscriber= auth().onAuthStateChanged(onAuthStateChanged)
        return subscriber;
    },[]);

    if(initalizing) return null;
    if(!user) {
        return (
            <Stack.Navigator
                screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}>
                <Stack.Screen 
                    name='Splash'
                    component={Splash}
                />
                <Stack.Screen 
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                />
                <Stack.Screen 
                    name="ResetPassword"
                    component={ResetPasswordScreen}
                />
            </Stack.Navigator>
        )
    }

    return (
        <Stack.Navigator
            screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
            <Stack.Screen  name="TabDashboard" component={TabDashboard} />
            <Stack.Screen  name='Jobs' component={DashboardScreen} />
            <Stack.Screen  name='Files' component={FileScreen} />
            <Stack.Screen  name='Applied' component={ApplieScreen} />
            <Stack.Screen  name="Interview" component={InterviewScreen} />
            <Stack.Screen  name="Setting" component={SettingScreen} />
            <Stack.Screen name='List Applied' component={ListApplied}/>
            <Stack.Screen name='My List' component={ListFile}/>

        </Stack.Navigator>
    )
}

export default MyStack