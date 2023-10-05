import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Texto from './components/componentesBasicos/Texto';
import Imagenes from './components/componentesBasicos/Imagenes';
import TextInput from './components/componentesBasicos/TextInput';
import Boton from './components/userInterface/Boton';

export default function App() {

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Texto />
          <Imagenes />
          <TextInput/>
          <Boton/>
        </ScrollView>
      </SafeAreaView>

    </>
  )
};


