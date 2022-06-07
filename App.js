import React from "react"
import Ionicon from "react-native-vector-icons/Ionicons"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./src/views/Home";
import Search from "./src/views/navigations/Search";
import DetailRecipe from "./src/views/DetailRecipe";
import SplashScreen from "./src/views/SplashScreen";
import WishList from "./src/views/navigations/WishList";
import Setting from "./src/views/navigations/Setting";
import SeeAll from "./src/views/SeeAll";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailRecipe" component={DetailRecipe} />
      <Stack.Screen name="SeeAll" component={SeeAll} />
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
                <Ionicon name="home-outline" size={28} color={focused ? '#FAC213' : '#BDBDBD'} />
              );
            },
            headerShown: false
          }} />
      <Tab.Screen name="Search" component={Search} options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicon name="search-outline" size={28} color={focused ? '#FAC213' : '#BDBDBD'} />
              );
            },
            headerShown: false
          }} />
      <Tab.Screen name="WishList" component={WishList} options={{
        tabBarIcon: ({ focused }) => {
          return (
            <Ionicon name="bookmark-outline" size={28} color={focused ? '#FAC213' : '#BDBDBD'} />
            );
          },
          headerShown: false
        }} />
        <Tab.Screen name="Setting" component={Setting} options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <Ionicon name="settings-outline" size={28} color={focused ? '#FAC213' : '#BDBDBD'} />
                );
              },
              headerShown: false
            }} />
    </Tab.Navigator>
  )
}