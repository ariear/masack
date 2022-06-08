import React, { useEffect, useState } from "react"
import { ImageBackground, ScrollView, Text, TouchableWithoutFeedback, View } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from "react-native-vector-icons/Ionicons";
import CardWishList from "../components/wishlist/CardWishList";

const WishList = ({navigation}) => {
    const [dataWishtlist, setdataWishtlist] = useState([])
    const [isLoad,setIsLoad] = useState(false)

    const getData = () => {
          setIsLoad(true)
          AsyncStorage.getItem('wishtlist').then(data => {
            if (data !== null) {
              setdataWishtlist(JSON.parse(data))
              setIsLoad(false)
            }
          })
      }

    useEffect(() => {
      navigation.addListener('focus', () => {
        getData()  
      });
      getData()
    }, [navigation])
    

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ 
            paddingHorizontal: 20
         }}>
            <Text style={{ 
                fontFamily: 'Poppins-Medium',
                color: '#000',
                fontSize: 30,
                paddingTop: 20,
                marginBottom: 10
             }}>WishList</Text>

          {
            isLoad ?
              <Text style={{ 
                fontFamily: 'Poppins-Regular',
                color: '#000',
                textAlign: 'center',
                fontSize: 14
               }}>Resep yang tersimpan belum ada</Text>
                    :
            dataWishtlist.map((e,index) => 
              <CardWishList key={index} e={e} navigasi={navigation} setdataWishtlist={setdataWishtlist} dataWishtlist={dataWishtlist} />
            )
          }
        </ScrollView>
    )
}

export default WishList