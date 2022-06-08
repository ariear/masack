import React, {useState} from "react"
import { 
    TouchableWithoutFeedback,
    View,
    ImageBackground,
    Text } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from '@react-native-async-storage/async-storage';

const CardWishList = (props) => {
    const [colorIconWishlist, setcolorIconWishlist] = useState('bookmarks')

    const handleUnWishlist = (value) => {
        const newWish = [...props.dataWishtlist]
        const wishIndex = props.dataWishtlist.findIndex((wish) => wish.title === value.title)
        newWish.splice(wishIndex,1)
        
        AsyncStorage.setItem('wishtlist', JSON.stringify(newWish)).then(() => {
            props.setdataWishtlist(newWish)
        })
    }

    return (
        <TouchableWithoutFeedback onPress={() => props.navigasi.navigate('DetailRecipe', {key: props.e.title})}>
      <View style={{ marginBottom: 25 }}>
      <ImageBackground source={{ uri : props.e.thumb }} style={{ 
        width: '100%',
        height: 210,
        marginBottom: 10
       }}
        imageStyle={{ 
          borderRadius: 15
         }}>
      <View style={{ 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10
       }}>
        <Text style={{ 
          backgroundColor: '#FAC213',
          fontFamily: 'Poppins-Medium',
          color: '#fff',
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 10
         }}>{props.e.dificulty}</Text>
        <Ionicons name={colorIconWishlist} color="#FAC213" size={20} onPress={() => handleUnWishlist(props.e)} />
      </View>
      </ImageBackground>
      <Text style={{ 
        fontFamily: 'Poppins-Regular',
        color: 'red',
        fontSize: 14
       }}>{props.e.times}</Text>
      <Text style={{ 
        fontFamily: 'Poppins-Medium',
        color: '#000',
        fontSize: 18,
        textTransform: 'capitalize'
       }}>{props.e.title.split('-').join(' ')}</Text>
       </View>
       </TouchableWithoutFeedback>
    )
}

export default  CardWishList