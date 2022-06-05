import { StackActions } from "@react-navigation/native";
import React, { useEffect } from "react"
import { StatusBar, Text, View } from "react-native"

const SplashScreen = ({navigation}) => {

    useEffect(() => {
      setTimeout(() => {
          navigation.dispatch(StackActions.replace('HomeScreen'))
      }, 1000);
    }, [])
    

    return (
        <View style={{ 
                flex: 1, 
                backgroundColor: '#FAC213',
                justifyContent: 'center',
                alignItems: 'center' }}>
            <StatusBar backgroundColor="#FAC213" />
            <Text style={{ 
                fontFamily: 'Poppins-SemiBold',
                fontSize: 30,
                color: '#000'
             }}>Masack</Text>
        </View>
    )
}

export default SplashScreen