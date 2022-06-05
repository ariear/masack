import React, { useEffect, useState } from "react"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { Text, View , TextInput, ImageBackground, ScrollView, TouchableWithoutFeedback} from "react-native"
import axios from "axios"

const Search = ({navigation}) => {
    const [popularSearch,setPopularSearch] = useState([])
    const [isSearch,setIsSearch] = useState(false)
    const [valueSearch,setValueSearch] = useState([])
    const [charSearch,setCharSearch] = useState('')

    useEffect(() => {
      axios.get('https://masak-apa-tomorisakura.vercel.app/api/recipes')
            .then(response => {
                setPopularSearch(response.data.results)
            })
    }, [])
    
    const searchRecipe = () => {     
            if (charSearch == '') {
                return false
            } 
            setValueSearch([])
            setIsSearch(true)  
            axios.get(`https://masak-apa-tomorisakura.vercel.app/api/search/?q=${charSearch}`)
                .then(response => {
                    setValueSearch(response.data.results)
                })
    }

    return (
        <View>
        <View style={{ 
            paddingHorizontal: 20,
            paddingTop: 20,
            marginBottom: 30
         }}>
        <View style={{ 
           borderWidth: 1,
           borderColor: '#FAC213',
           borderRadius: 14,
           paddingVertical: 5,
           paddingHorizontal: 20,
           flexDirection: 'row',
           alignItems: 'center'
        }}>
          <FontAwesome5 name="search" size={20} color="#FAC213" />
          <TextInput placeholder="Cari resep" autoFocus={true} onChangeText={(e) => setCharSearch(e)} onSubmitEditing={() => searchRecipe()} placeholderTextColor="#FAC213" style={{ 
            fontFamily: 'Poppins-Light',
            flexGrow: 1,
            paddingHorizontal: 15
           }} />
       </View>
       </View>

        {
            !isSearch &&
            <View>
            <Text style={{ 
                paddingHorizontal: 20,
                fontFamily: 'Poppins-Medium',
                color: '#000',
                fontSize: 20,
                marginBottom: 10
                }}>Popular search today</Text>

                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ 
                    paddingHorizontal: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between'
                }}>
                    {
                        popularSearch.map((e,index) =>
                            <TouchableWithoutFeedback style={{ borderWidth: 1 }} key={index} onPress={() => navigation.navigate('DetailRecipe', { key: e.key })}>
                            <View style={{ width: '48%' }}>
                            <ImageBackground source={{ uri: e.thumb }} style={{ 
                                width: '100%',
                                paddingVertical: 25,
                                marginBottom: 20
                            }} imageStyle={{ 
                                width: '100%'
                            }}>
                                <Text style={{ 
                                    fontFamily: 'Poppins-Medium',
                                    color: '#fff',
                                    textTransform: 'capitalize',
                                    paddingHorizontal: 10
                                }}>{e.key.split('-').join(' ')}</Text>
                            </ImageBackground>
                            </View>
                            </TouchableWithoutFeedback>
                        )
                    }
                </View>
                </ScrollView>
                </View>
        }

        {
            isSearch && 
        <ScrollView showsVerticalScrollIndicator={false} style={{ 
            paddingHorizontal: 20,
            marginBottom: 100
         }}>
            <View style={{ 
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between'
             }}>
        {
            valueSearch.map((e,index) => 
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
                }}>{e.difficulty}</Text>  
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
            <FontAwesome5 name="bookmark" size={18} />
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
        }

        </View>
    )
}

export default Search