
import React, { useState } from 'react';
import { View, Text, StyleSheet,StatusBar,ActivityIndicator} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const Prestations=({prest})=>{

  const {prestation_id,conceled,rating,address,customer,provider}=prest;




    return (
      <>
     
   <View >

   <Text  style={styles.item} > Welcome to React Native! </Text> 
    <ScrollView style={{backgroundColor:"#f9c2ff"}}>
   <Text  style={styles.titleText}>Conceled:</Text>
      <Text style={styles.baseText}>{conceled}</Text>
      <Text  style={styles.titleText}>Rating:</Text>
      <Text style={styles.baseText}> pour ironing: {rating.ironing} et pour cleaning: {rating.cleaning}</Text>
      <Text  style={styles.titleText}>Address:</Text>
      <Text style={styles.baseText}> {address.street} {address.zipcode} {address.city}, {address.country}</Text>
       <Text  style={styles.titleText}>customer:</Text>
      <Text style={styles.baseText}> {customer.firstname}</Text>
      <Text style={styles.baseText}> {customer.lastname}</Text>
      <Text  style={styles.titleText}>Provider:</Text>
      <Text style={styles.baseText}> {provider.firstname}</Text>
      <Text style={styles.baseText}> {provider.lastname}</Text>
      </ScrollView>
      
 </View>
 
    </>)

    }



const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 10,
      marginVertical: 7,
      marginHorizontal: 16,
    
    },
    title: {
      fontSize: 32,
      flexDirection:'row',
      flex:1,
    },
      baseText: {
        fontFamily: "Cochin"
      },
      titleText: {
        fontSize: 20,
        fontWeight: "bold"
      }
  });

export default Prestations;