import React ,{useEffect, useState} from "react"
import { 
    ScrollView,
    View,
    Text,
    ImageBackground,
    TouchableWithoutFeedback } from "react-native"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import axios from 'axios'

const ResepBaru = (props) => {
    const [newRecipe,setNewRecipe] = useState([])

    useEffect(() => {
        axios.get('https://masak-apa-tomorisakura.vercel.app/api/recipes')
        .then(response => {
          setNewRecipe(response.data.results)
      })
    }, [])
    

    return (
      <View>
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
             <TouchableWithoutFeedback key={index} onPress={() => props.navigasi.navigate('DetailRecipe', { key: e.key })}>
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
          </View>
    )
}

export default ResepBaru