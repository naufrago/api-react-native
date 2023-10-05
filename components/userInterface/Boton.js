import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Boton(){
    return(
        <View style={estilos.area}> 
            <Text>aca iran los botones</Text>
        </View>
    )
}
const estilos = StyleSheet.create({    
    area:{
        backgroundColor:'yellow',
    }

})