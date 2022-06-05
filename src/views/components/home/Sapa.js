import React, { useEffect, useState } from "react"
import { Text } from "react-native"

const Sapa = () => {
    const [waktu, setWaktu] = useState('');

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
    }, [])
    
    return (
        <Text style={{ 
            fontFamily: 'Poppins-Medium',
            fontSize: 26,
            color: '#000',
            paddingHorizontal: 20,
            paddingTop: 20,
            marginBottom: 20
           }}>Selamat <Text style={{ color: '#FAC213' }}>{waktu}</Text></Text>
    )
}

export default Sapa