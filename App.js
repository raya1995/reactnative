import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Affichage from '../native/Component/Affichage';

const App = () => {

  return (
    <>
  <View style={styles.container}>
        
      </View>

        <Affichage />
     
        <View style={styles.container}>
        <Text style={{fontSize:20}}>Alooo</Text>
      </View>
  </>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'gold',
    height:100,
  }
});

export default App;