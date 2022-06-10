import React from "react"
import {ScrollView, StatusBar} from "react-native"
import { AppContextHome } from "../contexts/HomeContext"
import KategoriPopuler from "./components/home/KategoriPopuler"
import RecentRecipe from "./components/home/RecentRecipe"
import ResepBaru from "./components/home/ResepBaru"
import Sapa from "./components/home/Sapa"
import ToSearch from "./components/home/ToSearch"

const Home = ({navigation}) => {
  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor="#FAC213" />
      <AppContextHome>
      <Sapa navigasi={navigation} />
      <ToSearch navigasi={navigation} />
      <ResepBaru navigasi={navigation} />
      <KategoriPopuler navigasi={navigation} />
      <RecentRecipe navigasi={navigation} />
      </AppContextHome>
    </ScrollView>
  )
}

export default Home