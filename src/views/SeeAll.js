import axios from "axios"
import React, { useEffect, useState } from "react"
import { Text, View, TouchableWithoutFeedback, ImageBackground, ScrollView } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import LoaderSearch from "./components/Search/LoaderSearch"

const SeeAll = ({route,navigation}) => {
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState([])
    const [title] = useState(route.params.title)

    useEffect(() => {
    
    setLoading(true)
    axios.get('https://masak-apa-tomorisakura.vercel.app/api/recipes/1')
        .then(response => {
            setData(response.data.results)
            setLoading(false)
        })
    }, [])
    
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ 
            paddingHorizontal: 20
         }}>
             <View style={{ 
                 paddingTop: 20,
                 flexDirection: 'row',
                 alignItems: 'baseline',
                 marginBottom: 25
              }}>
            <Ionicons name="arrow-back-outline" color="#000" size={30} onPress={() => navigation.goBack()} />              
            <Text style={{ 
                fontFamily: 'Poppins-Medium',
                color: '#000',
                fontSize: 25,
                marginLeft: 10
             }}>{title}</Text>
             </View>
            
            <View style={{ 
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between'
             }}>
             {
                loading ?
                <View style={{ 
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between'
                 }}>
                    <LoaderSearch />
                    <LoaderSearch />
                    <LoaderSearch />
                    <LoaderSearch />
                    <LoaderSearch />
                    <LoaderSearch />
                </View>
                        :
                 data.map((e,index) => 
             <TouchableWithoutFeedback key={index} onPress={() => navigation.navigate('DetailRecipe', { key: e.key })}>
        <View style={{ width: '48%', marginBottom: 30}}>
            <ImageBackground source={{ uri: e.thumb }} 
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
                }}>{e.dificulty}</Text>  
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
             }}>{e.times}</Text>
            <Ionicons name="bookmark-outline" size={18} color="#000" />
            </View>
             <Text style={{ 
               fontFamily: 'Poppins-Medium',
               fontSize: 18,
               color: '#000',
               textTransform: 'capitalize'
              }}>{e.key.split('-').join(' ')}</Text>
         </View>
         </TouchableWithoutFeedback>
                 )
             }
            </View>
        </ScrollView>
    )
}

export default SeeAll