import React from "react"
import { 
    View,
    TouchableWithoutFeedback,
    TextInput } from "react-native"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

const ToSearch = (props) => {
    return (
        <View style={{ 
            paddingHorizontal: 20,
            marginBottom: 25
         }}>
         <TouchableWithoutFeedback onPress={() => props.navigasi.navigate('Search') }>
        <View style={{ 
            borderWidth: 1,
            borderColor: '#FAC213',
            borderRadius: 14,
            paddingVertical: 5,
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center'
         }}>
           <FontAwesome5 name="search" size={20} color="#FAC213" />
           <TextInput placeholder="Cari resep" editable={false} placeholderTextColor="#FAC213" style={{ 
             fontFamily: 'Poppins-Light',
             flexGrow: 1,
             paddingHorizontal: 15
            }} />
        </View>
        </TouchableWithoutFeedback>
        </View>
    )
}

export default ToSearch