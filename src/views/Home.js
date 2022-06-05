import React from "react"
import {ScrollView} from "react-native"
import KategoriPopuler from "./components/home/KategoriPopuler"
import RecentRecipe from "./components/home/RecentRecipe"
import ResepBaru from "./components/home/ResepBaru"
import Sapa from "./components/home/Sapa"
import ToSearch from "./components/home/ToSearch"

const Home = ({navigation}) => {
  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Sapa />
      <ToSearch navigasi={navigation} />
      <ResepBaru navigasi={navigation} />
      <KategoriPopuler navigasi={navigation} />
      <RecentRecipe navigasi={navigation} />
    </ScrollView>
  )
}

export default Home