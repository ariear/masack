import React, {useState, useEffect} from "react"
import { 
    TouchableWithoutFeedback,
    View,
    Image,
    Text } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import AsyncStorage from '@react-native-async-storage/async-storage';

const CardKategoriPopuler = (props) => {
    const [colorIconWishlist, setcolorIconWishlist] = useState('bookmark-outline')
    const [wishtlistLocal, setwishtlistLocal] = useState([])

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

    return (
        <TouchableWithoutFeedback onPress={() => props.navigasi.navigate('DetailRecipe', { key: props.e.key })}>
        <View style={{ 
          backgroundColor: '#FAC213',
          width: '48%',
          borderRadius: 20,
          marginBottom: 90
         }}>
           <View>
          <Image source={{ uri: props.e.thumb }} style={{ 
            width: 130,
            height: 130,
            borderRadius: 100,
            borderWidth: 5,
            borderColor: '#D4D925',
            position: 'absolute',
            top: -70,
            alignSelf: 'center'
           }} />
           </View>
           <Text style={{ 
             fontFamily: 'Poppins-Medium',
             fontSize: 18,
             textAlign: 'center',
             paddingHorizontal: 7,
             paddingTop: 70,
             paddingBottom: 20,
             textTransform: 'capitalize'
            }}>{props.e.key.split('-').join(' ')}</Text>

            <View style={{ 
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              paddingBottom: 10
             }}>
              <Text>{props.e.times}</Text>
              <Ionicons name={colorIconWishlist} size={18} onPress={() => addWishlist(props.e)} />
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default CardKategoriPopuler