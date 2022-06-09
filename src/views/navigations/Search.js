import React, { useEffect, useState } from "react"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { Text, View , TextInput, ImageBackground, ScrollView, TouchableWithoutFeedback} from "react-native"
import axios from "axios"
import LoaderPopularSearch from "../components/Search/LoaderPopularSearch"
import LoaderSearch from "../components/Search/LoaderSearch"
import CardFoodSearch from "../components/Search/CardFoodSearch"

const Search = ({navigation}) => {
    const [popularSearch,setPopularSearch] = useState([])
    const [isSearch,setIsSearch] = useState(false)
    const [valueSearch,setValueSearch] = useState([])
    const [charSearch,setCharSearch] = useState('')
    const [notFound, setNotFound] = useState(false)

    const [isPopularSearchLoad,setisPopularSearchLoad] = useState(false)
    const [isValueSearchLoad,setIsValueSearchLoad] = useState(false)

    useEffect(() => {
        navigation.addListener('focus', () => {
            setIsSearch(false)
            setNotFound(false)
            setCharSearch('')
        });

        setisPopularSearchLoad(true)        
      axios.get('https://masak-apa-tomorisakura.vercel.app/api/recipes')
            .then(response => {
                setPopularSearch(response.data.results)
                setisPopularSearchLoad(false)
            })
    }, [navigation])
    
    const searchRecipe = () => {     
            if (charSearch == '') {
                setIsSearch(false)
                return false
            } 
            setNotFound(false)
            setIsValueSearchLoad(true)
            setValueSearch([])
            setIsSearch(true)  
            axios.get(`https://masak-apa-tomorisakura.vercel.app/api/search/?q=${charSearch}`)
                .then(response => {
                    response.data.results.length === 0 ? setNotFound(true) : setNotFound(false)
                    setValueSearch(response.data.results)
                    setIsValueSearchLoad(false)
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
          <TextInput placeholder="Cari resep" autoFocus={true} value={charSearch} onChangeText={(e) => setCharSearch(e)} onSubmitEditing={() => searchRecipe()} placeholderTextColor="#FAC213" style={{ 
            fontFamily: 'Poppins-Light',
            flexGrow: 1,
            paddingHorizontal: 15
           }} />
       </View>
       </View>
        <ScrollView showsVerticalScrollIndicator={false}>
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

                <View style={{ 
                    paddingHorizontal: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between'
                }}>
                    {
                        isPopularSearchLoad &&
                    <View style={{ 
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        paddingHorizontal: 20
                     }}>
                    <LoaderPopularSearch />
                    <LoaderPopularSearch />
                    <LoaderPopularSearch />
                    <LoaderPopularSearch />
                    </View>
                    }
                    {
                        popularSearch.map((e,index) =>
                            <TouchableWithoutFeedback style={{ borderWidth: 1 }} key={index} onPress={() => navigation.navigate('DetailRecipe', { key: e.key })}>
                            <View style={{ width: '48%' }}>
                            <ImageBackground source={{ uri: e.thumb }} style={{ 
                                width: '100%',
                                paddingVertical: 25,
                                marginBottom: 10
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
                </View>
        }
        {
            notFound && 
                <Text style={{ 
                    fontFamily: 'Poppins-Regular',
                    color: '#000',
                    textAlign: 'center'
                 }}>Resep tidak ada</Text>
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
                     isValueSearchLoad &&
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
                 }
        {
            valueSearch.map((e,index) => 
                <CardFoodSearch key={index} navigasi={navigation} e={e} />
            )
        }
        </View>
        </ScrollView>
        }
        </ScrollView>

        </View>
    )
}

export default Search