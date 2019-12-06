import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() 
{
  return (
    <View style={styles.container}>

      <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>Welcome to LudoTech</Text>
        </View>


    </View>
  );
}

const styles = StyleSheet.create
(
  {
    container:
    {
      flex: 1,
      backgroundColor: '#242B33',
      
    },
    getStartedContainer: 
    {
      alignItems: 'center',
      marginVertical: 50,
    },
    getStartedText: 
    {
      fontSize: 25,
      color: '#98B5D7',
      lineHeight: 25,
      marginTop : 30,
      textAlign: 'center',
    },
  }
);
