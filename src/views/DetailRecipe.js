import axios from "axios"
import React, { useEffect, useState } from "react"
import Ionicon from "react-native-vector-icons/Ionicons"
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"
import LoaderTitle from "./components/detailrecipe/LoaderTitle"
import LoaderDesc from "./components/detailrecipe/LoaderDesc"
import LoaderBahan from "./components/detailrecipe/LoaderBahan"
import Bar from "./components/detailrecipe/Bar"

const DetailRecipe = ({route,navigation}) => {
    const [key] = useState(route.params.key)
    const [data,setData] = useState([])
    const [author, setAuthor] = useState('')
    const [ingredinent,setIngredient] = useState([])
    const [direction,setDirection] = useState([])
    const [isStep, setIsStep] = useState(false)
    const [readMore,setReadMore] = useState(false)

    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
      axios.get(`https://masak-apa-tomorisakura.vercel.app/api/recipe/${key}`)
        .then(response => {
            setData(response.data.results)
            setAuthor(response.data.results.author.user)
            setIngredient(response.data.results.ingredient)
            setDirection(response.data.results.step)
            setLoader(false)
        })
    }, [])

    return (
        <SafeAreaView>
            <ImageBackground source={{ uri: data.thumb }} style={{ 
                width: '100%',
                height: 270,
                justifyContent: 'space-between'
             }}>
            <Bar data={data} slug={key} navigasi={navigation} />
            <View style={{ 
                paddingBottom: 35
             }}>
                <Text style={{ 
                    fontFamily: 'Poppins-Regular',
                    color: '#fff',
                    textAlign: 'center'
                 }}>{data.times}</Text>
            </View>
            </ImageBackground>

            <ScrollView showsVerticalScrollIndicator={false} style={{ 
                backgroundColor: '#fff',
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                transform: [
                    {translateY: -30}
                ]
             }}>
                 <View style={{ 
                     paddingTop: 20,
                     paddingHorizontal: 20
                  }}>
                 <Text style={{ 
                     fontFamily: 'Poppins-Medium',
                     fontSize: 18,
                     color: '#000'
                  }}>{data.title || <LoaderTitle />}</Text>
                  <Text numberOfLines={readMore ? undefined : 5} style={{ 
                      fontFamily: 'Poppins-Regular',
                      fontSize: 14
                   }}>
                      {data.desc || <LoaderDesc />}
                  </Text>
                  {
                      !loader &&
                  <TouchableWithoutFeedback onPress={() => setReadMore(!readMore)}>
                   <Text style={{ 
                       fontFamily: 'Poppins-Light',
                       marginBottom: 12,
                       fontSize: 12
                    }}>{readMore ? 'lebih sedikit' : 'lebih banyak'}...</Text>
                    </TouchableWithoutFeedback>
                  }
                  <Text style={{ 
                      fontFamily: 'Poppins-Medium',
                      color: '#000',
                      fontSize: 16,
                      marginBottom: 10
                   }}>Resep dari {author}</Text>

                   <View style={{ borderWidth: 1, borderColor: '#A5BECC', marginBottom: 20 }}></View>

                   <View style={{ 
                       flexDirection: 'row',
                       justifyContent: 'space-between',
                       marginBottom: 20
                    }}>
                        <TouchableWithoutFeedback onPress={() => setIsStep(false)}>
                       <Text style={[styles.tabs, isStep ? '' : styles.tabActive]}>Bahan</Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => setIsStep(true)}>
                       <Text style={[styles.tabs, isStep ? styles.tabActive : '']}>Step</Text>
                        </TouchableWithoutFeedback>
                   </View>
                   <View style={{ 
                       paddingBottom: 270
                    }}>
                        {
                            loader &&
                            <LoaderBahan />
                        }
                   {
                       !isStep && 
                            ingredinent.map((e,index) => 
                                <View key={index} style={{ marginBottom: 10 }}>
                                    <Text style={{ 
                                        fontFamily: 'Poppins-Regular'
                                     }}>{e}</Text>
                                </View>
                            )
                    }
                   {
                       isStep && 
                            direction.map((e,index) => 
                                <View key={index} style={{ marginBottom: 10 }}>
                                    <Text style={{ 
                                        fontFamily: 'Poppins-Regular'
                                     }}>{e}</Text>
                                </View>
                            )
                    }
                    </View>
                 </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    tabs: {
        width: '47%',
        paddingVertical: 10,
        borderRadius: 11,
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Poppins-Medium'
    },
    tabActive: {
        backgroundColor: '#FAC213',
        color: '#fff'
    }
})

export default DetailRecipe