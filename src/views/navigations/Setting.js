import React, { useEffect, useState } from "react"
import Ionicon from "react-native-vector-icons/Ionicons"
import { Dimensions } from 'react-native';
import { BackHandler, ScrollView, Text, TouchableWithoutFeedback, View } from "react-native"
import PopUpName from "../components/setting/PopUpName"

const windowHeight = Dimensions.get('window').height;

const Setting = ({navigation}) => {
    const [isPop,setIsPop] = useState(false)
    const [dimensions] = useState({windowHeight})

    useEffect(() => {
        navigation.addListener('focus', () => {
            setIsPop(false)
          });
    }, [navigation])
    

    return (
        <View style={{ 
            paddingHorizontal: 20
         }}>
             <View style={{ height: dimensions.windowHeight }}>
             {
                 isPop &&
             <PopUpName setIsPop={setIsPop} />
             }
            <Text style={{ 
                fontFamily: 'Poppins-Medium',
                color: '#000',
                fontSize: 30,
                paddingTop: 20,
                marginBottom: 20
             }}>Setting</Text>

             <View>
                 <TouchableWithoutFeedback onPress={() => setIsPop(true)}>
                 <View style={{ 
                     flexDirection: 'row',
                     alignItems: 'center',
                     justifyContent: 'space-between',
                     marginBottom: 20
                  }}>
                    <View style={{ 
                        flexDirection: 'row',
                        alignItems: 'center'
                     }}>
                    <Ionicon name="eye-outline" color="#000" size={30} />
                    <Text style={{ 
                        fontFamily: 'Poppins-Regular',
                        color: '#000',
                        fontSize: 16,
                        marginLeft: 10
                     }}>Namamu</Text>
                     </View>
                     <Ionicon name="chevron-forward-outline" color="#000" size={30} />
                 </View>
                 </TouchableWithoutFeedback>
                 <TouchableWithoutFeedback onPress={() => BackHandler.exitApp()}>
                 <View style={{ 
                     flexDirection: 'row',
                     alignItems: 'center',
                     justifyContent: 'space-between'
                  }}>
                    <View style={{ 
                        flexDirection: 'row',
                        alignItems: 'center'
                     }}>
                    <Ionicon name="log-out-outline" color="#000" size={30} />
                    <Text style={{ 
                        fontFamily: 'Poppins-Regular',
                        color: '#000',
                        fontSize: 16,
                        marginLeft: 10
                     }}>Exit</Text>
                     </View>
                     <Ionicon name="chevron-forward-outline" color="#000" size={30} />
                 </View>
                 </TouchableWithoutFeedback>
             </View>
             </View>
        </View>
    )
}

export default Setting