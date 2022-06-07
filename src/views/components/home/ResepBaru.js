import React ,{useEffect, useState} from "react"
import { 
    ScrollView,
    View,
    Text,
    ImageBackground,
    TouchableWithoutFeedback } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import axios from 'axios'
import LoaderNewRecipe from "./LoaderNewRecipe"
import CardResepBaru from "./CardResepBaru"


const ResepBaru = (props) => {
    const [newRecipe,setNewRecipe] = useState([])
    const [loadingRecipe,setLoadingRecipe] = useState(false)

    useEffect(() => {
        setLoadingRecipe(true)
        axios.get('https://masak-apa-tomorisakura.vercel.app/api/recipes')
        .then(response => {
          setNewRecipe(response.data.results)
          setLoadingRecipe(false)
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
          <TouchableWithoutFeedback onPress={() => props.navigasi.navigate('SeeAll', {title: 'Resep Baru'})}>
         <Text style={{ 
           fontFamily: 'Poppins-Medium',
           color: '#FAC213',
           fontSize: 18,
           alignItems: 'center'
          }}>See all <Ionicons name="arrow-forward-outline" size={20} /></Text>
          </TouchableWithoutFeedback>
       </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ 
          paddingLeft: 20,
          marginBottom: 10
        }}> 
            {
              loadingRecipe ?
              <View style={{ 
                flexDirection: 'row'
               }}>
             <LoaderNewRecipe />
             <LoaderNewRecipe />
             <LoaderNewRecipe />
             </View>
                      :
             <View style={{ flexDirection: 'row', alignItems: 'flex-start' , paddingRight: 20}}>
             {
               newRecipe.map((e,index) => 
                  <CardResepBaru key={index} e={e} navigasi={props.navigasi} />
               )
             }
             </View>
            }
          </ScrollView>
          </View>
    )
}

export default ResepBaru