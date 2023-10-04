import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function Texto() {
    const [titulo, setTitulo] = useState('Api de Text');

    const presionar = () => {
        setTitulo('API DE TEXTO PRESIONADO');
    }
    return (
        <View>
            <View style={estilos.contenApi}>
                <Text style={estilos.tituloApi} onPress={presionar}>
                    {titulo}
                </Text>
                <Text style={estilos.texto}
                    onPress={console.log('le di click')}>
                    elemento que me premite mostrar un
                    texto y agregarle estilos
                </Text>
            </View>
        </View>
    )
}

const estilos= StyleSheet.create({
    contenApi:{
      border:3,
      borderColor:'green',
      backgroundColor:'yellow'
    },
    tituloApi:{
      color:'red',
      fontSize:30,
      fontWeight:'bold',
      textAlign:'center'
    },
    texto:{
      fontSize:18,
      paddingHorizontal:10
    }
  })