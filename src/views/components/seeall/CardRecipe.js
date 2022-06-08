import React, {useState, useEffect} from "react"
import { 
    TouchableWithoutFeedback,
    View,
    ImageBackground,
    Text } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import AsyncStorage from '@react-native-async-storage/async-storage';

const CardRecipe = (props) => {
    const [colorIconWishlist, setcolorIconWishlist] = useState('bookmark-outline')
    const [wishtlistLocal, setwishtlistLocal] = useState([])

    const getData = () => {
        AsyncStorage.getItem('wishtlist').then(data => {
          if (data !== null) {
            setwishtlistLocal(JSON.parse(data))
          }
        })
    }

    useEffect(() => {
        getData()
        wishtlistLocal.forEach(e => {
          e.title === props.e.key ? setcolorIconWishlist('bookmark') : ''
        })
      }, [wishtlistLocal])

    const addWishlist = (value) => {
        setcolorIconWishlist(colorIconWishlist === 'bookmark' ? 'bookmark-outline' : 'bookmark')
        
        const newData = [...wishtlistLocal, {
          title: value.key,
          thumb: value.thumb,
          dificulty: value.dificulty,
          times: value.times
        }]
        
        if (colorIconWishlist !== 'bookmark') {        
          AsyncStorage.setItem('wishtlist', JSON.stringify(newData)).then(() => {
            setwishtlistLocal(newData)
          })
        }
      }

    return (
        <TouchableWithoutFeedback onPress={() => props.navigasi.navigate('DetailRecipe', { key: props.e.key })}>
        <View style={{ width: '48%', marginBottom: 30}}>
            <ImageBackground source={{ uri: props.e.thumb }} 
              imageStyle={{ 
                borderRadius: 15
               }}
              style={{ 
                width: '100%',
                height: 200,
                marginBottom: 10
               }}>
               <Text style={{ 
                 backgroundColor: '#FAC213',
                 alignSelf: 'baseline',
                 paddingVertical: 10,
                 paddingHorizontal: 15,
                 margin: 10,
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
            <Ionicons name={colorIconWishlist} size={18} color="#FAC213" onPress={() => addWishlist(props.e)} />
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

export default CardRecipe