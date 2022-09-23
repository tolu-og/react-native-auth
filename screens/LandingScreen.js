import { View, Text, StyleSheet, Image, Button } from 'react-native'
import React from 'react'
import Logo from '../assets/Landingscreen.png'
import { useNavigation } from '@react-navigation/native';

const LandingScreen = () => {
   
    const navigation = useNavigation();

    const onStartedPressed = () =>{
      navigation.navigate('SignInScreen');
  }

  return (
    <View style ={styles.container}>
        <View style ={styles.topContainer}>
      <Text style={styles.h1}>AlligatorChef</Text>
    <Text style={styles.h2}>Providing cajun bacon recipes since 1987.</Text>
    </View>

    <View style={styles.middleContainer}>
        <Image
         source={Logo}
          style={styles.image}
        />
     </View>

     <View style={styles.bottomContainer}>
    <View style={styles.buttonContainer}>
  <Button
    title="LET'S START"
    style={styles.button}
    onPress={onStartedPressed}
    color="#fff"
  />
</View>
</View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: '#f9fbfc',
      alignItems: 'center',
      width: '100%',
      
    },
    topContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
      },
      middleContainer: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      bottomContainer: {
        justifyContent: 'flex-end',
        width: '90%',
        margin: 20,
        padding: 10,
      },
    h1: {
      color: '#008F68',
      fontSize: 40,
    },
    h2: {
      color: 'blue',
      fontSize: 18,
      marginTop: 8,
    },
    image: {
        width: 300,
        height: 260,
        justifyContent: 'center',
      },
      buttonContainer: {
        backgroundColor: '#008F68',
        borderRadius: 5,
        padding: 8,
        margin: 8,
      },
  });

export default LandingScreen