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

export default  function App(){
 
  return(
    <>
      <Texto/>
      <Imagenes/>
    </>
  )
};


