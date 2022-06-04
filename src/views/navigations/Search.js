import React from "react"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { Text, View , TextInput} from "react-native"

const Search = () => {
    return (
        <View>
        <View style={{ 
            paddingHorizontal: 20,
            paddingTop: 20
         }}>
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
          <TextInput placeholder="Cari resep" autoFocus={true} placeholderTextColor="#FAC213" style={{ 
            fontFamily: 'Poppins-Light',
            flexGrow: 1,
            paddingHorizontal: 15
           }} />
       </View>
       </View>
        </View>
    )
}

export default Search