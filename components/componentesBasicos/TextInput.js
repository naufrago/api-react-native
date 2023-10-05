import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Text_Input() {
    const [texto, setTexto] = useState('este campo esta vacio')
    return (
        <View style={estilos.area}>
            <Text>aca iran los input text</Text>
            <TextInput
                onChangeText={setTexto}
                value={texto}
                style={estilos.input}
                placeholder="este es el campo input"
                autoCapitalize='words'
                autoFocus

            />
            <TextInput
                onChangeText={setTexto}
                value={texto}
                style={estilos.input}
                placeholder="este es el campo input"
                autoCapitalize='words'
                placeholderTextColor='#ffffff'
                
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    area:{
        backgroundColor:'orange',
        color:'red'
    }

})