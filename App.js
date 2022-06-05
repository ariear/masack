import React from "react"
import Ionicon from "react-native-vector-icons/Ionicons"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./src/views/Home";
import Search from "./src/views/navigations/Search";
import DetailRecipe from "./src/views/DetailRecipe";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailRecipe" component={DetailRecipe} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const HomeScreen = () => {
  return (
    <Tab.Navigator screenOptions={{ 
        headerShown: false,
        tabBarShowLabel:false,
        tabBarStyle: {
          height: 60
        } 
      }}>
      <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicon name="home-outline" size={28} color={focused ? '#212121' : '#BDBDBD'} />
              );
            },
            headerShown: false
          }} />
      <Tab.Screen name="Search" component={Search} options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicon name="search-outline" size={28} color={focused ? '#212121' : '#BDBDBD'} />
              );
            },
            headerShown: false
          }} />
    </Tab.Navigator>
  )
}