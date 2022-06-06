import React, { useEffect, useState } from "react"
import { Text, TextInput, TouchableWithoutFeedback, View } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';

const PopUpName = (props) => {
    const [inputName,setInputName] = useState('')

    const insertName = async () => {
        try {
            await AsyncStorage.setItem('name', inputName)
            props.setIsPop(false)
        } catch (e) {
            // saving error
        }
    }

    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('name')
          if(value !== null) {
            setInputName(value)
          }
        } catch(e) {
          // error reading value
        }
      }

    useEffect(() => {
      getData()
    }, [])
    

    return (
        <View style={{ 
            width: '100%',
            height: '100%',
            paddingTop: 60,
            position: 'absolute',
            alignItems: 'center'
         }}>
        <TouchableWithoutFeedback onPress={() => props.setIsPop(false)}>
        <View style={{
            position: 'absolute',
            zIndex: 20,
            width: '100%',
            height: '100%'
         }}>
        </View>
        </TouchableWithoutFeedback>
        <View style={{ 
            width: '100%',
            padding: 20,
            backgroundColor: '#fff',
            position: 'relative',
            zIndex: 30,
            elevation: 2,
            borderRadius: 15
         }}>
             <TextInput 
                placeholder="Masukkan namamu"
                onChangeText={(input) => setInputName(input)} 
                value={inputName}
                onSubmitEditing={() => insertName()}
                style={{ 
                 borderWidth: 1,
                 paddingHorizontal: 10,
                 borderRadius: 1,
                 borderRadius: 10
              }} />
        </View>
        </View>
    )
}

export default PopUpName