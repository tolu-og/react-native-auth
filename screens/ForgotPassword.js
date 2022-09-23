import { View, Text, StyleSheet, ScrollView } from 'react-native'
import {React, useState} from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'


const ForgotPassword = () => {
    const [username, setUsername ] = useState('');

    
    const navigation = useNavigation();

    const onSendPressed = () =>{
        navigation.navigate("NewPasswordScreen")
    }

    const onSignInPressed = () =>{
      navigation.navigate("SignInScreen")
    }
    

 
    

  return (
      <ScrollView showsVerticalScrollIndicator = {false}>
    <View style = {styles.root}>
        <Text style ={styles.title}>Reset Your Password</Text>
        <Text>Username</Text>

        <CustomInput placeholder='Enter your Username'
         value ={username} 
         setValue ={setUsername} />

  
         <CustomButton text = "Send " onPress={onSendPressed}/>


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

export default ForgotPassword