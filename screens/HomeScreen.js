import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const handleSignOut = () =>{
    auth.signOut()
    .then(() =>{
      navigation.replace("SignInScreen")
    })
    .catch(error =>alert(error.message))
  }
  const navigation = useNavigation();
  return (
    <View styles= {styles.container}>
    <Text>
      Email: {auth.currentUser?.email}
    </Text>
    <CustomButton text = "Sign Out" onPress={handleSignOut}/>  
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  }
})