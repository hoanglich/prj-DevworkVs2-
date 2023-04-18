import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ListApplied from '../Component/ListApplied/ListApplied';
import ListFile from '../Component/ListFile/ListFile';


const Tab = createMaterialTopTabNavigator();

const TabTopNavigator=({screen})=> {
  console.log(screen)
  if (screen=='fileScreen') {
    return (
        <Tab.Navigator
          screenOptions={{
              tabBarContentContainerStyle: {
                  justifyContent: 'space-around',
                  alignItems: 'center',
              },
              tabBarLabelStyle: { 
                  textTransform: 'none',
                  fontSize: 14,
                  fontWeight:'bold',
                  width: '100%',
              },
              tabBarIndicatorStyle: {
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomColor: '#fcb614',
                  borderBottomWidth: 2,
              },
              tabBarActiveTintColor: '#fcb614',
              tabBarInactiveTintColor: '#000',
          }}
        >
          <Tab.Screen name="My List" component={ListFile} />
          <Tab.Screen name="List Applied" component={ListApplied} />
        </Tab.Navigator>
    );
  }
}

export default TabTopNavigator