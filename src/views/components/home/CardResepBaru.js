import React ,{useEffect, useState} from "react"
import { 
    View,
    Text,
    ImageBackground,
    TouchableWithoutFeedback } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppContextHome } from "../../../contexts/HomeContext";

const CardResepBaru = (props) => {
    const [colorIconWishlist, setcolorIconWishlist] = useState('bookmark-outline')

    const HomeContext = useAppContextHome()

    const addWishlist = (value) => {
      setcolorIconWishlist(colorIconWishlist === 'bookmark' ? 'bookmark-outline' : 'bookmark')
      
      const newData = [...HomeContext.wishtlistLocal, {
        title: value.key,
        thumb: value.thumb,
        dificulty: value.dificulty,
        times: value.times
      }]
      
      if (colorIconWishlist !== 'bookmark') {        
        AsyncStorage.setItem('wishtlist', JSON.stringify(newData)).then(() => {
          HomeContext.setwishtlistLocal(newData)
        })
      }
    }

    useEffect(() => {
      HomeContext.wishtlistLocal.forEach(e => {
        e.title === props.e.key ? setcolorIconWishlist('bookmark') : ''
      })
    }, [HomeContext.wishtlistLocal])
    

    return (
        <TouchableWithoutFeedback onPress={() => props.navigasi.navigate('DetailRecipe', { key: props.e.key })}>
        <View style={{ width: 300 , marginRight: 20}}>
           <ImageBackground source={{ uri: props.e.thumb }} 
             imageStyle={{ 
               borderRadius: 15
              }}
             style={{ 
               width: 300,
               height: 200,
               padding: 12,
               marginBottom: 10
              }}>
              <Text style={{ 
                backgroundColor: '#FAC213',
                alignSelf: 'baseline',
                paddingVertical: 10,
                paddingHorizontal: 15,
                color: '#fff',
                fontFamily: 'Poppins-Medium',
                borderRadius: 10
               }}>{props.e.dificulty}</Text>  
           </ImageBackground>
           <View style={{ 
             flexDirection: 'row',
             alignItems: 'center',
             justifyContent: 'space-between',
             paddingHorizontal: 5,
             marginBottom: 5
            }}>
           <Text style={{ 
             fontFamily: 'Poppins-Regular',
             color: 'red'
            }}>{props.e.times}</Text>
           <Ionicons name={colorIconWishlist} size={20} color="#FAC213" onPress={() => addWishlist(props.e)} />
           </View>
            <Text style={{ 
              fontFamily: 'Poppins-Medium',
              fontSize: 18,
              color: '#000',
              textTransform: 'capitalize'
             }}>{props.e.key.split('-').join(' ')}</Text>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default CardResepBaru