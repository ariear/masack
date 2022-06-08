import React, {useState, useEffect} from "react"
import { View, Text } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Bar = (props) => {
    const [colorIconWishlist, setcolorIconWishlist] = useState('bookmark-outline')
    const [wishtlistLocal, setwishtlistLocal] = useState([])

    const addWishlist = () => {
        setcolorIconWishlist(colorIconWishlist === 'bookmark' ? 'bookmark-outline' : 'bookmark')
        
        const newData = [...wishtlistLocal, {
          title: props.slug,
          thumb: props.data.thumb,
          dificulty: props.data.dificulty,
          times: props.data.times
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
          e.title === props.slug ? setcolorIconWishlist('bookmark') : ''
        })
      }, [wishtlistLocal])

    return (
        <View style={{ 
            paddingTop: 20,
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
         }}>
        <View style={{ 
            flexDirection: 'row',
            alignItems: 'flex-end'
         }}>
        <Ionicon name="arrow-back-outline" color="#fff" size={35} onPress={() => props.navigasi.goBack()} />
         <Text style={{ 
             color: '#fff',
             fontFamily: 'Poppins-Medium',
             fontSize: 20
          }}> Menu Details</Text>
          </View>
          <Ionicon name={colorIconWishlist} color="#fff" size={30} onPress={() => addWishlist()} />
        </View>
    )
}

export default Bar