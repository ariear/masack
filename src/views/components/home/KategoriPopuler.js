import React, {useState, useEffect} from "react"
import { 
    Text, 
    View,
    ScrollView,
    TouchableWithoutFeedback,
    StyleSheet
     } from "react-native"
import axios from "axios"
import LoaderKategoriPopuler from "./LoaderKategoriPopuler"
import LoaderListKategori from "./LoaderListKategori"
import CardKategoriPopuler from "./CardKategoriPopuler"

const KategoriPopuler = (props) => {
    const [listCategory,setListCategory] = useState([])
    const [category,setCategory] = useState([])
    const [chooseCategory, setChooseCategory] = useState(true)

    const [loadingCardKategoryPopuler,setloadingCardKategoryPopuler] = useState(false)
    const [loadingListKategory,setloadingListKategory] = useState(false)

    useEffect(() => {
        setloadingListKategory(true)
        axios.get('https://masak-apa-tomorisakura.vercel.app/api/category/recipes')
          .then(response => {
            setListCategory(response.data.results)
            setloadingListKategory(false)
          })
    
        clickCategory('resep-dessert')
      }, [])

    const clickCategory = (key) => {
        setCategory([])
        setloadingCardKategoryPopuler(true)
        setChooseCategory(key)
    
        let wrap = []
        axios.get(`https://masak-apa-tomorisakura.vercel.app/api/category/recipes/${key}`)
          .then(response => {
            for (let i = 0; i < 4; i++) {
              const element = response.data.results[i]
              wrap.push(element) 
            }
            setCategory(wrap)
            setloadingCardKategoryPopuler(false)
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

        <ScrollView 
              horizontal={true} 
              showsHorizontalScrollIndicator={false}
              style={[styles.marginBCategory, loadingCardKategoryPopuler ? '' : styles.marginBCategoryLoaded]}>
           <View style={{ 
             flexDirection: 'row',
             paddingRight: 20
            }}>
              {
                loadingListKategory ?
                <View style={{ 
                  flexDirection: 'row',
                  paddingRight: 20
                 }}>
                  <LoaderListKategori />
                  <LoaderListKategori />
                  <LoaderListKategori />
                  <LoaderListKategori />
                </View>
                    :
                      listCategory.map((e, index) =>
                      <TouchableWithoutFeedback key={index} onPress={ () => {
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
            loadingCardKategoryPopuler ?
            <View style={{ 
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between'
             }}>
           <LoaderKategoriPopuler />
           <LoaderKategoriPopuler />
           <LoaderKategoriPopuler />
           <LoaderKategoriPopuler />
           </View>
            :
           
             category.map((e, index) => 
              <CardKategoriPopuler e={e} navigasi={props.navigasi} key={index} />
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
    },
    marginBCategory: {
      paddingLeft: 20
    },
    marginBCategoryLoaded: {
      marginBottom: 80
    }
  })

export default KategoriPopuler