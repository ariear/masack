import React, {useState, useEffect} from "react"
import { 
    Text, 
    View,
    ScrollView,
    TouchableWithoutFeedback,
    Image,
    StyleSheet
     } from "react-native"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import axios from "axios"

const KategoriPopuler = (props) => {
    const [listCategory,setListCategory] = useState([])
    const [category,setCategory] = useState([])
    const [chooseCategory, setChooseCategory] = useState(true)

    useEffect(() => {
        axios.get('https://masak-apa-tomorisakura.vercel.app/api/category/recipes')
          .then(response => {
            setListCategory(response.data.results)
          })
    
        clickCategory('resep-dessert')
      }, [])

    const clickCategory = (key) => {
        setChooseCategory(key)
    
        let wrap = []
        axios.get(`https://masak-apa-tomorisakura.vercel.app/api/category/recipes/${key}`)
          .then(response => {
            for (let i = 0; i < 4; i++) {
              const element = response.data.results[i]
              wrap.push(element) 
            }
            setCategory(wrap)
          })
      }

    return (
        <View>
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
             <TouchableWithoutFeedback key={index} onPress={ () => {
                setCategory([])
                clickCategory(e.key) 
              }}>
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
             <TouchableWithoutFeedback key={index} onPress={() => props.navigasi.navigate('DetailRecipe', { key: e.key })}>
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
        </View>
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

export default KategoriPopuler