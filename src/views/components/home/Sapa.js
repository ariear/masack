import React, { useEffect, useState } from "react"
import { Text } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';

const Sapa = (props) => {
    const [waktu, setWaktu] = useState('');
    const [nama,SetNama] = useState('')

    useEffect(() => {
        const date = new Date().getHours() 
        if (date < 4) {
            setWaktu('malam')
        }else if (date < 10) {
            setWaktu('pagi')
        }else if (date < 13) {
            setWaktu('siang')
        }else if (date < 18) {
            setWaktu('sore')
        }else{
            setWaktu('malam')
        }

        props.navigasi.addListener('focus', () => {
            getData()
        });

        getData()
    }, [props.navigasi])

    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('name')
          if(value !== null) {
            SetNama(value)
          }
        } catch(e) {
          // error reading value
        }
      }
    
    return (
        <Text style={{ 
            fontFamily: 'Poppins-Medium',
            fontSize: 26,
            color: '#000',
            paddingHorizontal: 20,
            paddingTop: 20,
            marginBottom: 20
           }}>Selamat <Text style={{ color: '#FAC213' }}>{waktu} </Text>{nama}</Text>
    )
}

export default Sapa