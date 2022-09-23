import { View, Text, StyleSheet, ScrollView } from 'react-native'
import {React, useState} from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'


const NewPasswordScreen = () => {
    const [code, setCode ] = useState('');
    const [newPassword, setNewPassword] = useState('')

    const navigation = useNavigation();
    

    const onSubmitPressed = () =>{
        navigation.navigate("Home Screen")
    }

    const onSignInPressed = () =>{
        navigation.navigate ("Sign In")
    }
    

 
    

  return (
      <ScrollView showsVerticalScrollIndicator = {false}>
    <View style = {styles.root}>
        <Text style ={styles.title}>New Password </Text>
        

        <CustomInput placeholder='Enter your Code'
         value ={code} 
         setValue ={setCode} />
        <CustomInput placeholder='Enter your New Password'
         value ={newPassword} 
         setValue ={setNewPassword} />

  
         <CustomButton text = "Submit " onPress={onSubmitPressed}/>


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

export default NewPasswordScreen