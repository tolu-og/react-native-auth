import { View, Text, StyleSheet, ScrollView } from 'react-native'
import {React, useState} from 'react'

import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const ConfirmEmailScreen = () => {
    const [code, setCode ] = useState('');

    const navigation = useNavigation();

    const onConfirmPressed = () =>{
        navigation.navigate("HomeScreen")
    }

    const onSignInPressed = () =>{
        navigation.navigate("SignInScreen")
    }
    const onResendPressed = () =>{
        console.warn("Resend Pressed")
    }

 
    

  return (
      <ScrollView showsVerticalScrollIndicator = {false}>
    <View style = {styles.root}>
        <Text style ={styles.title}>Confirm Email</Text>

        <CustomInput placeholder='Enter your confirmation code'
         value ={code} 
         setValue ={setCode} />

  
         <CustomButton text = "Confirm " onPress={onConfirmPressed}/>

         <CustomButton text = "Resend Code" onPress={onResendPressed} type="SECONDARY"/>
      <CustomButton text = "Back to sign in  " onPress={onSignInPressed} type="TERTIARY"/>
      

    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    text:{
        color: 'gray',
        marginVertical: 10,
    },
    link: {
            color: '#FDB075'
    },
    root:{
        alignItems: 'center',
        padding: 20,
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color: '#051C60',
        margin: 10,
    }
})

export default ConfirmEmailScreen