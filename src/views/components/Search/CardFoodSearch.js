import React , {useState , useEffect} from "react"
import { 
    TouchableWithoutFeedback,
    View,
    ImageBackground,
    Text } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import AsyncStorage from '@react-native-async-storage/async-storage';

const CardFoodSearch = (props) => {
    const [colorIconWishlist, setcolorIconWishlist] = useState('bookmark-outline')

    const addWishlist = (value) => {
        setcolorIconWishlist(colorIconWishlist === 'bookmark' ? 'bookmark-outline' : 'bookmark')
        
        const newData = [...props.wishtlistLocal, {
          title: value.key,
          thumb: value.thumb,
          dificulty: value.difficulty,
          times: value.times
        }]
        
        if (colorIconWishlist !== 'bookmark') {        
          AsyncStorage.setItem('wishtlist', JSON.stringify(newData)).then(() => {
            props.setwishtlistLocal(newData)
          })
        }
      }

    useEffect(() => {
        props.wishtlistLocal.forEach(e => {
          e.title === props.e.key ? setcolorIconWishlist('bookmark') : ''
        })
      }, [props.wishtlistLocal])

    return (
        <TouchableWithoutFeedback onPress={() => props.navigasi.navigate('DetailRecipe', { key: props.e.key })}>
        <View style={{ width: '48%', marginBottom: 30}}>
            <ImageBackground source={{ uri: props.e.thumb }} 
              imageStyle={{ 
                borderRadius: 10
               }}
              style={{ 
                width: '100%',
                height: 150,
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
                 borderRadius: 10,
                 fontSize: 12
                }}>{props.e.difficulty}</Text>  
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
            <Ionicons name={colorIconWishlist} size={19} color="#FAC213" onPress={() => addWishlist(props.e)} />
            </View>
             <Text style={{ 
               fontFamily: 'Poppins-Medium',
               fontSize: 17,
               color: '#000',
               textTransform: 'capitalize'
              }}>{props.e.key.split('-').join(' ')}</Text>
         </View>
         </TouchableWithoutFeedback>
    )
}

export default CardFoodSearch