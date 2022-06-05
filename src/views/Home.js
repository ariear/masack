import axios from "axios"
import React, { useState, useEffect } from "react"
import { View, Text, TextInput, Image, ImageBackground, ScrollView, TouchableWithoutFeedback , StyleSheet} from "react-native"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

const Home = ({navigation}) => {
  const [newRecipe,setNewRecipe] = useState([])
  const [recentRecipe, setRecentRecipe] = useState([])
  const [category,setCategory] = useState([])
  const [listCategory,setListCategory] = useState([])
  const [chooseCategory, setChooseCategory] = useState(true)
  
  useEffect(() => {
    axios.get('https://masak-apa-tomorisakura.vercel.app/api/recipes')
      .then(response => {
        setNewRecipe(response.data.results)
    })

    axios.get('https://masak-apa-tomorisakura.vercel.app/api/categorys/recipes')
      .then(response => {
        setListCategory(response.data.results)
      })

    axios.get('https://masak-apa-tomorisakura.vercel.app/api/recipes/2')
      .then(response => {
        setRecentRecipe(response.data.results)
      })

    clickCategory('resep-dessert')
  }, [])
  
  const clickCategory = (key) => {
    setChooseCategory(key)

    let wrap = []
    axios.get(`https://masak-apa-tomorisakura.vercel.app/api/categorys/recipes/${key}`)
      .then(response => {
        for (let i = 0; i < 4; i++) {
          const element = response.data.results[i]
          wrap.push(element) 
        }
        setCategory(wrap)
      })
  }
  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={{ 
        fontFamily: 'Poppins-Medium',
        fontSize: 26,
        color: '#000',
        paddingHorizontal: 20,
        paddingTop: 20,
        marginBottom: 20
       }}>Selamat <Text style={{ color: '#FAC213' }}>pagi</Text></Text>

       <View style={{ 
           paddingHorizontal: 20,
           marginBottom: 25
        }}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Search') }>
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
          <TextInput placeholder="Cari resep" editable={false} placeholderTextColor="#FAC213" style={{ 
            fontFamily: 'Poppins-Light',
            flexGrow: 1,
            paddingHorizontal: 15
           }} />
       </View>
       </TouchableWithoutFeedback>
       </View>

       <View style={{ 
         flexDirection: 'row',
         justifyContent: 'space-between',
         paddingHorizontal: 20,
         marginBottom: 15
        }}>
         <Text style={{ 
           fontFamily: 'Poppins-Medium',
           color: '#000',
           fontSize: 20
          }}>Resep Baru</Text>
         <Text style={{ 
           fontFamily: 'Poppins-Medium',
           color: '#FAC213',
           fontSize: 18,
           alignItems: 'center'
          }}>See all <FontAwesome5 name="arrow-right" size={17} /></Text>
       </View>

       <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ 
         paddingLeft: 20,
         marginBottom: 10
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'flex-start' , paddingRight: 20}}>
          {
            newRecipe.map((e,index) => 
          <TouchableWithoutFeedback key={index} onPress={() => navigation.navigate('DetailRecipe', { key: e.key })}>
         <View style={{ width: 300 , marginRight: 20}}>
            <ImageBackground source={{ uri: e.thumb }} 
              imageStyle={{ 
                borderRadius: 15
               }}
              style={{ 
                width: 300,
                height: 200,
                padding: 12,
                marginBottom: 10
               }}>
               <Text style={{ 
                 backgroundColor: '#FAC213',
                 alignSelf: 'baseline',
                 paddingVertical: 10,
                 paddingHorizontal: 15,
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

       <Text style={{ 
         fontFamily: 'Poppins-Medium',
         color: '#000',
         fontSize: 20,
         paddingHorizontal: 20,
         marginBottom: 10
        }}>Kategori populer</Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ 
          paddingLeft: 20,
          marginBottom: 80
         }}>
           <View style={{ 
             flexDirection: 'row',
             paddingRight: 20
            }}>
           {
             listCategory.map((e, index) =>
             <TouchableWithoutFeedback key={index} onPress={ () => clickCategory(e.key) }>
               <Text style={[styles.category, chooseCategory === e.key ? styles.categoryActive : '']}>{e.category}</Text>
             </TouchableWithoutFeedback> 
            )
           }
           </View>
        </ScrollView>

        <View style={{ 
          paddingHorizontal: 20,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between'
         }}>
           {
             category.map((e, index) => 
             <TouchableWithoutFeedback key={index} onPress={() => navigation.navigate('DetailRecipe', { key: e.key })}>
          <View style={{ 
            backgroundColor: '#FAC213',
            width: '45%',
            borderRadius: 20,
            marginBottom: 90
           }}>
             <View>
            <Image source={{ uri: e.thumb }} style={{ 
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
              }}>{e.key.split('-').join(' ')}</Text>

              <View style={{ 
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                paddingBottom: 10
               }}>
                <Text>{e.times}</Text>
                <FontAwesome5 name="bookmark" size={18} />
              </View>
          </View>
          </TouchableWithoutFeedback>
            )
           }
        </View>

        <View style={{ 
         flexDirection: 'row',
         justifyContent: 'space-between',
         paddingHorizontal: 20,
         marginBottom: 15
        }}>
         <Text style={{ 
           fontFamily: 'Poppins-Medium',
           color: '#000',
           fontSize: 20
          }}>Resep Terkini</Text>
         <Text style={{ 
           fontFamily: 'Poppins-Medium',
           color: '#FAC213',
           fontSize: 18,
           alignItems: 'center'
          }}>See all <FontAwesome5 name="arrow-right" size={17} /></Text>
       </View>

       <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ 
         paddingLeft: 20,
         marginBottom: 20
        }}>
          <View style={{ 
            flexDirection: 'row',
            paddingRight: 20
           }}>
          {
            recentRecipe.map((e,index) => 
            <TouchableWithoutFeedback key={index} onPress={() => navigation.navigate('DetailRecipe', { key: e.key })}>
         <View style={{ 
           width: 140,
           marginRight: 20
          }}>
           <Image source={{ uri: e.thumb }} style={{ 
             width: 140,
             height: 140,
             borderRadius: 10,
             marginBottom: 10
            }} />
            <Text style={{ 
              fontFamily: 'Poppins-Medium',
              color: '#000',
              fontSize: 16,
              textTransform: 'capitalize'
             }}>{e.key.split('-').join(' ')}</Text>
         </View>
         </TouchableWithoutFeedback>
            )
          }
          </View>
       </ScrollView>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  category: {
    fontFamily: 'Poppins-Regular',
    marginRight: 15
  },
  categoryActive: {
    color: '#000'
  }
})

export default Home