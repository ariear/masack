import React, {useState, useEffect} from "react"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import axios from "axios"
import { 
    View,
    Text,
    ScrollView,
    TouchableWithoutFeedback,
    Image } from "react-native"
import LoaderRecentRecipe from "./LoaderRecentRecipe"

const RecentRecipe = (props) => {
    const [recentRecipe, setRecentRecipe] = useState([])
    const [loadingRecentRecipe, setLoadingRecentRecipe] = useState(false)
  
    useEffect(() => {
      setLoadingRecentRecipe(true)
      axios.get('https://masak-apa-tomorisakura.vercel.app/api/recipes/2')
        .then(response => {
          setRecentRecipe(response.data.results)
          setLoadingRecentRecipe(false)
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
              loadingRecentRecipe ?
              <View style={{ 
                flexDirection: 'row',
                paddingRight: 20
               }}>
                <LoaderRecentRecipe />
                <LoaderRecentRecipe />
                <LoaderRecentRecipe />
                <LoaderRecentRecipe />
              </View>
                :
            recentRecipe.map((e,index) => 
            <TouchableWithoutFeedback key={index} onPress={() => props.navigasi.navigate('DetailRecipe', { key: e.key })}>
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
        </View>
    )
}

export default RecentRecipe