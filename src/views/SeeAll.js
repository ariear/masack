import axios from "axios"
import React, { useEffect, useState } from "react"
import { Text, View, TouchableWithoutFeedback, ImageBackground, ScrollView } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import LoaderSearch from "./components/Search/LoaderSearch"
import CardRecipe from "./components/seeall/CardRecipe"

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
        <View style={{ 
            paddingHorizontal: 20
         }}>
             <View style={{ 
                 paddingVertical: 20,
                 flexDirection: 'row',
                 alignItems: 'baseline'
              }}>
            <Ionicons name="arrow-back-outline" color="#000" size={30} onPress={() => navigation.goBack()} />              
            <Text style={{ 
                fontFamily: 'Poppins-Medium',
                color: '#000',
                fontSize: 25,
                marginLeft: 10
             }}>{title}</Text>
             </View>
            
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ 
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                paddingBottom: 100
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
                    <CardRecipe key={index} e={e} navigasi={navigation} />
                 )
             }
            </View>
            </ScrollView>
        </View>
    )
}

export default SeeAll